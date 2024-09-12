const express = require('express');
const app = express();
const port = 3001;

// Servir archivos estáticos desde 'mi-widget'
app.use(express.static('mi-widget'));

// Cuando alguien accede a '/', enviar 'mi-widget.html'
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/mi-widget/mi-widget.html');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
