---
title: city
connection: postgres
location: postgres://pagila.public/city
database: pagila
columns:
  - name: city_id
    type: integer
    description: A surrogate primary key used to uniquely identify each city in the table.
  - name: city
    type: text
    description: The name of the city.
  - name: country_id
    type: integer
    description: A foreign key identifying the [country](postgres/pagila/country)
      that the city belongs to.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `city` table contains a list of cities.

The `city` table is referred to by a foreign key in the [address](postgres/pagila/address) table and refers to the [country](postgres/pagila/country) table using a foreign key.