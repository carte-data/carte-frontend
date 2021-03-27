---
title: address
connection: postgres
location: postgres://pagila.public/address
database: pagila
columns:
  - name: address_id
    type: integer
    description: A surrogate primary key used to uniquely identify each address in
      the table.
  - name: address
    type: text
    description: The first line of an address.
  - name: address2
    type: text
    description: An optional second line of an address.
  - name: district
    type: text
    description: The region of an address, this may be a state, province, prefecture,
      etc.
  - name: city_id
    type: integer
    description: A foreign key pointing to the [city](postgres/pagila/city) table.
  - name: postal_code
    type: text
    description: The postal code or ZIP code of the address (where applicable).
  - name: phone
    type: text
    description: The telephone number for the address.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `address` table contains address information for customers, staff, and stores.

The `address` table primary key appears as a foreign key in the [customer](postgres/pagila/customer), [staff](postgres/pagila/staff), and [store](postgres/pagila/store) tables.
