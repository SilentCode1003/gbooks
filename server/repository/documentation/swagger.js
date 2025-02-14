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
 *                 type: ENUM('admin','developer','user')
 *                 format: string
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
 *                 enum: ['admin', 'developer', 'user']
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
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
 *                 type: varchar(60)
 *                 format: string
 *               description:
 *                 type: varchar(300)
 *                 format: string
 *               status:
 *                 type: string
 *                 enum: ['active', 'inactive']
 */

//#endregion

//#region Bank Account API Documentation
/**
 * @swagger
 * /bank_accounts/getbank_accounts:
 *   get:
 *     summary: Get all bank_accounts
 *     description: Get all bank_accounts
 *     tags:
 *       - Bank Accounts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully retrieved bank_accounts
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
 *     Bank_account:
 *       type: object
 *       properties:
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
 */

/**
 * @swagger
 * /bank_accounts/createbank_account:
 *   post:
 *     summary: Create a new bank_account
 *     description: Create a new bank_account
 *     tags:
 *       - Bank Accounts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully created bank_account
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
 *     summary: Update an existing bank_account
 *     description: Update bank_account based on ID
 *     tags:
 *       - Bank Accounts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successfully updated bank_account
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
 *                 type: varchar(60)
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
 *
 */

//#endregion