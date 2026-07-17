create table if not exists public.app_offers (
  id text primary key,
  owner_id uuid not null references auth.users(id) on delete cascade,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.app_offers enable row level security;

create table if not exists public.app_offer_viewers (
  offer_id text not null references public.app_offers(id) on delete cascade,
  viewer_id uuid not null references auth.users(id) on delete cascade,
  assigned_by uuid not null references auth.users(id),
  assigned_at timestamptz not null default now(),
  primary key (offer_id, viewer_id)
);

create or replace function public.can_view_assigned_offer(offer text)
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.app_offer_viewers where offer_id = offer and viewer_id = auth.uid()) $$;

create or replace function public.owns_offer(offer text)
returns boolean language sql stable security definer set search_path = public
as $$ select exists(select 1 from public.app_offers where id = offer and owner_id = auth.uid()) $$;

drop policy if exists "Offer visibility by role" on public.app_offers;
create policy "Offer visibility by role"
on public.app_offers for select to authenticated
using (
  public.is_app_admin()
  or exists (
    select 1 from public.app_user_roles r
    where r.user_id = auth.uid()
      and ((r.role = 'viewer' and public.can_view_assigned_offer(app_offers.id)) or (r.role = 'editor' and app_offers.owner_id = auth.uid()))
  )
);

drop policy if exists "Editors create own offers" on public.app_offers;
create policy "Editors create own offers"
on public.app_offers for insert to authenticated
with check (public.can_edit_app() and owner_id = auth.uid());

drop policy if exists "Owners update offers" on public.app_offers;
create policy "Owners update offers"
on public.app_offers for update to authenticated
using (public.is_app_admin() or (public.can_edit_app() and owner_id = auth.uid()))
with check (public.is_app_admin() or (public.can_edit_app() and owner_id = auth.uid()));

drop policy if exists "Owners delete offers" on public.app_offers;
drop policy if exists "Admins delete offers" on public.app_offers;
create policy "Admins delete offers"
on public.app_offers for delete to authenticated
using (public.is_app_admin());

grant select, insert, update, delete on public.app_offers to authenticated;

alter table public.app_offer_viewers enable row level security;
drop policy if exists "Read offer assignments" on public.app_offer_viewers;
create policy "Read offer assignments" on public.app_offer_viewers for select to authenticated
using (public.is_app_admin() or viewer_id = auth.uid() or public.owns_offer(offer_id));
drop policy if exists "Assign viewers to offers" on public.app_offer_viewers;
create policy "Assign viewers to offers" on public.app_offer_viewers for insert to authenticated
with check ((public.is_app_admin() or public.owns_offer(offer_id)) and assigned_by = auth.uid());
drop policy if exists "Remove offer assignments" on public.app_offer_viewers;
create policy "Remove offer assignments" on public.app_offer_viewers for delete to authenticated
using (public.is_app_admin() or public.owns_offer(offer_id));
grant select, insert, delete on public.app_offer_viewers to authenticated;

-- Bestehende Angebote werden dem Benutzer zugeordnet, der den gemeinsamen
-- Datenbestand zuletzt gespeichert hat. Administratoren behalten Zugriff auf alle.
insert into public.app_offers (id, owner_id, payload, created_at, updated_at)
select
  coalesce(offer->>'id', offer->>'quoteNumber', gen_random_uuid()::text),
  state.updated_by,
  offer - 'ownerId',
  coalesce((offer->>'savedAt')::timestamptz, now()),
  coalesce((offer->>'savedAt')::timestamptz, now())
from public.shared_app_state state
cross join lateral jsonb_array_elements(coalesce(state.payload->'quotes', '[]'::jsonb)) offer
where state.updated_by is not null
on conflict (id) do nothing;

update public.shared_app_state
set payload = payload - 'quotes' - 'currentQuote', updated_at = now();
