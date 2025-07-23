// Importa express
const express = require('express');

// Crea la aplicación
const app = express();

// Define el puerto
const PORT = 3000;

// Ruta GET básica
app.get('/saludo', (req, res) => {
res.json({ mensaje: 'Hola desde el backend' });
});

// Arranca el servidor
app.listen(PORT, '0.0.0.0', () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
