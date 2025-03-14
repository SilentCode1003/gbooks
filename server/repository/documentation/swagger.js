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

//#region Check Credentials API Documentation
/**
 * @swagger
 * /login/check-credentials:
 *   post:
 *     summary: Check user credentials
 *     description: Authenticate a user by username and password, and return a JWT token upon successful login.
 *     tags:
 *       - Authentication
 *     produces:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Missing username or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Database error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: string
 */

//#endregion

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
 *       employee_id:
 *         type: varchar(9)
 *         format: string
 *       fullname:
 *         type: varchar(300)
 *         format: string
 *       position:
 *         type: varchar(120)
 *         format: string
 *       username:
 *         type: varchar(60)
 *         format: string
 *       password:
 *         type: longtext
 *         format: string
 *       access:
 *         type: string
 *         enum: ['admin', 'user', 'developer']
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 *           type: string
 *           enum: ['admin', 'user', 'developer']
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               employee_id:
 *                 type: varchar(9)
 *                 format: string
 *               fullname:
 *                 type: varchar(300)
 *                 format: string
 *               position:
 *                 type: varchar(120)
 *                 format: string
 *               username:
 *                 type: varchar(60)
 *                 format: string
 *               password:
 *                 type: longtext
 *                 format: string
 *               access:
 *                 type: string
 *                 enum: ['admin', 'user', 'developer']
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */
 
/**
 * @swagger
 * /users/updateuser:
 *   put:
 *     summary: Update an existing user
 *     description: Update user based on ID
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated user
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               employee_id:
 *                 type: varchar(9)
 *                 format: string
 *               fullname:
 *                 type: varchar(300)
 *                 format: string
 *               position:
 *                 type: varchar(120)
 *                 format: string
 *               username:
 *                 type: varchar(60)
 *                 format: string
 *               password:
 *                 type: longtext
 *                 format: string
 *               access:
 *                 type: string
 *                 enum: ['admin', 'user', 'developer']
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /users/activeusers:
 *   get:
 *     summary: Get all active users
 *     description: Get all active users
 *     tags:
 *       - Users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved active users
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
 *       employee_id:
 *         type: string
 *         format: varchar(9)
 *       fullname:
 *         type: string
 *         format: varchar(300)
 *       position:
 *         type: string
 *         format: varchar(120)
 *       username:
 *         type: string
 *         format: varchar(60)
 *       password:
 *         type: string
 *         format: longtext
 *       access:
 *         type: string
 *         enum: ['admin', 'user', 'developer']
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 */
//#endregion

//#region Vendor API Documentation
/**
 * @swagger
 * /vendors/getvendors:
 *   get:
 *     summary: Get all vendors
 *     description: Get all vendors
 *     tags:
 *       - Vendors
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved vendors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Vendor'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Vendor:
 *     type: object
 *     properties:
 *         id:
 *           type: integer
 *           format: int64
 *         business_name:
 *           type: varchar(300)
 *           format: string
 *         business_type:
 *           type: varchar(300)
 *           format: string
 *         contact_person:
 *           type: varchar(300)
 *           format: string
 *         email:
 *           type: varchar(300)
 *           format: string
 *         phone:
 *           type: varchar(13)
 *           format: string
 *         mobile:
 *           type: varchar(13)
 *           format: string
 *         business_address:
 *           type: varchar(300)
 *           format: string
 *         tin:
 *           type: varchar(20)
 *           format: string
 *         status:
 *           type: ENUM('active','inactive')
 *           format: string
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
 *     Vendor:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         business_name:
 *           type: varchar(300)
 *           format: string
 *         business_type:
 *           type: varchar(300)
 *           format: string
 *         contact_person:
 *           type: varchar(300)
 *           format: string
 *         email:
 *           type: varchar(300)
 *           format: string
 *         phone:
 *           type: varchar(13)
 *           format: string
 *         mobile:
 *           type: varchar(13)
 *           format: string
 *         business_address:
 *           type: varchar(300)
 *           format: string
 *         tin:
 *           type: varchar(20)
 *           format: string
 *         status:
 *           type: ENUM('active','inactive')
 *           format: string
 *
 */

/**
 * @swagger
 * /vendors/createvendor:
 *   post:
 *     summary: Create a new vendor
 *     description: Create a new vendor
 *     tags:
 *       - Vendors
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created vendor
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               business_name:
 *                 type: varchar(300)
 *                 format: string
 *               business_type:
 *                 type: varchar(300)
 *                 format: string
 *               contact_person:
 *                 type: varchar(300)
 *                 format: string
 *               email:
 *                 type: varchar(300)
 *                 format: string
 *               phone:
 *                 type: varchar(13)
 *                 format: string
 *               mobile:
 *                 type: varchar(13)
 *                 format: string
 *               business_address:
 *                 type: varchar(300)
 *                 format: string
 *               tin:
 *                 type: varchar(20)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /vendors/updatevendor:
 *   put:
 *     summary: Update an existing vendor
 *     description: Update vendor based on ID
 *     tags:
 *       - Vendors
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated vendor
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               business_name:
 *                 type: varchar(300)
 *                 format: string
 *               business_type:
 *                 type: varchar(300)
 *                 format: string
 *               contact_person:
 *                 type: varchar(300)
 *                 format: string
 *               email:
 *                 type: varchar(300)
 *                 format: string
 *               phone:
 *                 type: varchar(13)
 *                 format: string
 *               mobile:
 *                 type: varchar(13)
 *                 format: string
 *               business_address:
 *                 type: varchar(300)
 *                 format: string
 *               tin:
 *                 type: varchar(20)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /vendors/activevendors:
 *   get:
 *     summary: Get all active vendors
 *     description: Get all active vendors
 *     tags:
 *       - Vendors
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved active vendors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Vendor'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Vendor:
 *     type: object
 *     properties:
 *         id:
 *           type: integer
 *           format: int64
 *         business_name:
 *           type: varchar(300)
 *           format: string
 *         business_type:
 *           type: varchar(300)
 *           format: string
 *         contact_person:
 *           type: varchar(300)
 *           format: string
 *         email:
 *           type: varchar(300)
 *           format: string
 *         phone:
 *           type: varchar(13)
 *           format: string
 *         mobile:
 *           type: varchar(13)
 *           format: string
 *         business_address:
 *           type: varchar(300)
 *           format: string
 *         tin:
 *           type: varchar(20)
 *           format: string
 *         status:
 *           type: ENUM('active','inactive')
 *           format: string
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
 
 */
//#endregion

