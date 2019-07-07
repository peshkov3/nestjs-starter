create table "countries"(
  "id" serial constraint pk_countries primary key,
  "capital_id" integer null,
  "name_ru" varchar (255) not null,
  "name_en" varchar (255) not null,
  "name_de" varchar (255) null,
  "name_es" varchar (255) null,
  "name_fr" varchar (255) null,
  "name_ja" varchar (255) null,
  "native_name" varchar (255) null,
  "alpha2_code" varchar (255) not null,
  "alpha3_code" varchar (255) null,
  "flag" varchar (255) null,
  "region" varchar (255) not null,
  "subregion" varchar (255) null,
  "phone_code_prefix" varchar (255) null,
  "nationality" varchar (255) null,
  "currency" varchar (3) null,
  "creditsafe_country" varchar (255) not null,
  "numeric_code" varchar (255) null);

create table "regions"(
  "id" serial constraint pk_regions primary key,
  "country_id" integer null,
  "name_ru" varchar (255) not null,
  "name_en" varchar (255) not null,
  "name_ro" varchar (255) null,
  constraint fk_regions_country_id foreign key ("country_id") references "countries"("id") on delete cascade);

create table "cities"(
  "id" bigserial constraint pk_cities primary key,
  "country_id" bigint null,
  "region_id" bigint null,
  "latitude" real null,
  "longitude" real null,
  "timezone" varchar (255) null,
  "name_ru" varchar (255) not null,
  "name_en" varchar (255) not null,
  "name_ro" varchar (255) null,
  constraint fk_cities_region_id foreign key ("region_id") references "regions"("id")  on delete cascade,
  constraint fk_cities_country_id foreign key ("country_id") references "countries"("id")  on delete cascade);

-- alter table  "countries" add foreign key ("capital_id") references "cities"("id");

create table "industries"(
  "id" serial constraint pk_industries primary key,
  "name_ru" varchar (255) not null,
  "name_en" varchar (255) not null);