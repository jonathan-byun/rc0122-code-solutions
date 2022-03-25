select "co"."name" as "Country",
  count("ci".*) as "Number of cities"
  from "cities" as "ci"
  join "countries" as "co" using ("countryId")
  group by "co"."countryId";
