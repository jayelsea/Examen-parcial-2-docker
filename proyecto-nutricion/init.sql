CREATE TABLE IF NOT EXISTS diagnosticos (
  id SERIAL PRIMARY KEY,
  nombre TEXT,
  apellido TEXT,
  peso NUMERIC,
  talla NUMERIC,
  diagnostico TEXT
);