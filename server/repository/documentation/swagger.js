const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Inventory System API",
      version: "1.0.0",
      description: "This is the API for the Inventory System",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Localhost",
      },
      {
        url: "http://172.16.10.202:5000",
        description: "Staging Server",
      },
    ],
  },
  apis: ["./repository/documentation/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
module.exports = swaggerDocs;

//#region User API Documentation

/**
 * @swagger
 * /users/getusers:
 *   get:
 *     summary: Get all users
 *     description: Get all users
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/User'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       username:
 *         type: string
 *       password:
 *         type: string
 *   Error:
 *     type: object
 *     properties:
 *       code:
 *         type: integer
 *         format: int32
 *       message:
 *         type: string
 *       fields:
 *         type: string
 *
 *
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         employee_id:
 *           type: varchar(9)
 *           format: string
 *         fullname:
 *           type: varchar(300)
 *           format: string
 *         position:
 *           type: varchar(120)
 *           format: string
 *         username:
 *           type: varchar(60)
 *           format: string
 *         password:
 *           type: longtext
 *           format: string
 *         access:
 *           type: ENUM('admin','developer','user')
 *           format: string
 *         status:
 *           type: ENUM('active','inactive')
 *           format: string
 *
 */


/**
 * @swagger
 * /users/createuser:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   format: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employee_id:
 *                 type: string
 *                 format: string
 *               fullname:
 *                 type: string
 *                 format: string
 *               position:
 *                 type: string
 *                 format: string
 *               access:
 *                 type: ENUM('admin','developer','user')
 *                 format: string
 *               username:
 *                 type: string
 *                 format: string
 *               password:
 *                 type: long
 *                 format: string
 */
 
//#endregion
