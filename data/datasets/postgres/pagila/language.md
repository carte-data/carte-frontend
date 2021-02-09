---
title: language
connection: postgres
location: postgres://pagila.public/language
database: pagila
columns:
  - name: language_id
    type: integer
    description: A surrogate primary key used to uniquely identify each language.
  - name: name
    type: character
    description: The English name of the language.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `language` table is a lookup table listing the possible languages that films can have for their language and original language values.

The `language` table is referred to by the [film](postgres/pagila/film) table.