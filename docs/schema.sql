-- Modelo relacional de referencia (PostgreSQL). Los IDs externos del PSP se
-- guardan como referencias; nunca se almacenan PAN, CVC ni datos de tarjeta.
create table workspaces (
  id uuid primary key, name text not null, sector text not null,
  stripe_account_id text unique, created_at timestamptz not null default now()
);
create table users (
  id uuid primary key, workspace_id uuid not null references workspaces(id),
  email text not null, role text not null default 'owner', unique(workspace_id, email)
);
create table customers (
  id uuid primary key, workspace_id uuid not null references workspaces(id),
  email text not null, name text, stripe_customer_id text, created_at timestamptz not null default now()
);
create table products (
  id uuid primary key, workspace_id uuid not null references workspaces(id),
  name text not null, description text, status text not null default 'draft', created_at timestamptz not null default now()
);
create table prices (
  id uuid primary key, product_id uuid not null references products(id),
  amount integer not null, currency char(3) not null default 'EUR', interval text,
  stripe_price_id text unique
);
create table orders (
  id uuid primary key, workspace_id uuid not null references workspaces(id), customer_id uuid references customers(id),
  price_id uuid references prices(id), amount integer not null, status text not null,
  stripe_payment_intent_id text unique, created_at timestamptz not null default now()
);
create table subscriptions (
  id uuid primary key, workspace_id uuid not null references workspaces(id), customer_id uuid not null references customers(id),
  price_id uuid not null references prices(id), status text not null, stripe_subscription_id text unique,
  current_period_end timestamptz
);
create table premium_content (
  id uuid primary key, workspace_id uuid not null references workspaces(id), product_id uuid references products(id),
  title text not null, body text, published_at timestamptz
);
create table integrations (
  id uuid primary key, workspace_id uuid not null references workspaces(id),
  provider text not null, external_id text, status text not null default 'pending', config jsonb not null default '{}'
);
create table webhook_events (
  id text primary key, provider text not null, type text not null,
  processed_at timestamptz not null default now()
);
create index customers_workspace_idx on customers(workspace_id);
create index products_workspace_idx on products(workspace_id);
create index orders_workspace_created_idx on orders(workspace_id, created_at desc);
