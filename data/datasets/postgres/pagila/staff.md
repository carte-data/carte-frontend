---
title: staff
connection: postgres
location: postgres://pagila.public/staff
database: pagila
columns:
  - name: staff_id
    type: integer
    description: A surrogate primary key that uniquely identifies the staff member.
  - name: first_name
    type: text
    description: The first name of the staff member.
  - name: last_name
    type: text
    description: The last name of the staff member.
  - name: address_id
    type: integer
    description: A foreign key to the staff member address in the address table.
  - name: email
    type: text
    description: The staff member email address.
  - name: store_id
    type: integer
    description: The staff member “home store.” The employee can work at other
      stores but is generally assigned to the store listed.
  - name: active
    type: boolean
    description: Whether this is an active employee. If employees leave, their rows
      are not deleted from this table; instead, this column is set to `FALSE`.
  - name: username
    type: text
    description: The user name used by the staff member to access the rental system.
  - name: password
    type: text
    description: The password used by the staff member to access the rental system.
      The password should be stored as a hash using the `SHA2()` function.
  - name: last_update
    type: timestamp with time zone
    description: When the row was created or most recently updated.
  - name: picture
    type: bytea
    description: A BLOB containing a photograph of the employee.
table_type: table
---
The `staff` table lists all staff members, including information for email address, login information, and picture.

The `staff` table refers to the [store](postgres/pagila/store) and [address](postgres/pagila/address) tables using foreign keys, and is referred to by the [rental](postgres/pagila/rental), [payment](postgres/pagila/payment), and [store](postgres/pagila/store) tables.