//#region Customer API Documentation
/**
 * @swagger
 * /customers/getcustomers:
 *   get:
 *     summary: Get all customers
 *     description: Get all customers
 *     tags:
 *       - Customers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Customer'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Customer:
 *     type: object
 *     properties:
 *         id:
 *           type: integer
 *           format: int64
 *         business_name:
 *           type: varchar(300)
 *           format: string
 *         business_type:
 *           type: varchar(300)
 *           format: string
 *         customer_name:
 *           type: varchar(300)
 *           format: string
 *         email:
 *           type: varchar(300)
 *           format: string
 *         phone:
 *           type: varchar(13)
 *           format: string
 *         mobile:
 *           type: varchar(13)
 *           format: string
 *         address:
 *           type: varchar(300)
 *           format: string
 *         tin:
 *           type: varchar(20)
 *           format: string
 *         status:
 *           type: ENUM('active','inactive')
 *           format: string
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
 *     Customer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         business_name:
 *           type: varchar(300)
 *           format: string
 *         business_type:
 *           type: varchar(300)
 *           format: string
 *         customer_name:
 *           type: varchar(300)
 *           format: string
 *         email:
 *           type: varchar(300)
 *           format: string
 *         phone:
 *           type: varchar(13)
 *           format: string
 *         mobile:
 *           type: varchar(13)
 *           format: string
 *         address:
 *           type: varchar(300)
 *           format: string
 *         tin:
 *           type: varchar(20)
 *           format: string
 *         status:
 *           type: ENUM('active','inactive')
 *           format: string
 *
 */

/**
 * @swagger
 * /customers/createcustomer:
 *   post:
 *     summary: Create a new customers
 *     description: Create a new customers
 *     tags:
 *       - Customers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created customer
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               business_name:
 *                 type: varchar(300)
 *                 format: string
 *               business_type:
 *                 type: varchar(300)
 *                 format: string
 *               customer_name:
 *                 type: varchar(300)
 *                 format: string
 *               email:
 *                 type: varchar(300)
 *                 format: string
 *               phone:
 *                 type: varchar(13)
 *                 format: string
 *               mobile:
 *                 type: varchar(13)
 *                 format: string
 *               address:
 *                 type: varchar(300)
 *                 format: string
 *               tin:
 *                 type: varchar(20)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /customers/updatecustomer:
 *   put:
 *     summary: Update an existing customers
 *     description: Update customers based on ID
 *     tags:
 *       - Customers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated customer
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               business_name:
 *                 type: varchar(300)
 *                 format: string
 *               business_type:
 *                 type: varchar(300)
 *                 format: string
 *               customer_name:
 *                 type: varchar(300)
 *                 format: string
 *               email:
 *                 type: varchar(300)
 *                 format: string
 *               phone:
 *                 type: varchar(13)
 *                 format: string
 *               mobile:
 *                 type: varchar(13)
 *                 format: string
 *               address:
 *                 type: varchar(300)
 *                 format: string
 *               tin:
 *                 type: varchar(20)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /customers/activecustomers:
 *   get:
 *     summary: Get all active customers
 *     description: Get all active customers
 *     tags:
 *       - Customers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved active customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Customer'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Customer:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       business_name:
 *         type: string
 *         format: varchar(300)
 *       business_type:
 *         type: string
 *         format: varchar(300)
 *       customer_name:
 *         type: string
 *         format: varchar(300)
 *       email:
 *         type: string
 *         format: varchar(300)
 *       phone:
 *         type: string
 *         format: varchar(13)
 *       mobile:
 *         type: string
 *         format: varchar(13)
 *       address:
 *         type: string
 *         format: varchar(300)
 *       tin:
 *         type: string
 *         format: varchar(20)
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 */

//#endregion

//#region Credit API Documentation
/**
 * @swagger
 * /credits/getcredits:
 *   get:
 *     summary: Get all credits
 *     description: Get all credits
 *     tags:
 *       - Credits
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved credits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Credit'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Credit:
 *     type: object
 *     properties:
 *         id:
 *           type: integer
 *           format: int64
 *         type:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
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
 *     Credit:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         type:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 *
 */

/**
 * @swagger
 * /credits/createcredit:
 *   post:
 *     summary: Create a new credits
 *     description: Create a new credits
 *     tags:
 *       - Credits
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created credit
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /credits/updatecredit:
 *   put:
 *     summary: Update an existing credits
 *     description: Update credits based on ID
 *     tags:
 *       - Credits
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated credits
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               type:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /credits/activecredits:
 *   get:
 *     summary: Get all active credits
 *     description: Get all active credits
 *     tags:
 *       - Credits
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved active credits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Credit'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Credit:
 *     type: object
 *     properties:
 *         id:
 *           type: integer
 *           format: int64
 *         type:
 *           type: string
 *           format: varchar(300)
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
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
 
 */

//#endregion

//#region Debit API Documentation
/**
 * @swagger
 * /debits/getdebits:
 *   get:
 *     summary: Get all debits
 *     description: Get all debits
 *     tags:
 *       - Debits
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved debits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Debit'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Debit:
 *     type: object
 *     properties:
 *         id:
 *           type: integer
 *           format: int64
 *         type:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
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
 *     Debit:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         type:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 *
 */

/**
 * @swagger
 * /debits/createdebit:
 *   post:
 *     summary: Create a new debit
 *     description: Create a new debit
 *     tags:
 *       - Debits
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created debit
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /debits/updatedebit:
 *   put:
 *     summary: Update an existing debit
 *     description: Update debit based on ID
 *     tags:
 *       - Debits
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated debit
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               type:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /debits/activedebits:
 *   get:
 *     summary: Get all active debits
 *     description: Get all active debits
 *     tags:
 *       - Debits
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved active debits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Debit'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Debit:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       type:
 *         type: string
 *         format: varchar(300)
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 */

//#endregion

//#region Department API Documentation
/**
 * @swagger
 * /departments/getdepartments:
 *   get:
 *     summary: Get all departments
 *     description: Get all departments
 *     tags:
 *       - Departments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved departments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Department'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Department:
 *     type: object
 *     properties:
 *         id:
 *           type: integer
 *           format: int64
 *         code:
 *           type: varchar(6)
 *           format: string
 *         description:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
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
 *     Department:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         code:
 *           type: varchar(6)
 *           format: string
 *         description:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 *
 */

