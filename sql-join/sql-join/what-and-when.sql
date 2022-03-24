select "f"."releaseYear" as "Release Year",
       "g"."name" as "Genre"
  from "films" as "f"
  join "filmGenre" using ("filmId")
  join "genres" as "g" using ("genreId")
  where "f"."title" = 'Boogie Amelie';
