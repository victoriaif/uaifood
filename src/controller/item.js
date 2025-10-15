const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Listar todos os itens
exports.getAll = async (req, res) => {
  try {
    const items = await prisma.item.findMany({ include: { category: true } });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar um item
exports.create = async (req, res) => {
  try {
    const { description, unitPrice, categoryId } = req.body;
    const item = await prisma.item.create({
      data: { description, unitPrice, categoryId: BigInt(categoryId) }
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar item por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await prisma.item.findUnique({
      where: { id: BigInt(id) },
      include: { category: true }
    });
    if (!item) return res.status(404).json({ error: 'Item não encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar item
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, unitPrice, categoryId } = req.body;
    const item = await prisma.item.update({
      where: { id: BigInt(id) },
      data: { description, unitPrice, categoryId: BigInt(categoryId) }
    });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar item
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.item.delete({
      where: { id: BigInt(id) }
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
