const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API de Diagnóstico Nutricional is running');
});

app.post('/api/diagnostico', async (req, res) => {
  try {
    const { nombre, apellido, peso, talla } = req.body;
    const imc = peso / (talla * talla);
    let diagnostico = '';

    if (imc < 18.5) {
      diagnostico = 'Bajo peso';
    } else if (imc < 25) {
      diagnostico = 'Peso normal';
    } else if (imc < 30) {
      diagnostico = 'Sobrepeso';
    } else {
      diagnostico = 'Obesidad';
    }

    const result = await pool.query(
      'INSERT INTO diagnosticos (nombre, apellido, peso, talla, diagnostico) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nombre, apellido, peso, talla, diagnostico]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error al insertar diagnóstico:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.get('/api/todos', async (req, res) => {
  const result = await pool.query('SELECT * FROM diagnosticos');
  res.json(result.rows);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
