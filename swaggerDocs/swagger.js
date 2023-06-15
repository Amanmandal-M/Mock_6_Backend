// ----------------------------->>>>>>> Schemas <<<<<<<-----------------------------

// --------------------->>> Authorization Schema<<<---------------------
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       description: Please Enter Token after login for further move.
 */


// --------------------->>> Users Schema <<<---------------------
/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         id:
 *           type: ObjectId
 *           description: Id of the user
 *         name:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *       required:
 *         - email
 *         - password
 *       example:
 *         _id: 6475a8e9edc281ccba9a37b5
 *         name: Aman Kumar
 *         email: amanmandal644@gmail.com
 *         password: aman123
 */


// --------------------->>> Flight Schema <<<---------------------
/**
 * @swagger
 * components:
 *   schemas:
 *     Flights:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Id of the product
 *         airline:
 *           type: string
 *           description: Name of Airline.
 *         flightNo:
 *           type: string
 *           description: Flight Number.
 *         departure:
 *           type: string
 *           description: Departure Details.
 *         arrival:
 *           type: string
 *           description: Arrival Details.
 *         departureTime:
 *           type: date
 *           description: Departure Time.
 *         arrivalTime:
 *           type: date
 *           description: Arrival Time.
 *         seats:
 *           type: number
 *           description: Number of seat.
 *         price:
 *           type: number
 *           description: Price of seat
 *       example:
 *         _id: ObjectId('6475bddf0c6d9a43d59cd44d')
 *         airline: Air India
 *         flightNo: 3487GH
 *         departure: 10:00AM
 *         arrival: 09:00AM
 *         departureTime: <Automatically Generated>
 *         arrivalTime: <Automatically Generated>
 *         seats: 1
 *         price: 45806
 */


// --------------------->>> Booking Schema <<<---------------------
/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       properties:
 *         id:
 *           type: ObjectId
 *           description: Id of the Booking
 *         user:
 *           type: string
 *           description: User Id
 *         flight:
 *           type: string
 *           description: Flight Id
 *       example:
 *         _id: 6475c429731a1d2815e999d2
 *         user: 6475a8e9edc281ccba9a37b5
 *         flight: 6475bddf0c6d9a43d59cd44d
 */




// ----------------------------->>>>>>> Routes <<<<<<<-----------------------------



// ------->>> Users Routes <<<-------

// Tags
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User API Endpoints
 */

// Signup
/**
 * @swagger
 * /register:
 *   post:
 *     summary: user can register from this route
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       201:
 *         description: User Registered Successfully || User Already Exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: Internal Server Error || Contact to administrator
 */

// Login
/**
 * @swagger
 * /login:
 *   post:
 *     summary: user can login from this route
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       201:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       401:
 *         description: User not found
 *       404:
 *         description: Login failed || Internal Server Error
 */



// ------------------------>>> Product Routes <<<------------------------

// Tags
/**
 * @swagger
 * tags:
 *   name: Flights
 *   description: Flight API Endpoints
 */

// GET all products
/**
 * @swagger
 * /flights:
 *   get:
 *     summary: Returns the list of all the Flights.
 *     tags: [Flights]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Return all Flights
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Flights'
 *       404:
 *         description: Internal Server Error
 */

// GET single flight by Id
/**
 * @swagger
 * /flights/{id}:
 *  get:
 *    summary: Get a single flight by Id
 *    tags: [Flights]
 *    security:
 *       - BearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Flight Id to retrieve
 *    responses:
 *      200:
 *        description: Return single Flight
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Flights'
 *      404:
 *        description: Internal Server Error
 */

// POST a flight
/**
 * @swagger
 * /flights:
 *   post:
 *     summary: Add a new flight
 *     tags: [Flights]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Flights'
 *     responses:
 *       201:
 *         description: Flight added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Flights'
 *       404:
 *         description: Internal Server Error
 */

// PATCH single flight by Id
/**
 * @swagger
 * /flights/{id}:
 *  patch:
 *    summary: Update a single flight by Id
 *    tags: [Flights]
 *    security:
 *       - BearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Flight Id to retrieve
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Flights'
 *    responses:
 *      204:
 *        description: Flight Updated Successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Flights'
 *      404:
 *        description: Internal Server Error || Flight not found
 */

// DELETE single flight by Id
/**
 * @swagger
 * /flights/{id}:
 *  delete:
 *    summary: Delete a single flight by Id
 *    tags: [Flights]
 *    security:
 *       - BearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Flight Id to retrieve
 *    responses:
 *      202:
 *        description: Flight Deleted Successfully
 *      404:
 *        description: Internal Server Error || Flights not found
 */



// ------------------------>>> Booking Routes <<<------------------------

// Tags
/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Flight API Endpoints
 */

// GET all Bookings
/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Returns the list of all Booking Flights including User.
 *     tags: [Booking]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Return all Bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 *       404:
 *         description: Internal Server Error
 */

// POST a Booking
/**
 * @swagger
 * /booking:
 *   post:
 *     summary: Add a new Booking of Flight
 *     tags: [Booking]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Booking'
 *     responses:
 *       201:
 *         description: Flight added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Booking'
 *       404:
 *         description: Internal Server Error
 */