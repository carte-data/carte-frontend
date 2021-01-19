---
title: pg_policy
connection: postgres
location: postgres://pagila.pg_catalog/pg_policy
database: pagila
columns:
- name: oid
  type: oid
  description: ''
- name: polname
  type: name
  description: ''
- name: polrelid
  type: oid
  description: ''
- name: polcmd
  type: '"char"'
  description: ''
- name: polpermissive
  type: boolean
  description: ''
- name: polroles
  type: ARRAY
  description: ''
- name: polqual
  type: pg_node_tree
  description: ''
- name: polwithcheck
  type: pg_node_tree
  description: ''
table_type: table
---