/**
 * @swagger
 * /departments/createdepartment:
 *   post:
 *     summary: Create a new department
 *     description: Create a new department
 *     tags:
 *       - Departments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created department
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: varchar(6)
 *                 format: string
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /departments/updatedepartment:
 *   put:
 *     summary: Update an existing department
 *     description: Update department based on ID
 *     tags:
 *       - Departments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated department
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               code:
 *                 type: varchar(6)
 *                 format: string
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /departments/activedepartments:
 *   get:
 *     summary: Get all active departments
 *     description: Get all active departments
 *     tags:
 *       - Departments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved active departments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Department'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Department:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       code:
 *         type: string
 *         format: varchar(6)
 *       description:
 *         type: string
 *         format: varchar(300)
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 */

//#endregion

//#region Bank Account API Documentation
/**
 * @swagger
 * /bank_accounts/getbank_accounts:
 *   get:
 *     summary: Get all bank accounts
 *     description: Get all bank accounts
 *     tags:
 *       - Bank Accounts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved bank accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bank_account'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * definitions:
 *   Bank_account:
 *     type: object
 *     properties:
 *         id:
 *           type: integer
 *           format: int64
 *         code:
 *           type: varchar(6)
 *           format: string
 *         account_name:
 *           type: varchar(300)
 *           format: string
 *         account_number:
 *           type: varchar(300)
 *           format: string
 *         bank_type:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 * 
 *components:
 *   schemas:
 *     Bank_account:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         code:
 *           type: varchar(6)
 *         account_name:
 *           type: varchar(300)
 *           format: string
 *         account_number:
 *           type: varchar(300)
 *           format: string
 *         bank_type:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /bank_accounts/createbank_account:
 *   post:
 *     summary: Create a new bank account
 *     description: Create a new bank account
 *     tags:
 *       - Bank Accounts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created bank account
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: varchar(6)
 *                 format: string
 *               account_name:
 *                 type: varchar(300)
 *                 format: string
 *               account_number:
 *                 type: varchar(300)
 *                 format: string
 *               bank_type:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /bank_accounts/updatebank_account:
 *   put:
 *     summary: Update an existing bank account
 *     description: Update bank account based on ID
 *     tags:
 *       - Bank Accounts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated bank account
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               code:
 *                 type: varchar(6)
 *                 format: string
 *               account_name:
 *                 type: varchar(300)
 *                 format: string
 *               account_number:
 *                 type: varchar(300)
 *                 format: string
 *               bank_type:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /bank_accounts/activebank_accounts:
 *   get:
 *     summary: Get all active bank accounts
 *     description: Get all active bank accounts
 *     tags:
 *       - Bank Accounts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved active bank accounts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Bank_account'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Bank_account:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       code:
 *         type: string
 *         format: varchar(6)
 *       account_name:
 *         type: string
 *         format: varchar(300)
 *       account_number:
 *         type: string
 *         format: varchar(300)
 *       bank_type:
 *         type: string
 *         format: varchar(300)
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 */

//#endregion

//#region Bank Balance API Documentation
/**
 * @swagger
 * /bank_balances/getbank_balances:
 *   get:
 *     summary: Get all bank balances
 *     description: Get all bank balances
 *     tags:
 *       - Bank Balances
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved bank balances
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Bank_balance'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Bank_balance:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       bank_account_id:
 *         type: integer
 *         format: int64
 *       transaction_date:
 *         type: varchar(20)
 *         format: string
 *       update_date:
 *         type: varchar(20)
 *         format: string
 *       previous_amount:
 *         type: decimal(10,2)
 *         format: double
 *       current_amount:
 *         type: decimal(10,2)
 *         format: double
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
 *     Bank_balance:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         bank_account_id:
 *           type: integer
 *           format: int64
 *         transaction_date:
 *           type: varchar(20)
 *           format: string
 *         update_date:
 *           type: varchar(20)
 *           format: string
 *         previous_amount:
 *           type: decimal(10,2)
 *           format: double
 *         current_amount:
 *           type: decimal(10,2)
 *           format: double
 *
 */

/**
 * @swagger
 * /bank_balances/createbank_balance:
 *   post:
 *     summary: Create a new bank balance
 *     description: Create a new bank balance
 *     tags:
 *       - Bank Balances
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created bank balance
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               bank_account_id:
 *                 type: integer
 *                 format: int64
 *               transaction_date:
 *                 type: varchar(20)
 *                 format: string
 *               update_date:
 *                 type: varchar(20)
 *                 format: string
 *               previous_amount:
 *                 type: decimal(10,2)
 *                 format: double
 *               current_amount:
 *                 type: decimal(10,2)
 *                 format: double
 */

/**
 * @swagger
 * /bank_balances/updatebank_balance:
 *   put:
 *     summary: Update an existing bank balance
 *     description: Update bank balance based on ID
 *     tags:
 *       - Bank Balances
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated bank balance
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               bank_account_id:
 *                 type: integer
 *                 format: int64
 *               transaction_date:
 *                 type: varchar(20)
 *                 format: string
 *               update_date:
 *                 type: varchar(20)
 *                 format: string
 *               previous_amount:
 *                 type: decimal(10,2)
 *                 format: double
 *               current_amount:
 *                 type: decimal(10,2)
 *                 format: double
 *
 */
//#endregion

//#region Payment API Documentation
/**
 * @swagger
 * /payments/getpayments:
 *   get:
 *     summary: Get all payments
 *     description: Get all payments
 *     tags:
 *       - Payments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Payment'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Payment:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       code:
 *         type: varchar(6)
 *         format: string
 *       description:
 *         type: varchar(300)
 *         format: string
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 *     Payment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         code:
 *           type: varchar(6)
 *           format: string
 *         description:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 *
 */

/**
 * @swagger
 * /payments/createpayment:
 *   post:
 *     summary: Create a new payment
 *     description: Create a new payment
 *     tags:
 *       - Payments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created payment
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: varchar(6)
 *                 format: string
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /payments/updatepayment:
 *   put:
 *     summary: Update an existing payment
 *     description: Update payment based on ID
 *     tags:
 *       - Payments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated payment
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               code:
 *                 type: varchar(6)
 *                 format: string
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /payments/activepayments:
 *   get:
 *     summary: Get all active payments
 *     description: Get all active payments
 *     tags:
 *       - Payments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved active payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Payment'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Payment:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       code:
 *         type: string
 *         format: varchar(6)
 *       description:
 *         type: string
 *         format: varchar(300)
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 */

//#endregion

