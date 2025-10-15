const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Listar todas as categorias
exports.getAll = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar uma categoria
exports.create = async (req, res) => {
  try {
    const { description } = req.body;
    const category = await prisma.category.create({
      data: { description }
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar categoria por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await prisma.category.findUnique({
      where: { id: BigInt(id) }
    });
    if (!category) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar categoria
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const category = await prisma.category.update({
      where: { id: BigInt(id) },
      data: { description }
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar categoria
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.category.delete({
      where: { id: BigInt(id) }
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
