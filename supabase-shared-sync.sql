create table if not exists public.shared_app_state (
  id uuid primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

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
with check (updated_by = auth.uid());

drop policy if exists "Authenticated users can update shared app state" on public.shared_app_state;
create policy "Authenticated users can update shared app state"
on public.shared_app_state for update
to authenticated
using (true)
with check (updated_by = auth.uid());

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
with check (bucket_id = 'angebote');

drop policy if exists "Authenticated users can update offers" on storage.objects;
create policy "Authenticated users can update offers"
on storage.objects for update
to authenticated
using (bucket_id = 'angebote')
with check (bucket_id = 'angebote');
