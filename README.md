# 🛒 E-Commerce Microservices Platform

A scalable E-Commerce application built using a **Microservices Architecture** with **NestJS**, **Next.js**, **PostgreSQL**, **RabbitMQ**, **Docker**, and **TypeORM**.

This project demonstrates service decomposition, asynchronous communication using RabbitMQ, independent databases, REST APIs, and a modern frontend.

---

# 🚀 Tech Stack

## Backend

- NestJS
- TypeScript
- TypeORM
- PostgreSQL
- RabbitMQ
- Docker

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

---

# 🏗️ Microservices

```
Frontend (Next.js)
        │
        │ REST APIs
        ▼
+---------------------+
| Product Service     |
+---------------------+
        │
        │
+---------------------+
| Customer Service    |
+---------------------+
        │
        │
+---------------------+
| Order Service       |
+---------------------+
        │
        │ publishes event
        ▼
      RabbitMQ
        │
        ▼
+----------------------+
| Notification Service |
+----------------------+
```

---

# 📂 Project Structure

```
ecommerce-microservices/

│
├── frontend/
│
├── product-order-service/
│
├── customer-service/
│
├── notification-service/
│
├── docker-compose.yml
│
└── README.md
```

---

# ✨ Features

## Product Service

- Create Product
- Get All Products
- Get Product by ID
- Update Product
- Delete Product
- Stock Management

---

## Customer Service

- Customer Registration
- View Customers
- View Customer by ID
- Update Customer
- Delete Customer

---

## Order Service

- Checkout API
- Order Creation
- Multiple Order Items
- Automatic Stock Reduction
- Database Transaction
- Publish RabbitMQ Event

---

## Notification Service

- RabbitMQ Consumer
- Listens for Order Created Event
- Simulates Email Notification
- Acknowledges RabbitMQ Messages

---

## Frontend

- Home Page
- Product Listing
- Product Details
- Customer Registration
- Checkout Page
- Responsive UI

---

# ⚙️ Technologies Used

| Technology | Purpose |
|------------|----------|
| NestJS | Backend Framework |
| PostgreSQL | Database |
| RabbitMQ | Message Broker |
| TypeORM | ORM |
| Next.js | Frontend |
| Tailwind CSS | Styling |
| Axios | API Communication |
| Docker | Containerization |

---

# 🗄️ Databases

Each service owns its own database.

Example

```
product_service

customer_service
```

---

# 📡 RabbitMQ Flow

```
Customer Checkout

        │

        ▼

Order Service

        │

Publishes

order.created

        │

        ▼

RabbitMQ Exchange

        │

        ▼

Notification Queue

        │

        ▼

Notification Service

        │

        ▼

Email Sent
```

---

# 🔥 REST APIs

## Product Service

### Create Product

```
POST /products
```

Example

```json
{
    "name": "Laptop",
    "description": "Dell Inspiron",
    "price": 60000,
    "stock": 5
}
```

---

### Get Products

```
GET /products
```

---

### Get Product

```
GET /products/:id
```

---

### Update Product

```
PATCH /products/:id
```

---

### Delete Product

```
DELETE /products/:id
```

---

# Customer Service

### Register Customer

```
POST /customers
```

```json
{
    "name":"John Doe",
    "email":"john@gmail.com",
    "phone":"9999999999",
    "address":"New York"
}
```

---

### Get Customers

```
GET /customers
```

---

### Get Customer

```
GET /customers/:id
```

---

### Update Customer

```
PATCH /customers/:id
```

---

### Delete Customer

```
DELETE /customers/:id
```

---

# Order Service

### Checkout

```
POST /orders/checkout
```

```json
{
    "customerId":1,
    "items":[
        {
            "productId":1,
            "quantity":2
        }
    ]
}
```

Response

```json
{
    "id":1,
    "customerId":1,
    "totalAmount":120000,
    "status":"CONFIRMED"
}
```

---

# 🐳 Docker

## Start Services

```bash
docker compose up --build
```

---

## Stop Services

```bash
docker compose down
```

---

# 💻 Local Setup

## Clone Repository

```bash
git clone https://github.com/yourusername/ecommerce-microservices.git

cd ecommerce-microservices
```

---

## Backend

Install dependencies

```bash
npm install
```

Run

```bash
npm run start:dev
```

---

## Frontend

```
cd frontend

npm install

npm run dev
```

---

# 🌍 Environment Variables

Example

```
PORT=3001

DB_HOST=localhost

DB_PORT=5432

DB_USERNAME=postgres

DB_PASSWORD=postgres

DB_DATABASE=product_service

RABBITMQ_URL=amqp://guest:guest@localhost:5672
```

---

# 📷 Screenshots

Include screenshots of

- Home Page
- Product Listing
- Product Details
- Customer Registration
- Checkout
- RabbitMQ Dashboard
- Notification Service Console
- PostgreSQL Tables

---

# 🧪 Testing

The project was tested using

- Postman
- Browser
- RabbitMQ Management UI

Verified Scenarios

- Product CRUD
- Customer CRUD
- Checkout
- Stock Update
- RabbitMQ Messaging
- Notification Consumer

---

# 📈 Future Enhancements

- JWT Authentication
- API Gateway
- Redis Caching
- Payment Gateway
- Order History
- Admin Dashboard
- Swagger Documentation
- Kubernetes Deployment
- CI/CD Pipeline
- Email Integration
- SMS Notifications

---

# 👨‍💻 Author

**Souvik Das**

B.Tech Information Technology

Asansol Engineering College

GitHub:
https://github.com/Souvikdas040

LinkedIn:
https://www.linkedin.com/in/souvikdas040

---

# 📜 License

This project was developed as part of a technical assessment and is intended for educational and portfolio purposes.
