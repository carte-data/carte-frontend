---
title: film
connection: postgres
location: postgres://pagila.public/film
database: pagila
columns:
  - name: film_id
    type: integer
    description: A surrogate primary key used to uniquely identify each film in the
      table.
  - name: title
    type: text
    description: The title of the film.
  - name: description
    type: text
    description: A short description or plot summary of the film.
  - name: release_year
    type: integer
    description: The year in which the movie was released.
  - name: language_id
    type: integer
    description: A foreign key pointing at the [language](postgres/pagila/language)
      table; identifies the language of the film.
  - name: original_language_id
    type: integer
    description: A foreign key pointing at the [language](postgres/pagila/language)
      table; identifies the original language of the film. Used when a film has been
      dubbed into a new language.
  - name: rental_duration
    type: smallint
    description: The length of the rental period, in days.
  - name: rental_rate
    type: numeric
    description: The cost to rent the film for the period specified in the rental_duration
      column.
  - name: length
    type: smallint
    description: The duration of the film, in minutes.
  - name: replacement_cost
    type: numeric
    description: The amount charged to the customer if the film is not returned or
      is returned in a damaged state.
  - name: rating
    type: USER-DEFINED
    description: 'The rating assigned to the film. Can be one of: `G`, `PG`, `PG-13`,
      `R`, or `NC-17`.'
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
  - name: special_features
    type: ARRAY
    description: 'Lists which common special features are included on the DVD. Can
      be zero or more of: `Trailers`, `Commentaries`, `Deleted Scenes`, `Behind the
      Scenes`.'
  - name: fulltext
    type: tsvector
    description: ' '
table_type: table
---
The `film` table is a list of all films potentially in stock in the stores. The actual in-stock copies of each film are represented in the [inventory](postgres/pagila/inventory) table.

The `film` table refers to the [language](postgres/pagila/language) table and is referred to by the [film_category](postgres/pagila/film_category), [film_actor](postgres/pagila/film_actor), and [inventory](postgres/pagila/inventory) tables.
