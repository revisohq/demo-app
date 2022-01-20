CREATE TABLE "public"."trips" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" uuid NOT NULL, "name" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);COMMENT ON TABLE "public"."trips" IS E'Keep tracks of trips';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
