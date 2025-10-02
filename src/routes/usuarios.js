const express = require('express');
const router = express.Router();

const { 
    criarUsuario, 
    listarUsuarios, 
    buscarUsuarioPorId, 
    atualizarUsuario, 
    deletarUsuario 
} = require('../controller/usuarios');

// Criar
router.post('/', criarUsuario);

// Listar todos
router.get('/', listarUsuarios);

// Buscar por ID
router.get('/:id', buscarUsuarioPorId);

// Atualizar
router.put('/:id', atualizarUsuario);

// Deletar
router.delete('/:id', deletarUsuario);

module.exports = router;
