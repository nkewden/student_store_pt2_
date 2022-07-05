CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  password    TEXT NOT NULL,
  username    TEXT NOT NULL UNIQUE,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
  name        TEXT NOT NULL
);

CREATE TABLE products (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT NOT NULL,
  image       TEXT NOT NULL,
  description TEXT NOT NULL,
  price       BIGINT NOT NULL

);

CREATE TABLE orders (
  id          SERIAL PRIMARY KEY,
  customer_id 
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()

);

CREATE TABLE users (
  id          SERIAL PRIMARY KEY,

);