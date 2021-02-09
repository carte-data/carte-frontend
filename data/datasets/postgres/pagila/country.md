---
title: country
connection: postgres
location: postgres://pagila.public/country
database: pagila
columns:
  - name: country_id
    type: integer
    description: A surrogate primary key used to uniquely identify each country in
      the table.
  - name: country
    type: text
    description: The name of the country.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `country` table contains a list of countries.

The `country` table is referred to by a foreign key in the [city](postgres/pagila/city) table.