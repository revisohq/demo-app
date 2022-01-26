alter table "public"."hardware"
  add constraint "hardware_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update cascade on delete cascade;