//#region Payment Type API Documentation
/**
 * @swagger
 * /payment_types/getpayment_types:
 *   get:
 *     summary: Get all payment types
 *     description: Get all payment types
 *     tags:
 *       - Payment Types
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved payment types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Payment_type'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Payment_type:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       payment_id:
 *         type: integer
 *         format: int64
 *       name:
 *         type: varchar(300)
 *         format: string
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 *     Payment_type:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         payment_id:
 *           type: integer
 *           format: int64
 *         name:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 *
 */

/**
 * @swagger
 * /payment_types/createpayment_type:
 *   post:
 *     summary: Create a new payment type
 *     description: Create a new payment type
 *     tags:
 *       - Payment Types
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created payment type
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               payment_id:
 *                 type: integer
 *                 format: int64
 *               name:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /payment_types/updatepayment_type:
 *   put:
 *     summary: Update an existing payment type
 *     description: Update payment type based on ID
 *     tags:
 *       - Payment Types
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated payment type
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               payment_id:
 *                 type: integer
 *                 format: int64
 *               name:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /payment_types/activepayment_types:
 *   get:
 *     summary: Get all active payment types
 *     description: Get all active payment types
 *     tags:
 *       - Payment Types
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved active payment types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Payment_type'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Payment_type:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       payment_id:
 *         type: integer
 *         format: int64
 *       name:
 *         type: string
 *         format: varchar(300)
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 */

//#endregion

//#region Product API Documentation
/**
 * @swagger
 * /products/getproducts:
 *   get:
 *     summary: Get all products
 *     description: Get all products
 *     tags:
 *       - Products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Product'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Product:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       vendor_id:
 *         type: integer
 *         format: int64
 *       upc:
 *         type: varchar(300)
 *         format: string
 *       code:
 *         type: varchar(6)
 *         format: string
 *       description:
 *         type: varchar(300)
 *         format: string
 *       category:
 *         type: varchar(300)
 *         format: string
 *       subcategory:
 *         type: varchar(300)
 *         format: string
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         vendor_id:
 *           type: integer
 *           format: int64
 *         upc:
 *           type: varchar(300)
 *           format: string
 *         code:
 *           type: varchar(6)
 *           format: string
 *         description:
 *           type: varchar(300)
 *           format: string
 *         category:
 *           type: varchar(300)
 *           format: string
 *         subcategory:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 *
 */

/**
 * @swagger
 * /products/createproduct:
 *   post:
 *     summary: Create a new product
 *     description: Create a new product
 *     tags:
 *       - Products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created product
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               vendor_id:
 *                 type: integer
 *                 format: int64
 *               upc:
 *                 type: varchar(300)
 *                 format: string
 *               code:
 *                 type: varchar(6)
 *                 format: string
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               category:
 *                 type: varchar(300)
 *                 format: string
 *               subcategory:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /products/updateproduct:
 *   put:
 *     summary: Update an existing product
 *     description: Update product based on ID
 *     tags:
 *       - Products
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated product
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               vendor_id:
 *                 type: integer
 *                 format: int64
 *               upc:
 *                 type: varchar(300)
 *                 format: string
 *               code:
 *                 type: varchar(6)
 *                 format: string
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               category:
 *                 type: varchar(300)
 *                 format: string
 *               subcategory:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */
//#endregion

//#region Product Inventory API Documentation
/**
 * @swagger
 * /product_inventory/getproduct_inventory:
 *   get:
 *     summary: Get all product inventory items
 *     description: Get all product inventory items
 *     tags:
 *       - Product Inventory
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved product inventory items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Product_inventory'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Product_inventory:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       product_id:
 *         type: integer
 *         format: int64
 *       branch_id:
 *         type: integer
 *         format: int64
 *       quantity:
 *         type: decimal(10,2)
 *         format: double
 *       unit:
 *         type: varchar(20)
 *         format: string
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 *     Product_inventory:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         product_id:
 *           type: integer
 *           format: int64
 *         branch_id:
 *           type: integer
 *           format: int64
 *         quantity:
 *           type: decimal(10,2)
 *           format: double
 *         unit:
 *           type: varchar(20)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 *
 */

/**
 * @swagger
 * /product_inventory/createproduct_inventory:
 *   post:
 *     summary: Create a new product inventory item
 *     description: Create a new product inventory item
 *     tags:
 *       - Product Inventory
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created product inventory item
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               branch_id:
 *                 type: integer
 *                 format: int64
 *               quantity:
 *                 type: decimal(10,2)
 *                 format: double
 *               unit:
 *                 type: varchar(20)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /product_inventory/updateproduct_inventory:
 *   put:
 *     summary: Update an existing product inventory item
 *     description: Update product inventory item based on ID
 *     tags:
 *       - Product Inventory
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated product inventory item
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               branch_id:
 *                 type: integer
 *                 format: int64
 *               quantity:
 *                 type: decimal(10,2)
 *                 format: double
 *               unit:
 *                 type: varchar(20)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */
//#endregion

//#region Inventory History API Documentation
/**
 * @swagger
 * /inventory_history/getinventory_history:
 *   get:
 *     summary: Get all inventory history records
 *     description: Get all inventory history records
 *     tags:
 *       - Inventory History
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved inventory history records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Inventory_history'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Inventory_history:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       inventory_id:
 *         type: integer
 *         format: int64
 *       date:
 *         type: varchar(20)
 *         format: string
 *       transaction_type:
 *         type: string
 *         enum: ['replenish', 'sold', 'transfer', 'damage', 'return']
 *       quantity:
 *         type: decimal(10,2)
 *         format: double
 *       unit:
 *         type: varchar(20)
 *         format: string
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
 *     Inventory_history:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         inventory_id:
 *           type: integer
 *           format: int64
 *         date:
 *           type: varchar(20)
 *           format: string
 *         transaction_type:
 *           type: string
 *           enum: ['replenish', 'sold', 'transfer', 'damage', 'return']
 *         quantity:
 *           type: decimal(10,2)
 *           format: double
 *         unit:
 *           type: varchar(20)
 *           format: string
 *
 */

/**
 * @swagger
 * /inventory_history/createinventory_history:
 *   post:
 *     summary: Create a new inventory history record
 *     description: Create a new inventory history record
 *     tags:
 *       - Inventory History
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created inventory history record
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               inventory_id:
 *                 type: integer
 *                 format: int64
 *               date:
 *                 type: varchar(20)
 *                 format: string
 *               transaction_type:
 *                 type: string
 *                 enum: ['replenish', 'sold', 'transfer', 'damage', 'return']
 *               quantity:
 *                 type: decimal(10,2)
 *                 format: double
 *               unit:
 *                 type: varchar(20)
 *                 format: string
 */

