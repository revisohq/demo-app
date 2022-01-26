CREATE TABLE "public"."hardware" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" uuid NOT NULL, "hardware" text NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."hardware" IS E'Keep track who has what';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
