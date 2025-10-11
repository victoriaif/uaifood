const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./configs/swaggerConfig');
const app = express();
const usuarios = require('./src/routes/usuarios'); //importa o arquivo usuarios.js

app.use(express.json());

// Rota para a documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Conecta a rota /usuarios
app.use('/usuarios', usuarios);

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
