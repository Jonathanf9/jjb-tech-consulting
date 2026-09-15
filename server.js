 // ==========================================
// 1. IMPORTACIONES PRINCIPALES
// ==========================================
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3000;

// ==========================================
// 2. CONFIGURACIONES (Middlewares)
// ==========================================
app.use(cors()); // Permite que el HTML (frontend) se comunique con el servidor
app.use(express.json()); // Procesamos los datos que vienen del formulario

// ==========================================
// 3. BASE DE DATOS Y RUTAS
// ==========================================
// Creamos/Conectamos la Base de Datos
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) return console.error("Error al crear BD:", err.message);
    console.log('✅ Base de datos SQLite lista.');
});

// Creamos la tabla "contactos"
db.run(`CREATE TABLE IF NOT EXISTS contactos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    email TEXT,
    telefono TEXT,
    pais TEXT,
    detalles TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);

// Es la ruta, la cual permite recibir el registro
app.post('/api/registro', (req, res) => {
    const { nombre, email, telefono, pais, detalles } = req.body;
    const sql = `INSERT INTO contactos (nombre, email, telefono, pais, detalles) VALUES (?, ?, ?, ?, ?)`;

    db.run(sql, [nombre, email, telefono, pais, detalles], function(err) {
        if (err) return res.status(400).json({ error: err.message });
        
        // DEVOLVEMOS LOS DATOS AL FRONTEND
        res.json({ 
            id: this.lastID, 
            nombre, 
            email, 
            pais, 
            status: "Registrado en SQLite" 
        });
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

