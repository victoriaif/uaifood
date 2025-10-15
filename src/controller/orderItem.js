const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Listar todos os itens de pedido
exports.getAll = async (req, res) => {
  try {
    const orderItems = await prisma.orderItem.findMany({
      include: { order: true, item: true }
    });
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar item de pedido
exports.create = async (req, res) => {
  try {
    const { orderId, itemId, quantity } = req.body;
    const orderItem = await prisma.orderItem.create({
      data: {
        orderId: BigInt(orderId),
        itemId: BigInt(itemId),
        quantity
      }
    });
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar item de pedido por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderItem = await prisma.orderItem.findUnique({
      where: { id: BigInt(id) },
      include: { order: true, item: true }
    });
    if (!orderItem) return res.status(404).json({ error: 'Item de pedido não encontrado' });
    res.json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar item de pedido
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const orderItem = await prisma.orderItem.update({
      where: { id: BigInt(id) },
      data: { quantity }
    });
    res.json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar item de pedido
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.orderItem.delete({
      where: { id: BigInt(id) }
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
