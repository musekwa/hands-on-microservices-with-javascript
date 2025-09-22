# Account Service

A microservice for managing accounts, built with Node.js, Express, and MongoDB. This service provides RESTful API endpoints for account management operations.

## Features

- **Account Management**: Create, read, update, and delete accounts
- **Account Types**: Support for "root" and "sub" account types
- **Account Status**: Track account status (new, active, inactive, blocked)
- **Data Validation**: Input validation using Joi
- **Database Integration**: MongoDB with Mongoose ODM
- **Docker Support**: Containerized application with Dockerfile

## Tech Stack

- **Runtime**: Node.js 22
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose 8.18.1
- **Validation**: Joi 18.0.1
- **Environment**: dotenv 17.2.2
- **Development**: nodemon 3.1.10

## Project Structure

```
ch05/
├── configs/                 # Configuration files
├── src/
│   ├── app.js              # Express app configuration
│   ├── index.js            # Application entry point
│   ├── config/
│   │   └── config.js       # Configuration management
│   ├── controllers/
│   │   └── account.js      # Account controller
│   ├── db/
│   │   └── index.js        # Database connection
│   ├── middleware/
│   │   └── validate.js     # Validation middleware
│   ├── models/
│   │   └── account.js      # Account data model
│   ├── routes/
│   │   └── v1/
│   │       └── accounts/
│   │           └── index.js # Account routes
│   ├── services/
│   │   └── account.js      # Account business logic
│   └── validation/
│       └── account.js      # Account validation schemas
├── Dockerfile              # Docker configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## API Endpoints

### Base URL

```
http://localhost:3001/v1/accounts
```

### Endpoints

| Method | Endpoint | Description        | Request Body                         |
| ------ | -------- | ------------------ | ------------------------------------ |
| GET    | `/`      | Get all accounts   | -                                    |
| GET    | `/:id`   | Get account by ID  | -                                    |
| POST   | `/`      | Create new account | `{ name, number, type?, status? }`   |
| PUT    | `/:id`   | Update account     | `{ name?, number?, type?, status? }` |
| DELETE | `/:id`   | Delete account     | -                                    |

### Account Model

```json
{
  "id": "string",
  "name": "string",
  "number": "string (unique)",
  "type": "root | sub",
  "status": "new | active | inactive | blocked",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Response Format

```json
{
  "success": true,
  "account": {
    "id": "account_id",
    "name": "Account Name",
    "number": "123456789",
    "type": "root",
    "status": "active"
  }
}
```

## Getting Started

### Prerequisites

- Node.js 22 or higher
- MongoDB
- npm or yarn

### Installation

1. Clone the repository and navigate to the ch05 directory:

```bash
cd ch05
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the `configs` directory:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/account-service
```

4. Start the application:

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The service will start on `http://localhost:3001`

### Using Docker

1. Build the Docker image:

```bash
docker build -t account-service .
```

2. Run the container:

```bash
docker run -p 3001:3001 account-service
```

## Development

### Available Scripts

- `npm start` - Start the application in production mode
- `npm run dev` - Start the application in development mode with nodemon
- `npm test` - Run tests (currently not implemented)

### Environment Variables

| Variable    | Description               | Default                                   |
| ----------- | ------------------------- | ----------------------------------------- |
| PORT        | Server port               | 3001                                      |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/account-service |

## API Examples

### Create Account

```bash
curl -X POST http://localhost:3001/v1/accounts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "number": "123456789",
    "type": "root",
    "status": "new"
  }'
```

### Get All Accounts

```bash
curl http://localhost:3001/v1/accounts
```

### Get Account by ID

```bash
curl http://localhost:3001/v1/accounts/ACCOUNT_ID
```

### Update Account

```bash
curl -X PUT http://localhost:3001/v1/accounts/ACCOUNT_ID \
  -H "Content-Type: application/json" \
  -d '{
    "status": "active"
  }'
```

### Delete Account

```bash
curl -X DELETE http://localhost:3001/v1/accounts/ACCOUNT_ID
```

## Error Handling

The service returns appropriate HTTP status codes and error messages:

- `200` - Success
- `201` - Created
- `204` - No Content (for successful deletions)
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Internal Server Error

Error response format:

```json
{
  "success": false,
  "message": "Error description"
}
```

## License

ISC

## Contributing

This is part of a microservices learning project. Feel free to explore and experiment with the code!