/**
 * @swagger
 * /inventory_history/updateinventory_history:
 *   put:
 *     summary: Update an existing inventory history record
 *     description: Update inventory history record based on ID
 *     tags:
 *       - Inventory History
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated inventory history record
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               inventory_id:
 *                 type: integer
 *                 format: int64
 *               date:
 *                 type: varchar(20)
 *                 format: string
 *               transaction_type:
 *                 type: string
 *                 enum: ['replenish', 'sold', 'transfer', 'damage', 'return']
 *               quantity:
 *                 type: decimal(10,2)
 *                 format: double
 *               unit:
 *                 type: varchar(20)
 *                 format: string
 */
//#endregion

//#region Branch API Documentation
/**
 * @swagger
 * /branch/getbranch:
 *   get:
 *     summary: Get all branches
 *     description: Get all branches
 *     tags:
 *       - Branch
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved branches
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Branch'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Branch:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       code:
 *         type: varchar(5)
 *         format: string
 *       description:
 *         type: varchar(300)
 *         format: string
 *       email:
 *         type: varchar(300)
 *         format: string
 *       phone:
 *         type: varchar(13)
 *         format: string
 *       mobile:
 *         type: varchar(13)
 *         format: string
 *       address:
 *         type: varchar(300)
 *         format: string
 *       manager:
 *         type: varchar(300)
 *         format: string
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 *     Branch:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         code:
 *           type: varchar(6)
 *           format: string
 *         description:
 *           type: varchar(300)
 *           format: string
 *         email:
 *           type: varchar(300)
 *           format: string
 *         phone:
 *           type: varchar(13)
 *           format: string
 *         mobile:
 *           type: varchar(13)
 *           format: string
 *         address:
 *           type: varchar(300)
 *           format: string
 *         manager:
 *           type: varchar(300)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 *
 */

/**
 * @swagger
 * /branch/createbranch:
 *   post:
 *     summary: Create a new branch
 *     description: Create a new branch
 *     tags:
 *       - Branch
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created branch
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: varchar(5)
 *                 format: string
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               email:
 *                 type: varchar(300)
 *                 format: string
 *               phone:
 *                 type: varchar(13)
 *                 format: string
 *               mobile:
 *                 type: varchar(13)
 *                 format: string
 *               address:
 *                 type: varchar(300)
 *                 format: string
 *               manager:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /branch/updatebranch:
 *   put:
 *     summary: Update an existing branch
 *     description: Update branch based on ID
 *     tags:
 *       - Branch
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated branch
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               code:
 *                 type: varchar(5)
 *                 format: string
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               email:
 *                 type: varchar(300)
 *                 format: string
 *               phone:
 *                 type: varchar(13)
 *                 format: string
 *               mobile:
 *                 type: varchar(13)
 *                 format: string
 *               address:
 *                 type: varchar(300)
 *                 format: string
 *               manager:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */
//#endregion

//#region Product Price API Documentation
/**
 * @swagger
 * /product_prices/getproduct_prices:
 *   get:
 *     summary: Get all product prices
 *     description: Get all product prices
 *     tags:
 *       - Product Price
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved product prices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Product_price'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Product_price:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       product_id:
 *         type: integer
 *         format: int64
 *       cost:
 *         type: decimal(10,2)
 *         format: double
 *       markup_rate:
 *         type: decimal(10,2)
 *         format: double
 *       vat_ex:
 *         type: decimal(10,2)
 *         format: double
 *       vat_inc:
 *         type: decimal(10,2)
 *         format: double
 *       status:
 *         type: string
 *         enum: ['active', 'inactive']
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
 *     Product_price:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         product_id:
 *           type: integer
 *           format: int64
 *         cost:
 *           type: decimal(10,2)
 *           format: double
 *         markup_rate:
 *           type: decimal(10,2)
 *           format: double
 *         vat_ex:
 *           type: decimal(10,2)
 *           format: double
 *         vat_inc:
 *           type: decimal(10,2)
 *           format: double
 *         status:
 *           type: string
 *           enum: ['active', 'inactive']
 *
 */

/**
 * @swagger
 * /product_prices/createproduct_price:
 *   post:
 *     summary: Create a new product price
 *     description: Create a new product price
 *     tags:
 *       - Product Price
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created product price
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               markup_rate:
 *                 type: decimal(10,2)
 *                 format: double
 *               vat_ex:
 *                 type: decimal(10,2)
 *                 format: double
 *               vat_inc:
 *                 type: decimal(10,2)
 *                 format: double
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

/**
 * @swagger
 * /product_prices/updateproduct_price:
 *   put:
 *     summary: Update an existing product price
 *     description: Update product price based on ID
 *     tags:
 *       - Product Price
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated product price
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               markup_rate:
 *                 type: decimal(10,2)
 *                 format: double
 *               vat_ex:
 *                 type: decimal(10,2)
 *                 format: double
 *               vat_inc:
 *                 type: decimal(10,2)
 *                 format: double
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */
//#endregion

//#region Price History API Documentation
/**
 * @swagger
 * /price_history/getprice_history:
 *   get:
 *     summary: Get all price history records
 *     description: Get all price history records
 *     tags:
 *       - Price History
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved price history records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Price_history'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Price_history:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       product_id:
 *         type: integer
 *         format: int64
 *       cost:
 *         type: decimal(10,2)
 *         format: double
 *       markup_rate:
 *         type: decimal(10,2)
 *         format: double
 *       vat_ex:
 *         type: decimal(10,2)
 *         format: double
 *       vat_inc:
 *         type: decimal(10,2)
 *         format: double
 *       date:
 *         type: varchar(20)
 *         format: string
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
 *     Price_history:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         product_id:
 *           type: integer
 *           format: int64
 *         cost:
 *           type: decimal(10,2)
 *           format: double
 *         markup_rate:
 *           type: decimal(10,2)
 *           format: double
 *         vat_ex:
 *           type: decimal(10,2)
 *           format: double
 *         vat_inc:
 *           type: decimal(10,2)
 *           format: double
 *         date:
 *           type: varchar(20)
 *           format: string
 *
 */

/**
 * @swagger
 * /price_history/createprice_history:
 *   post:
 *     summary: Create a new price history record
 *     description: Create a new price history record
 *     tags:
 *       - Price History
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created price history record
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               markup_rate:
 *                 type: decimal(10,2)
 *                 format: double
 *               vat_ex:
 *                 type: decimal(10,2)
 *                 format: double
 *               vat_inc:
 *                 type: decimal(10,2)
 *                 format: double
 *               date:
 *                 type: varchar(20)
 *                 format: string
 */

