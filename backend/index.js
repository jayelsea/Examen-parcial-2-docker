import express from "express";
import cors from "cors";
import { Pool } from "pg";
import "dotenv/config.js";

const app  = express();
const pool = new Pool({
  host: "db",            
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

app.use(cors({ origin: "http://localhost:8080" }));  
app.use(express.json());                             

app.post("/api/registro", async (req, res) => {
  const { nombre, apellido, peso, talla, diagnostico } = req.body;


  if (![nombre, apellido, peso, talla, diagnostico].every(Boolean)) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO registros
         (nombre, apellido, peso, talla, diagnostico)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id`,
      [nombre, apellido, peso, talla, diagnostico]
    );
    res.status(201).json({ id: rows[0].id });
  } catch (err) {
    console.error("Error BDD:", err);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("API backend corriendo en puerto 3000"));
