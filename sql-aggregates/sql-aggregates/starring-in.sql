select count("c".*) as "Number of Films",
  "g"."name" as "genre"
  from "actors" as "a"
  join "castMembers" as "c" using ("actorId")
  join "filmGenre" as "fg" using ("filmId")
  join "genres" as "g" using ("genreId")
  where "a"."firstName" = 'Lisa'
        and "a"."lastName" = 'Monroe'
  group by "g"."name";