/**
 * @swagger
 * /price_history/updateprice_history:
 *   put:
 *     summary: Update an existing price history record
 *     description: Update price history record based on ID
 *     tags:
 *       - Price History
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated price history record
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               markup_rate:
 *                 type: decimal(10,2)
 *                 format: double
 *               vat_ex:
 *                 type: decimal(10,2)
 *                 format: double
 *               vat_inc:
 *                 type: decimal(10,2)
 *                 format: double
 *               date:
 *                 type: varchar(20)
 *                 format: string
 */
//#endregion

//#region Transaction API Documentation
/**
 * @swagger
 * /transactions/gettransactions:
 *   get:
 *     summary: Get all transactions
 *     description: Get all transactions
 *     tags:
 *       - Transactions
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Transaction'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Transaction:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       bank_account_id:
 *         type: integer
 *         format: int64
 *       reference_id:
 *         type: varchar(120)
 *         format: string
 *       type:
 *         type: integer
 *         format: int64
 *       sub_type:
 *         type: integer
 *         format: int64
 *       description:
 *         type: varchar(300)
 *         format: string
 *       payment_type:
 *         type: integer
 *         format: int64
 *       payment_sub_type:
 *         type: integer
 *         format: int64
 *       amount:
 *         type: decimal(10,2)
 *         format: double
 *       transaction_date:
 *         type: varchar(20)
 *         format: string
 *       transact_by:
 *         type: integer
 *         format: int64
 *       process_by:
 *         type: integer
 *         format: int64
 *       process_date:
 *         type: varchar(20)
 *         format: string
 *       status:
 *         type: string
 *         enum: ['not paid', 'partially paid', 'paid']
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
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         bank_account_id:
 *           type: integer
 *           format: int64
 *         reference_id:
 *           type: varchar(120)
 *           format: string
 *         type:
 *           type: integer
 *           format: int64
 *         sub_type:
 *           type: integer
 *           format: int64
 *         description:
 *           type: varchar(300)
 *           format: string
 *         payment_type:
 *           type: integer
 *           format: int64
 *         payment_sub_type:
 *           type: integer
 *           format: int64
 *         amount:
 *           type: decimal(10,2)
 *           format: double
 *         transaction_date:
 *           type: varchar(20)
 *           format: string
 *         transact_by:
 *           type: integer
 *           format: int64
 *         process_by:
 *           type: integer
 *           format: int64
 *         process_date:
 *           type: varchar(20)
 *           format: string
 *         status:
 *           type: string
 *           enum: ['not paid', 'partially paid', 'paid']
 */

/**
 * @swagger
 * /transactions/createtransaction:
 *   post:
 *     summary: Create a new transaction
 *     description: Create a new transaction
 *     tags:
 *       - Transactions
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created transaction
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               bank_account_id:
 *                 type: integer
 *                 format: int64
 *               reference_id:
 *                 type: varchar(120)
 *                 format: string
 *               type:
 *                 type: integer
 *                 format: int64
 *               sub_type:
 *                 type: integer
 *                 format: int64
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               payment_type:
 *                 type: integer
 *                 format: int64
 *               payment_sub_type:
 *                 type: integer
 *                 format: int64
 *               amount:
 *                 type: decimal(10,2)
 *                 format: double
 *               transaction_date:
 *                 type: varchar(20)
 *                 format: string
 *               transact_by:
 *                 type: integer
 *                 format: int64
 *               process_by:
 *                 type: integer
 *                 format: int64
 *               process_date:
 *                 type: varchar(20)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['not paid', 'partially paid', 'paid']
 */
//#endregion

//#region Transaction History API Documentation
/**
 * @swagger
 * /transaction_history/gettransaction_history:
 *   get:
 *     summary: Get all transaction history records
 *     description: Get all transaction history records
 *     tags:
 *       - Transaction History
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved transaction history records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Transaction_history'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Transaction_history:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       transaction_id:
 *         type: integer
 *         format: int64
 *       status:
 *         type: string
 *         enum: ['not paid', 'partially paid', 'paid']
 *       process_by:
 *         type: integer
 *         format: int64
 *       process_date:
 *         type: varchar(20)
 *         format: string
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
 *     Transaction_history:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         transaction_id:
 *           type: integer
 *           format: int64
 *         status:
 *           type: string
 *           enum: ['not paid', 'partially paid', 'paid']
 *         process_by:
 *           type: integer
 *           format: int64
 *         process_date:
 *           type: varchar(20)
 *           format: string
 *
 */

/**
 * @swagger
 * /transaction_history/createtransaction_history:
 *   post:
 *     summary: Create a new transaction history record
 *     description: Create a new transaction history record
 *     tags:
 *       - Transaction History
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created transaction history record
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               transaction_id:
 *                 type: integer
 *                 format: int64
 *               status:
 *                 type: string
 *                 enum: ['not paid', 'partially paid', 'paid']
 *               process_by:
 *                 type: integer
 *                 format: int64
 *               process_date:
 *                 type: varchar(20)
 *                 format: string
 */

/**
 * @swagger
 * /transaction_history/updatetransaction_history:
 *   put:
 *     summary: Update an existing transaction history record
 *     description: Update transaction history record based on ID
 *     tags:
 *       - Transaction History
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated transaction history record
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               transaction_id:
 *                 type: integer
 *                 format: int64
 *               status:
 *                 type: string
 *                 enum: ['not paid', 'partially paid', 'paid']
 *               process_by:
 *                 type: integer
 *                 format: int64
 *               process_date:
 *                 type: varchar(20)
 *                 format: string
 */
//#endregion

//#region Purchase Order Headers API Documentation
/**
 * @swagger
 * /purchase_order_headers/getpurchase_order_headers:
 *   get:
 *     summary: Get all purchase order headers
 *     description: Get all purchase order headers
 *     tags:
 *       - Purchase Order Headers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved purchase order headers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Purchase_order_header'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Purchase_order_header:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       sequence:
 *         type: varchar(20)
 *         format: string
 *       vendor_id:
 *         type: integer
 *         format: int64
 *       order_date:
 *         type: varchar(20)
 *         format: string
 *       delivery_date:
 *         type: varchar(20)
 *         format: string
 *       total_cost:
 *         type: decimal(10,2)
 *         format: double
 *       status:
 *         type: string
 *         enum: ['pending', 'completed', 'cancelled']
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
 *     Purchase_order_header:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         sequence:
 *           type: varchar(20)
 *           format: string
 *         vendor_id:
 *           type: integer
 *           format: int64
 *         order_date:
 *           type: varchar(20)
 *           format: string
 *         delivery_date:
 *           type: varchar(20)
 *           format: string
 *         total_cost:
 *           type: decimal(10,2)
 *           format: double
 *         status:
 *           type: string
 *           enum: ['pending', 'completed', 'cancelled']
 *
 */

