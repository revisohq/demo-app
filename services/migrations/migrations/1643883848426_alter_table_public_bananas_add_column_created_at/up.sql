alter table "public"."bananas" add column "created_at" timestamptz
 null default now();
