const express = require('express');
const router = express.Router();
const orderItemController = require('../controller/orderItem');

/**
 * @swagger
 * tags:
 *   name: OrderItem
 *   description: OrderItem operations
 */

/**
 * @swagger
 * /orderItem:
 *   get:
 *     summary: List all order items
 *     tags: [OrderItem]
 *     responses:
 *       200:
 *         description: List of order items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderItem'
 *   post:
 *     summary: Create a new order item
 *     tags: [OrderItem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderItem'
 *     responses:
 *       201:
 *         description: Order item created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderItem'
 */

/**
 * @swagger
 * /orderItem/{id}:
 *   get:
 *     summary: Get order item by ID
 *     tags: [OrderItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Order item found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderItem'
 *       404:
 *         description: Order item not found
 *   put:
 *     summary: Update order item
 *     tags: [OrderItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderItem'
 *     responses:
 *       200:
 *         description: Order item updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderItem'
 *   delete:
 *     summary: Delete order item
 *     tags: [OrderItem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Order item deleted
 */

router.get('/', orderItemController.getAll);
router.post('/', orderItemController.create);
router.get('/:id', orderItemController.getById);
router.put('/:id', orderItemController.update);
router.delete('/:id', orderItemController.delete);

module.exports = router;
