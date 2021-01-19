---
title: pg_subscription
connection: postgres
location: postgres://pagila.pg_catalog/pg_subscription
database: pagila
columns:
- name: oid
  type: oid
  description: ''
- name: subdbid
  type: oid
  description: ''
- name: subname
  type: name
  description: ''
- name: subowner
  type: oid
  description: ''
- name: subenabled
  type: boolean
  description: ''
- name: subconninfo
  type: text
  description: ''
- name: subslotname
  type: name
  description: ''
- name: subsynccommit
  type: text
  description: ''
- name: subpublications
  type: ARRAY
  description: ''
table_type: table
---

