# Air Ticket Booking Backend System

## About

<br>

This is Air Ticket Booking System where user can register with their credentials and login with their credentials and after authentication user can view the flights and book flights , edit the booked flights , and delete the booking.

<br>

## Clone Repository 

```
https://github.com/Amanmandal-M/Mock_6_Backend.git
```


## Installation

```
npm install
```

## Start the Backend server 

```
npm run start
```
```
node index.js
```
```
nodemon start
``` 
```
nodemon index.js
```

Note : You can use any of them 

<br>

##  MVC Structure

```
├── index.js
├── configs
|    └── db.js
├── models
|    └── userModel.js
|    └── flightModel.js
|    └── bookingModel.js
├── routes
|    └── userRoute.js
|    └── flightRoute.js
|    └── bookingRoute.js
├── middlewares
|    └── authenticationMiddleware.js
├──controllers
|    └── userController.js
|    └── flightController.js
|    └── bookingController.js
```

Note: 

- Before doing anything first create `.env` file and put `PORT` , `MONGO_URL` , `NORMAL_KEY`.
- `PORT` is for listening the server.
- `MONGO_URL` is for running database and store your data in database so put your mongo link.
- `NORMAL_KEY` is for authentication jsonwebtoken so basically this is your secret key .

<br>

## Swagger API documentation and Schemas

<strong>
<h2>
<a href="hhttps://air-ticket-booking-vn6t.onrender.com/api-docs/" target="_blank">Swagger</a>
</h2>
</strong>

<br>

## Schema Design

<br>

<h3><strong>User Schema</strong><h3>

```
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String
}
```

<h3><strong>Flight Schema</strong><h3>

```
{
  _id: ObjectId,
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}
```

<h3><strong>Booking Schema</strong><h3>

```
{
	 _id: ObjectId,
	 user   : { type: ObjectId, ref: 'User' },
	 flight : { type: ObjectId, ref: 'Flight' }
}

```

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/register</td>
            <td>This endpoint should allow users to register.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/login</td>
            <td>This endpoint should allow users to login.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/flights</td>
            <td>This endpoint should return a list of all available flights.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/flights/:id</td>
            <td>This endpoint should return the details of a specific flight identified by its ID.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/flights</td>
            <td>This endpoint should allow users to add new flights to the system.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>PUT / PATCH</td>
            <td>/api/flights/:id</td>
            <td>This endpoint should allow users to update the details of a specific flight identified by its ID.</td>
            <td>204</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/flights/:id</td>
            <td>This endpoint should allow users to delete a specific flight identified by its ID.</td>
            <td>202</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/booking</td>
            <td>This endpoint should allow the user to book flights.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/dashboard</td>
            <td>This point should list all the bookings so far with the user and flight details.</td>
            <td>200</td>
        </tr>
    </tbody>
</table>