/**
 * @swagger
 * /purchase_order_headers/createpurchase_order_header:
 *   post:
 *     summary: Create a new purchase order header
 *     description: Create a new purchase order header
 *     tags:
 *       - Purchase Order Headers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created purchase order header
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               sequence:
 *                 type: varchar(20)
 *                 format: string
 *               vendor_id:
 *                 type: integer
 *                 format: int64
 *               order_date:
 *                 type: varchar(20)
 *                 format: string
 *               delivery_date:
 *                 type: varchar(20)
 *                 format: string
 *               total_cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               status:
 *                 type: string
 *                 enum: ['pending', 'completed', 'cancelled']
 */

/**
 * @swagger
 * /purchase_order_headers/updatepurchase_order_header:
 *   put:
 *     summary: Update an existing purchase order header
 *     description: Update purchase order header based on ID
 *     tags:
 *       - Purchase Order Headers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated purchase order header
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               sequence:
 *                 type: varchar(20)
 *                 format: string
 *               vendor_id:
 *                 type: integer
 *                 format: int64
 *               order_date:
 *                 type: varchar(20)
 *                 format: string
 *               delivery_date:
 *                 type: varchar(20)
 *                 format: string
 *               total_cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               status:
 *                 type: string
 *                 enum: ['pending', 'completed', 'cancelled']
 */
//#endregion

//#region Purchase Order Items API Documentation
/**
 * @swagger
 * /purchase_order_items/getpurchase_order_items:
 *   get:
 *     summary: Get all purchase order items
 *     description: Get all purchase order items
 *     tags:
 *       - Purchase Order Items
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved purchase order items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Purchase_order_item'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Purchase_order_item:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       purchase_order_id:
 *         type: integer
 *         format: int64
 *       product_id:
 *         type: integer
 *         format: int64
 *       product_cost:
 *         type: decimal(10,2)
 *         format: double
 *       quantity:
 *         type: decimal(10,2)
 *         format: double
 *       unit:
 *         type: varchar(20)
 *         format: string
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
 *     Purchase_order_item:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         purchase_order_id:
 *           type: integer
 *           format: int64
 *         product_id:
 *           type: integer
 *           format: int64
 *         product_cost:
 *           type: decimal(10,2)
 *           format: double
 *         quantity:
 *           type: decimal(10,2)
 *           format: double
 *         unit:
 *           type: varchar(20)
 *           format: string
 *
 */

/**
 * @swagger
 * /purchase_order_items/createpurchase_order_item:
 *   post:
 *     summary: Create a new purchase order item
 *     description: Create a new purchase order item
 *     tags:
 *       - Purchase Order Items
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created purchase order item
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               purchase_order_id:
 *                 type: integer
 *                 format: int64
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               product_cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               quantity:
 *                 type: decimal(10,2)
 *                 format: double
 *               unit:
 *                 type: varchar(20)
 *                 format: string
 */

/**
 * @swagger
 * /purchase_order_items/updatepurchase_order_item:
 *   put:
 *     summary: Update an existing purchase order item
 *     description: Update purchase order item based on ID
 *     tags:
 *       - Purchase Order Items
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated purchase order item
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               purchase_order_id:
 *                 type: integer
 *                 format: int64
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               product_cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               quantity:
 *                 type: decimal(10,2)
 *                 format: double
 *               unit:
 *                 type: varchar(20)
 *                 format: string
 */
//#endregion

//#region Purchase Order Activity API Documentation
/**
 * @swagger
 * /purchase_order_activity/getpurchase_order_activity:
 *   get:
 *     summary: Get all purchase order activities
 *     description: Get all purchase order activities
 *     tags:
 *       - Purchase Order Activity
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved purchase order activities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Purchase_order_activity'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Purchase_order_activity:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       purchase_order_id:
 *         type: integer
 *         format: int64
 *       type:
 *         type: string
 *         enum: ['approved', 'request', 'reject', 'cancel']
 *       remarks:
 *         type: longtext
 *         format: string
 *       user:
 *         type: integer
 *         format: int64
 *       date:
 *         type: varchar(20)
 *         format: string
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
 *     Purchase_order_activity:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         purchase_order_id:
 *           type: integer
 *           format: int64
 *         type:
 *           type: string
 *           enum: ['approved', 'request', 'reject', 'cancel']
 *         remarks:
 *           type: longtext
 *           format: string
 *         user:
 *           type: integer
 *           format: int64
 *         date:
 *           type: varchar(20)
 *           format: string
 *
 */

/**
 * @swagger
 * /purchase_order_activity/createpurchase_order_activity:
 *   post:
 *     summary: Create a new purchase order activity
 *     description: Create a new purchase order activity
 *     tags:
 *       - Purchase Order Activity
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created purchase order activity
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               purchase_order_id:
 *                 type: integer
 *                 format: int64
 *               type:
 *                 type: string
 *                 enum: ['approved', 'request', 'reject', 'cancel']
 *               remarks:
 *                 type: longtext
 *                 format: string
 *               user:
 *                 type: integer
 *                 format: int64
 *               date:
 *                 type: varchar(20)
 *                 format: string
 */

/**
 * @swagger
 * /purchase_order_activity/updatepurchase_order_activity:
 *   put:
 *     summary: Update an existing purchase order activity
 *     description: Update purchase order activity based on ID
 *     tags:
 *       - Purchase Order Activity
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated purchase order activity
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               purchase_order_id:
 *                 type: integer
 *                 format: int64
 *               type:
 *                 type: string
 *                 enum: ['approved', 'request', 'reject', 'cancel']
 *               remarks:
 *                 type: longtext
 *                 format: string
 *               user:
 *                 type: integer
 *                 format: int64
 *               date:
 *                 type: varchar(20)
 *                 format: string
 */
//#endregion

