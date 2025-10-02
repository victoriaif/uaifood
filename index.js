const express = require('express');
const app = express();
const usuarios = require('./src/routes/usuarios'); //importa o arquivo usuarios.js

app.use(express.json());

// Conecta a rota /usuarios
app.use('/usuarios', usuarios);

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
