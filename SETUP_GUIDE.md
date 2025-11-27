# Trustech Accessories - Full Stack Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Backend Setup

### 1. Install MongoDB
**Option A: Local Installation**
- Download from https://www.mongodb.com/try/download/community
- Install and start MongoDB service

**Option B: MongoDB Atlas (Cloud)**
- Create free account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get connection string
- Update `backend/.env` with your connection string

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Configure Environment
Edit `backend/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/trustech
JWT_SECRET=your_secure_random_string_here
NODE_ENV=development
```

### 4. Seed Database with Products
```bash
node scripts/seedProducts.js
```

### 5. Start Backend Server
```bash
npm run dev
```
Server runs on http://localhost:5000

## Frontend Setup

### 1. Main Website
The main website (index.html) is ready to use. Just open it in a browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000
```

Visit http://localhost:8000

### 2. React Login App
```bash
cd login
npm install
npm start
```
React app runs on http://localhost:3000

## Testing the Application

### 1. Test Backend API
Use Postman, Thunder Client, or curl:

**Register User:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123","phone":"1234567890"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

**Get Products:**
```bash
curl http://localhost:5000/api/products
```

### 2. Test Frontend
1. Open main website (http://localhost:8000)
2. Navigate to contact form and submit
3. Click purchase buttons (requires login)
4. Go to login page (http://localhost:3000)
5. Register a new account
6. Login with credentials

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires token)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Orders
- `POST /api/orders` - Create order (requires auth)
- `GET /api/orders/my-orders` - Get user orders (requires auth)
- `GET /api/orders` - Get all orders (admin only)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin only)

## Project Structure
```
.
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth middleware
│   ├── scripts/         # Utility scripts
│   ├── server.js        # Main server file
│   └── .env            # Environment variables
├── login/              # React login app
│   └── src/
│       ├── components/  # React components
│       └── services/    # API service
├── js/                 # Frontend JavaScript
│   ├── api.js          # API client
│   ├── contact.js      # Contact form handler
│   └── products.js     # Products handler
├── image/              # Product images
├── index.html          # Main website
└── style.css           # Styles

```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check Atlas connection
- Verify connection string in `.env`

### CORS Errors
- Backend already configured with CORS
- Ensure backend is running on port 5000

### Port Already in Use
- Change PORT in `backend/.env`
- Update API_URL in `js/api.js` and `login/src/services/api.js`

## Next Steps
1. Add shopping cart functionality
2. Implement payment gateway (Stripe/Razorpay)
3. Add product image upload
4. Create admin dashboard
5. Add email notifications
6. Implement order tracking

## Support
For issues, check the console logs in both frontend and backend.
