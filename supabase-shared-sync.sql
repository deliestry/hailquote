create table if not exists public.shared_app_state (
  id uuid primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

create table if not exists public.app_user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'viewer' check (role in ('admin', 'editor', 'viewer')),
  updated_at timestamptz not null default now()
);

insert into public.app_user_roles (user_id, email, role)
select id, email, case when row_number() over (order by created_at) = 1 then 'admin' else 'viewer' end
from auth.users
on conflict (user_id) do update set email = excluded.email;

create or replace function public.register_app_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.app_user_roles (user_id, email, role)
  values (new.id, new.email, 'viewer')
  on conflict (user_id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_app_role on auth.users;
create trigger on_auth_user_created_app_role
after insert or update of email on auth.users
for each row execute function public.register_app_user();

create or replace function public.is_app_admin()
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.app_user_roles where user_id = auth.uid() and role = 'admin') $$;

create or replace function public.can_edit_app()
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.app_user_roles where user_id = auth.uid() and role in ('admin','editor')) $$;

alter table public.app_user_roles enable row level security;
drop policy if exists "Users read roles" on public.app_user_roles;
create policy "Users read roles" on public.app_user_roles for select to authenticated using (true);
drop policy if exists "Admins update roles" on public.app_user_roles;
create policy "Admins update roles" on public.app_user_roles for update to authenticated using (public.is_app_admin()) with check (public.is_app_admin());
grant select, update on public.app_user_roles to authenticated;

alter table public.shared_app_state enable row level security;

drop policy if exists "Authenticated users can read shared app state" on public.shared_app_state;
create policy "Authenticated users can read shared app state"
on public.shared_app_state for select
to authenticated
using (true);

drop policy if exists "Authenticated users can insert shared app state" on public.shared_app_state;
create policy "Authenticated users can insert shared app state"
on public.shared_app_state for insert
to authenticated
with check (updated_by = auth.uid() and public.can_edit_app());

drop policy if exists "Authenticated users can update shared app state" on public.shared_app_state;
create policy "Authenticated users can update shared app state"
on public.shared_app_state for update
to authenticated
using (public.can_edit_app())
with check (updated_by = auth.uid() and public.can_edit_app());

grant select, insert, update on public.shared_app_state to authenticated;

insert into storage.buckets (id, name, public)
values ('angebote', 'Angebote', false)
on conflict (id) do update
set name = excluded.name, public = excluded.public;

drop policy if exists "Authenticated users can read offers" on storage.objects;
create policy "Authenticated users can read offers"
on storage.objects for select
to authenticated
using (bucket_id = 'angebote');

drop policy if exists "Authenticated users can upload offers" on storage.objects;
create policy "Authenticated users can upload offers"
on storage.objects for insert
to authenticated
with check (bucket_id = 'angebote' and public.can_edit_app());

drop policy if exists "Authenticated users can update offers" on storage.objects;
create policy "Authenticated users can update offers"
on storage.objects for update
to authenticated
using (bucket_id = 'angebote' and public.can_edit_app())
with check (bucket_id = 'angebote' and public.can_edit_app());
