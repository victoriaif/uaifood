const prisma = require('../../prisma/prismaClient');

// Criar usuário
async function criarUsuario(req, res) {
    const { nome, email, senha, data_nascimento } = req.body;
    try {
        const novoUsuario = await prisma.usuario.create({
            data: {
                nome,
                email,
                senha,
                data_nascimento: new Date(data_nascimento),
            },
        });
        return res.status(201).json(novoUsuario);
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao criar usuário.' });
    }
}

// Listar todos
async function listarUsuarios(req, res) {
    try {
        const usuarios = await prisma.usuario.findMany();
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao listar usuários.' });
    }
}

// Buscar por ID
async function buscarUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
        const usuario = await prisma.usuario.findUnique({
            where: { id: Number(id) }
        });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar usuário.' });
    }
}

// Atualizar usuário
async function atualizarUsuario(req, res) {
    const { id } = req.params;
    const { nome, email, senha, data_nascimento } = req.body;

    try {
        const usuarioAtualizado = await prisma.usuario.update({
            where: { id: Number(id) },
            data: {
                nome,
                email,
                senha,
                data_nascimento: new Date(data_nascimento),
            },
        });

        return res.status(200).json(usuarioAtualizado);
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao atualizar usuário.' });
    }
}

// Deletar usuário
async function deletarUsuario(req, res) {
    const { id } = req.params;

    try {
        await prisma.usuario.delete({
            where: { id: Number(id) }
        });

        return res.status(200).json({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao deletar usuário.' });
    }
}

module.exports = { 
    criarUsuario, 
    listarUsuarios, 
    buscarUsuarioPorId, 
    atualizarUsuario, 
    deletarUsuario 
};
