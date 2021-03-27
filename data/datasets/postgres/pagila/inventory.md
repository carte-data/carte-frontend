---
title: inventory
connection: postgres
location: postgres://pagila.public/inventory
database: pagila
columns:
  - name: inventory_id
    type: integer
    description: A surrogate primary key used to uniquely identify each item in inventory.
  - name: film_id
    type: integer
    description: A foreign key pointing to the film this item represents.
  - name: store_id
    type: integer
    description: A foreign key pointing to the store stocking this item.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `inventory` table contains one row for each copy of a given film in a given store.

The `inventory` table refers to the [film](postgres/pagila/film) and [store](postgres/pagila/store) tables using foreign keys and is referred to by the [rental](postgres/pagila/rental) table.
