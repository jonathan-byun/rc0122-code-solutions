select "a"."line1" as "Street Address",
       "a"."district" as "District",
       "ci"."name" as "City",
       "co"."name" as "Country"
  from "addresses" as "a"
  join "cities" as "ci" using ("cityId")
  join "countries" as "co" using ("countryId");
