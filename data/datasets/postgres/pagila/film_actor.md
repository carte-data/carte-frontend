---
title: film_actor
connection: postgres
location: postgres://pagila.public/film_actor
database: pagila
columns:
  - name: actor_id
    type: integer
    description: A foreign key identifying the actor.
  - name: film_id
    type: integer
    description: A foreign key identifying the film.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `film_actor` table is used to support a many-to-many relationship between films and actors. For each actor in a given film, there will be one row in the `film_actor` table listing the actor and film.

The `film_actor` table refers to the [film](postgres/pagila/film) and [actor](postgres/pagila/actor) tables using foreign keys.