//#region Sales Order Headers API Documentation
/**
 * @swagger
 * /sales_order_headers/getsales_order_headers:
 *   get:
 *     summary: Get all sales order headers
 *     description: Get all sales order headers
 *     tags:
 *       - Sales Order Headers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved sales order headers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Sales_order_header'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Sales_order_header:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       sequence:
 *         type: varchar(20)
 *         format: string
 *       customer_id:
 *         type: integer
 *         format: int64
 *       order_date:
 *         type: varchar(20)
 *         format: string
 *       delivery_date:
 *         type: varchar(20)
 *         format: string
 *       total_cost:
 *         type: decimal(10,2)
 *         format: double
 *       status:
 *         type: string
 *         enum: ['pending', 'completed', 'cancelled']
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
 *     Sales_order_header:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         sequence:
 *           type: varchar(20)
 *           format: string
 *         customer_id:
 *           type: integer
 *           format: int64
 *         order_date:
 *           type: varchar(20)
 *           format: string
 *         delivery_date:
 *           type: varchar(20)
 *           format: string
 *         total_cost:
 *           type: decimal(10,2)
 *           format: double
 *         status:
 *           type: string
 *           enum: ['pending', 'completed', 'cancelled']
 *
 */

/**
 * @swagger
 * /sales_order_headers/createsales_order_header:
 *   post:
 *     summary: Create a new sales order header
 *     description: Create a new sales order header
 *     tags:
 *       - Sales Order Headers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created sales order header
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               sequence:
 *                 type: varchar(20)
 *                 format: string
 *               customer_id:
 *                 type: integer
 *                 format: int64
 *               order_date:
 *                 type: varchar(20)
 *                 format: string
 *               delivery_date:
 *                 type: varchar(20)
 *                 format: string
 *               total_cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               status:
 *                 type: string
 *                 enum: ['pending', 'completed', 'cancelled']
 */

/**
 * @swagger
 * /sales_order_headers/updatesales_order_header:
 *   put:
 *     summary: Update an existing sales order header
 *     description: Update sales order header based on ID
 *     tags:
 *       - Sales Order Headers
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated sales order header
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               sequence:
 *                 type: varchar(20)
 *                 format: string
 *               customer_id:
 *                 type: integer
 *                 format: int64
 *               order_date:
 *                 type: varchar(20)
 *                 format: string
 *               delivery_date:
 *                 type: varchar(20)
 *                 format: string
 *               total_cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               status:
 *                 type: string
 *                 enum: ['pending', 'completed', 'cancelled']
 */
//#endregion

//#region Sales Order Items API Documentation
/**
 * @swagger
 * /sales_order_items/getsales_order_items:
 *   get:
 *     summary: Get all sales order items
 *     description: Get all sales order items
 *     tags:
 *       - Sales Order Items
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved sales order items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Sales_order_item'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Sales_order_item:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       sales_order_id:
 *         type: integer
 *         format: int64
 *       product_id:
 *         type: integer
 *         format: int64
 *       product_cost:
 *         type: decimal(10,2)
 *         format: double
 *       quantity:
 *         type: decimal(10,2)
 *         format: double
 *       unit:
 *         type: varchar(20)
 *         format: string
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
 *     Sales_order_item:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         sales_order_id:
 *           type: integer
 *           format: int64
 *         product_id:
 *           type: integer
 *           format: int64
 *         product_cost:
 *           type: decimal(10,2)
 *           format: double
 *         quantity:
 *           type: decimal(10,2)
 *           format: double
 *         unit:
 *           type: varchar(20)
 *           format: string
 *
 */

/**
 * @swagger
 * /sales_order_items/createsales_order_item:
 *   post:
 *     summary: Create a new sales order item
 *     description: Create a new sales order item
 *     tags:
 *       - Sales Order Items
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created sales order item
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               sales_order_id:
 *                 type: integer
 *                 format: int64
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               product_cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               quantity:
 *                 type: decimal(10,2)
 *                 format: double
 *               unit:
 *                 type: varchar(20)
 *                 format: string
 */

/**
 * @swagger
 * /sales_order_items/updatesales_order_item:
 *   put:
 *     summary: Update an existing sales order item
 *     description: Update sales order item based on ID
 *     tags:
 *       - Sales Order Items
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated sales order item
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               sales_order_id:
 *                 type: integer
 *                 format: int64
 *               product_id:
 *                 type: integer
 *                 format: int64
 *               product_cost:
 *                 type: decimal(10,2)
 *                 format: double
 *               quantity:
 *                 type: decimal(10,2)
 *                 format: double
 *               unit:
 *                 type: varchar(20)
 *                 format: string
 */
//#endregion

//#region Sales Order Activity API Documentation
/**
 * @swagger
 * /sales_order_activity/getsales_order_activity:
 *   get:
 *     summary: Get all sales order activities
 *     description: Get all sales order activities
 *     tags:
 *       - Sales Order Activity
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved sales order activities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Sales_order_activity'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Error'
 * definitions:
 *   Sales_order_activity:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *       sales_order_id:
 *         type: integer
 *         format: int64
 *       type:
 *         type: string
 *         enum: ['approved', 'request', 'reject', 'cancel']
 *       remarks:
 *         type: longtext
 *         format: string
 *       user:
 *         type: integer
 *         format: int64
 *       date:
 *         type: varchar(20)
 *         format: string
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
 *     Sales_order_activity:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         sales_order_id:
 *           type: integer
 *           format: int64
 *         type:
 *           type: string
 *           enum: ['approved', 'request', 'reject', 'cancel']
 *         remarks:
 *           type: longtext
 *           format: string
 *         user:
 *           type: integer
 *           format: int64
 *         date:
 *           type: varchar(20)
 *           format: string
 *
 */

/**
 * @swagger
 * /sales_order_activity/createsales_order_activity:
 *   post:
 *     summary: Create a new sales order activity
 *     description: Create a new sales order activity
 *     tags:
 *       - Sales Order Activity
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created sales order activity
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               sales_order_id:
 *                 type: integer
 *                 format: int64
 *               type:
 *                 type: string
 *                 enum: ['approved', 'request', 'reject', 'cancel']
 *               remarks:
 *                 type: longtext
 *                 format: string
 *               user:
 *                 type: integer
 *                 format: int64
 *               date:
 *                 type: varchar(20)
 *                 format: string
 */

/**
 * @swagger
 * /sales_order_activity/updatesales_order_activity:
 *   put:
 *     summary: Update an existing sales order activity
 *     description: Update sales order activity based on ID
 *     tags:
 *       - Sales Order Activity
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated sales order activity
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
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 format: int64
 *               sales_order_id:
 *                 type: integer
 *                 format: int64
 *               type:
 *                 type: string
 *                 enum: ['approved', 'request', 'reject', 'cancel']
 *               remarks:
 *                 type: longtext
 *                 format: string
 *               user:
 *                 type: integer
 *                 format: int64
 *               date:
 *                 type: varchar(20)
 *                 format: string
 */
//#endregion

