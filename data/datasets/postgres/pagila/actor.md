---
title: actor
connection: postgres
location: postgres://pagila.public/actor
database: pagila
columns:
  - name: actor_id
    type: integer
    description: A surrogate primary key used to uniquely identify each actor in the table.
  - name: first_name
    type: text
    description: The actor first name.
  - name: last_name
    type: text
    description: The actor last name.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `actor` table lists information for all actors.

The `actor` table is joined to the [film](postgres/pagila/film) table by means of the [film_actor](postgres/pagila/film_actor) table.