---
title: rental
connection: postgres
location: postgres://pagila.public/rental
database: pagila
columns:
  - name: rental_id
    type: integer
    description: A surrogate primary key that uniquely identifies the rental.
  - name: rental_date
    type: timestamp with time zone
    description: The date and time that the item was rented.
  - name: inventory_id
    type: integer
    description: The item being rented.
  - name: customer_id
    type: integer
    description: The customer renting the item.
  - name: return_date
    type: timestamp with time zone
    description: The date and time the item was returned.
  - name: staff_id
    type: integer
    description: The staff member who processed the rental.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `rental` table contains one row for each rental of each inventory item with information about who rented what item, when it was rented, and when it was returned.

The `rental` table refers to the [inventory](postgres/pagila/inventory), [customer](postgres/pagila/customer), and [staff](postgres/pagila/staff) tables and is referred to by the [payment](postgres/pagila/payment) table.
