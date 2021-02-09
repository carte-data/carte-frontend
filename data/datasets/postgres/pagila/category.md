---
title: category
connection: postgres
location: postgres://pagila.public/category
database: pagila
columns:
  - name: category_id
    type: integer
    description: A surrogate primary key used to uniquely identify each category in
      the table.
  - name: name
    type: text
    description: The name of the category.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `category` table lists the categories that can be assigned to a film.

The category table is joined to the [film](postgres/pagila/film) table by means of the [film_category](postgres/pagila/film_category) table.

