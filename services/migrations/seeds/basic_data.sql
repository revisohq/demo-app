
-- Remove existing seeds:
DELETE FROM "public"."users" WHERE "id" = 'a0d95e7e-2eaf-448b-b75f-79f6dbc99a50';
DELETE FROM "public"."users" WHERE "id" = 'b7278163-ea32-418a-82bd-f22b971398e1';

INSERT INTO "public"."users"("id", "name") VALUES 
   (E'a0d95e7e-2eaf-448b-b75f-79f6dbc99a50', E'luke')
,  (E'b7278163-ea32-418a-82bd-f22b971398e1', E'ian')
;

INSERT INTO "public"."categories"("id", "user_id", "name", "is_active") VALUES 
-- Luke
  (E'42d62bf7-43ae-4f8a-ad67-95d29dc96a89', E'a0d95e7e-2eaf-448b-b75f-79f6dbc99a50', E'food', true)
, (E'2e25b603-0fe6-40ec-9612-6a9825591341', E'a0d95e7e-2eaf-448b-b75f-79f6dbc99a50', E'travels', true)
, (E'e6651c26-571a-4c56-9304-c12086009a92', E'a0d95e7e-2eaf-448b-b75f-79f6dbc99a50', E'health', true)
-- Ian
, (E'da7088fa-94b9-4644-a140-91a981cd4f8b', E'b7278163-ea32-418a-82bd-f22b971398e1', E'guns', true)
, (E'c032cd8e-ddb1-4a99-a415-a32c620840b6', E'b7278163-ea32-418a-82bd-f22b971398e1', E'ammos', true)
, (E'cfe3f438-6e1a-4b55-b040-e16ab88b595b', E'b7278163-ea32-418a-82bd-f22b971398e1', E'spaceship', true)
;

INSERT INTO "public"."expenses"("id", "created_at", "user_id", "category_id", "amount", "currency", "note") VALUES 
-- Luke // food
  (E'69abd49c-70de-4d93-a717-0d6bc66057d5', E'2021-12-18T09:05:09.574663+00:00', E'a0d95e7e-2eaf-448b-b75f-79f6dbc99a50', E'42d62bf7-43ae-4f8a-ad67-95d29dc96a89', 100, E'sek', E'chocolate bar')
, (E'e0d7e5d5-ca74-4f8c-b3fe-1a7234290b42', E'2021-11-18T09:05:09.574663+00:00', E'a0d95e7e-2eaf-448b-b75f-79f6dbc99a50', E'42d62bf7-43ae-4f8a-ad67-95d29dc96a89', 80, E'sek', E'apple juice')
-- Luke // travels
, (E'0f9694c3-2ed7-4ee3-be2a-4d978ba95b95', E'2021-12-09T09:05:09.574663+00:00', E'a0d95e7e-2eaf-448b-b75f-79f6dbc99a50', E'2e25b603-0fe6-40ec-9612-6a9825591341', 80, E'sek', E'trip to Tatooine')
;

