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

### Ver los registros guardados usando PGADMIN

1. Abre tu navegador y entra en: [http://localhost:5050](http://localhost:5050)

2. Inicia sesión con las credenciales configuradas:
   - **Email**: `admin@example.com`
   - **Contraseña**: `admin123`

3. Una vez dentro de pgAdmin, crea un nuevo servidor:
   - Haz clic derecho en **"Servers"** 
   - Selecciona **"Register" > "Server..."**

4. En la pestaña **General**:
   - **Name**: `PostgreSQL Local` (puedes poner cualquier nombre)

5. En la pestaña **Connection**, completa los siguientes datos:
   - **Host name/address**: `db`
   - **Port**: `5432`
   - **Username**: `user`
   - **Password**: `pass`
   - Marca la casilla **"Save Password"**

6. Haz clic en **Save**

7. Ahora deberías ver el servidor conectado en el panel izquierdo y tener acceso a la base de datos `salud` y sus tablas.


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

- Docker

- Docker Compose

