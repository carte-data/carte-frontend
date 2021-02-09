---
title: customer
connection: postgres
location: postgres://pagila.public/customer
database: pagila
columns:
  - name: customer_id
    type: integer
    description: A surrogate primary key used to uniquely identify each customer in
      the table.
  - name: store_id
    type: integer
    description: A foreign key identifying the customer “home store.” Customers are
      not limited to renting only from this store, but this is the store at
      which they generally shop.
  - name: first_name
    type: text
    description: The customer first name.
  - name: last_name
    type: text
    description: The customer last name.
  - name: email
    type: text
    description: The customer email address.
  - name: address_id
    type: integer
    description: A foreign key identifying the customer address in the
      [address](postgres/pagila/address) table.
  - name: create_date
    type: date
    description: The date the customer was added to the system. This date is
      automatically set using a trigger during an INSERT.
  - name: active
    type: integer
    description: Indicates whether the customer is an active customer. Setting this
      to `FALSE` serves as an alternative to deleting a customer outright. Most
      queries should have a `WHERE active = TRUE` clause.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
table_type: table
---
The `customer` table contains a list of all customers.

The `customer` table is referred to in the [payment](postgres/pagila/payment) and [rental](postgres/pagila/rental) tables and refers to the [address](postgres/pagila/address) and [store](postgres/pagila/store) tables using foreign keys.