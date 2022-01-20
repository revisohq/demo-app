CREATE TABLE "public"."expenses" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(), 
  "created_at" timestamptz NOT NULL DEFAULT now(), 
  "user_id" uuid NOT NULL, 
  "category_id" uuid NOT NULL, 
  "amount" numeric NOT NULL,
  "currency" text NOT NULL, 
  "note" text NOT NULL,
  "conversion_data" jsonb NOT NULL DEFAULT '{}', 
  "amount_eur" numeric NOT NULL DEFAULT 0, 
  PRIMARY KEY ("id") , 
  FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE cascade ON DELETE cascade, 
  FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON UPDATE cascade ON DELETE cascade
);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
