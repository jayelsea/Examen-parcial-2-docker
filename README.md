# Examen-parcial-2-docker
# 🥗 Proyecto Diagnóstico Nutricional

Este proyecto permite calcular y registrar el diagnóstico nutricional de una persona según su IMC (Índice de Masa Corporal), utilizando un stack completo con **Docker Compose**, **Node.js**, **PostgreSQL**, y un **frontend en HTML/CSS**.

---

## 🚀 Cómo levantar el proyecto

### 1. Entra al directorio del proyecto

```bash
cd proyecto-nutricion
```

### 2. Correr Docker

```bash
sudo docker compose up --build
```
### 3. Probar la aplicacion 

```bash
http://localhost:8080/
```
```bash
POST http://localhost:3000/api/diagnostico
```
### 🧰 Comandos útiles

### Ver los registros guardados en la base de datos

```bash
sudo docker exec -it postgres_container psql -U user -d salud
```
Dentro del cliente psql:

```bash
SELECT * FROM diagnosticos;
```
### Detener todos los servicios

```bash
sudo docker compose down
```
### 📂 Estructura del proyecto

proyecto-nutricion/
├── backend/              # API Node.js
├── frontend/             # HTML y CSS
├── docker-compose.yml    # Orquestador de servicios
├── init.sql              # Script SQL de tabla
└── README.md             # Documentación del proyecto

### ✅ Requisitos
Docker

Docker Compose

