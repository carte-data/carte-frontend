---
title: pg_rewrite
connection: postgres
location: postgres://pagila.pg_catalog/pg_rewrite
database: pagila
columns:
- name: oid
  type: oid
  description: ''
- name: rulename
  type: name
  description: ''
- name: ev_class
  type: oid
  description: ''
- name: ev_type
  type: '"char"'
  description: ''
- name: ev_enabled
  type: '"char"'
  description: ''
- name: is_instead
  type: boolean
  description: ''
- name: ev_qual
  type: pg_node_tree
  description: ''
- name: ev_action
  type: pg_node_tree
  description: ''
table_type: table
---

