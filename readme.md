## Air Ticket Booking System
This is the backend implementation for an Air Ticket Booking System that allows users to book flights for their desired destinations.

## Technologies Used
    Node.js
    Express.js
    MongoDB (NEM)

Setup Instructions
Clone the repository:
git clone <https://github.com/masai-course/rubel_foridi_fp08_206/tree/master/unit-7/evaluation/air_ticket_booking>
Install dependencies:
cd air-ticket-booking
npm install

Configure the MongoDB connection:
Open the .env file in the root directory.
Replace <mongodb_connection_string> with your MongoDB connection string.

### Start the server:
    ```npm run server```

## Register User
## Endpoint: POST /api/register
Description: Register a new user
Request Body:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password"
}
Response:json
{
  "message": "User registered successfully",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}

Login User
## Endpoint: POST /api/login
Description: Login a user
Request Body:json
{
  "email": "johndoe@example.com",
  "password": "password"
}
Response:json

{
  "message": "Login successful",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}

Flight Routes
Get All Flights
## Endpoint: GET /api/flights
Description: Get a list of all available flights
Response:json

{
  "flights": [
    {
      "_id": "flight_id",
      "airline": "Airline Name",
      "flightNo": "FL123",
      "departure": "City A",
      "arrival": "City B",
      "departureTime": "2023-05-30T12:00:00Z",
      "arrivalTime": "2023-05-30T14:00:00Z",
      "seats": 100,
      "price": 200.0
    },
    {
      "_id": "flight_id",
      "airline": "Airline Name",
      "flightNo": "FL456",
      "departure": "City C",
      "arrival": "City D",
      "departureTime": "2023-05-30T15:00:00Z",
      "arrivalTime": "2023-05-30T17:00:00Z",
      "seats": 150,
      "price": 150.0
    }
  ]
}

Get Flight Details
## Endpoint: GET /api/flights/:flightId
Description: Get details of a specific flight
Response:
json
{
  "flight": {
    "_id": "flight_id",
    "airline": "Airline Name",
    "flightNo": "FL123",
    "departure": "City A",
    "arrival": "City B",
    "departureTime": "2023-05-30T12:00:00Z",
    "arrivalTime": "2023-05-30T14:00:00Z",
    "seats": 100,
    "price": 200.0
}
}


### Booking Routes

#### Create Booking

- Endpoint: POST `/api/booking`
- Description: Create a new booking
- Request Body:

```json```
{
  "user": "user_id",
  "flight": "flight_id"
}
Response:
{
  "message": "Booking created successfully",
  "booking": {
    "_id": "booking_id",
    "user": "user_id",
    "flight": "flight_id"
  }
}
