const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Configurar Express para servir archivos estáticos desde las carpetas 'components' y 'css'
app.use('/components', express.static(path.join(__dirname, 'components')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// Ruta para servir la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Levantar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
