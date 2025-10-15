const express = require('express');
const router = express.Router();

const { 
  createUser, 
  listUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} = require('../controller/user');

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User operations
 */


/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     description: Adds a new user to the system based on the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Full name of the user
 *               email:
 *                 type: string
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 description: User's password
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *               type:
 *                 type: string
 *                 description: User type (e.g., client or admin)
 *     responses:
 *       201:
 *         description: User created successfully.
 *       400:
 *         description: Failed to create user.
 */
router.post('/', createUser);

/**
 * @swagger
 * /user:
 *   get:
 *     summary: List all users
 *     description: Returns a list of all registered users.
 *     responses:
 *       200:
 *         description: List of users retrieved successfully.
 */
router.get('/', listUsers);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Returns details of a specific user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: User found.
 *       404:
 *         description: User not found.
 */
router.get('/:id', getUserById);

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update a user
 *     description: Updates the data of an existing user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone:
 *                 type: string
 *               type:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully.
 *       400:
 *         description: Error updating user.
 */
router.put('/:id', updateUser);

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Removes a user from the system by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 */
router.delete('/:id', deleteUser);

module.exports = router;
