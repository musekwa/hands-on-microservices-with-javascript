# Hands-on Microservices with JavaScript

A comprehensive microservices learning project built with Node.js, Express, and MongoDB. This repository contains practical examples and implementations of microservices architecture patterns.

## 🏗️ Project Overview

This project demonstrates the implementation of microservices using modern JavaScript technologies. Each chapter focuses on different aspects of microservices development, from basic service creation to advanced patterns and best practices.

## 📚 Chapters

### Chapter 5: Account Service

- **Location**: `./ch05/`
- **Description**: A complete microservice for managing accounts
- **Technologies**: Node.js, Express.js, MongoDB, Mongoose, Joi
- **Features**: CRUD operations, data validation, Docker support
- **API**: RESTful endpoints for account management

## 🛠️ Tech Stack

- **Runtime**: Node.js 22
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Joi for input validation
- **Containerization**: Docker
- **Environment Management**: dotenv
- **Development**: nodemon for hot reloading

## 🚀 Getting Started

### Prerequisites

- Node.js 22 or higher
- MongoDB (local or cloud instance)
- Docker (optional, for containerized deployment)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd Hands-on-microservices-with-JS
   ```

2. **Navigate to a specific chapter**:

   ```bash
   cd ch05  # Account Service
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the chapter's `configs` directory:

   ```env
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/account-service
   ```

5. **Start the service**:

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 📖 Learning Path

### Chapter 5: Account Service

- **Objective**: Learn microservice fundamentals
- **Key Concepts**:
  - Service architecture design
  - RESTful API development
  - Database integration with MongoDB
  - Input validation and error handling
  - Docker containerization
  - Environment configuration

## 🏛️ Architecture Patterns

This project demonstrates several microservices patterns:

- **Service-Oriented Architecture (SOA)**
- **Domain-Driven Design (DDD)**
- **API-First Development**
- **Containerization with Docker**
- **Configuration Management**
- **Error Handling and Validation**

## 📁 Project Structure

```
Hands-on-microservices-with-JS/
├── ch05/                     # Chapter 5: Account Service
│   ├── src/
│   │   ├── app.js           # Express application setup
│   │   ├── index.js         # Application entry point
│   │   ├── config/          # Configuration management
│   │   ├── controllers/     # Request handlers
│   │   ├── db/              # Database connection
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/          # Data models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   └── validation/      # Input validation schemas
│   ├── configs/             # Environment configurations
│   ├── Dockerfile           # Docker configuration
│   ├── package.json         # Dependencies and scripts
│   └── README.md           # Chapter-specific documentation
└── README.md               # This file
```

## 🐳 Docker Support

Each service includes Docker configuration for easy deployment:

```bash
# Build the Docker image
docker build -t account-service ./ch05

# Run the container
docker run -p 3001:3001 account-service
```

## 🔧 Development

### Available Scripts

Each chapter includes standard npm scripts:

- `npm start` - Start the application in production mode
- `npm run dev` - Start with nodemon for development
- `npm test` - Run tests (where implemented)

### Environment Variables

Common environment variables across services:

| Variable    | Description               | Default                    |
| ----------- | ------------------------- | -------------------------- |
| PORT        | Service port              | 3001                       |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/ |

## 📚 Learning Objectives

By working through this project, you will learn:

1. **Microservices Fundamentals**

   - Service design and architecture
   - API development and documentation
   - Database integration patterns

2. **Modern JavaScript Development**

   - ES6+ features and modules
   - Async/await patterns
   - Error handling strategies

3. **DevOps and Deployment**

   - Docker containerization
   - Environment configuration
   - Service monitoring

4. **Best Practices**
   - Code organization and structure
   - Input validation and sanitization
   - Error handling and logging
   - API documentation

## 🤝 Contributing

This is a learning project designed for educational purposes. Feel free to:

- Experiment with the code
- Add new features
- Implement additional chapters
- Improve documentation
- Share your learnings

## 📄 License

This project is licensed under the ISC License - see the individual chapter README files for details.

## 🎯 Next Steps

After completing the current chapters, consider exploring:

- Service discovery and registration
- API Gateway implementation
- Message queues and event-driven architecture
- Monitoring and logging
- Security and authentication
- Testing strategies
- CI/CD pipelines

## 📞 Support

If you encounter any issues or have questions:

1. Check the chapter-specific README files
2. Review the code comments and documentation
3. Experiment with the provided examples
4. Refer to the official documentation of the technologies used

---

**Happy Learning! 🚀**

_This project is part of a hands-on microservices learning journey. Each chapter builds upon the previous ones, gradually introducing more complex concepts and patterns._
