---
title: film_category
connection: postgres
location: postgres://pagila.public/film_category
database: pagila
columns:
  - name: film_id
    type: integer
    description: A foreign key identifying the film.
  - name: category_id
    type: integer
    description: A foreign key identifying the category.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `film_category` table is used to support a many-to-many relationship between films and categories. For each category applied to a film, there will be one row in the `film_category` table listing the category and film.

The `film_category` table refers to the [film](postgres/pagila/film) and [category](postgres/pagila/category) tables using foreign keys.
