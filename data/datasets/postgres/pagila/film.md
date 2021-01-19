---
title: film
connection: postgres
location: postgres://pagila.public/film
database: pagila
columns:
- name: film_id
  type: integer
  description: ''
- name: title
  type: text
  description: ''
- name: description
  type: text
  description: ''
- name: release_year
  type: integer
  description: ''
- name: language_id
  type: integer
  description: ''
- name: original_language_id
  type: integer
  description: ''
- name: rental_duration
  type: smallint
  description: ''
- name: rental_rate
  type: numeric
  description: ''
- name: length
  type: smallint
  description: ''
- name: replacement_cost
  type: numeric
  description: ''
- name: rating
  type: USER-DEFINED
  description: ''
- name: last_update
  type: timestamp with time zone
  description: ''
- name: special_features
  type: ARRAY
  description: ''
- name: fulltext
  type: tsvector
  description: ''
table_type: table
---

