# Trustech Accessories Backend API

## Setup Instructions

1. Install dependencies:
```bash
cd backend
npm install
```

2. Install MongoDB:
   - Download from https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

3. Configure environment variables:
   - Update `.env` file with your MongoDB URI and JWT secret

4. Start the server:
```bash
npm run dev
```

Server will run on http://localhost:5000

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user (requires auth)

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Create product (admin only)
- PUT `/api/products/:id` - Update product (admin only)
- DELETE `/api/products/:id` - Delete product (admin only)

### Orders
- POST `/api/orders` - Create order (requires auth)
- GET `/api/orders/my-orders` - Get user orders (requires auth)
- GET `/api/orders` - Get all orders (admin only)
- PATCH `/api/orders/:id/status` - Update order status (admin only)

### Contact
- POST `/api/contact` - Submit contact form
- GET `/api/contact` - Get all contacts (admin only)
- PATCH `/api/contact/:id/status` - Update contact status (admin only)

## Testing with Postman/Thunder Client

Example Register Request:
```json
POST http://localhost:5000/api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```
