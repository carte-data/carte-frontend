---
title: store
connection: postgres
location: postgres://pagila.public/store
database: pagila
columns:
  - name: store_id
    type: integer
    description: A surrogate primary key that uniquely identifies the store.
  - name: manager_staff_id
    type: integer
    description: A foreign key identifying the manager of this store.
  - name: address_id
    type: integer
    description: A foreign key identifying the address of this store.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `store` table lists all stores in the system. All inventory is assigned to specific stores, and staff and customers are assigned a “home store”.

The `store` table refers to the [staff](postgres/pagila/staff) and [address](postgres/pagila/address) tables using foreign keys and is referred to by the [staff](postgres/pagila/staff), [customer](postgres/pagila/customer), and [inventory](postgres/pagila/inventory) tables.