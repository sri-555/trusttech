<<<<<<< HEAD

=======
<<<<<<< HEAD
# trusttech
It web applicaation for  laptop and mobile accessories 
=======
# 💻 Trustech Accessories - E-Commerce Website

A complete e-commerce website built with **pure HTML, CSS, and JavaScript** - no frameworks, no React, just clean code!

---

## 🎯 Features

✅ **User Authentication** - Login/Signup with secure backend  
✅ **Shopping Cart** - Add products, manage quantities, checkout  
✅ **Product Catalog** - 8 products with images and descriptions  
✅ **Order Management** - Place orders, save to database  
✅ **Contact Form** - Submit inquiries to backend  
✅ **Responsive Design** - Works on all devices  
✅ **Beautiful UI** - Gradient backgrounds, smooth animations  

---

## 🚀 Quick Start

### 1. Start Backend Server
```bash
cd backend
npm install
npm run dev:simple
```
Backend runs on: http://localhost:5000

### 2. Start Frontend Server
```bash
python -m http.server 8000
```
Frontend runs on: http://localhost:8000

### 3. Open in Browser
```
http://localhost:8000/index.html
```

---

## 📂 Project Structure

```
trusttect/
├── index.html              # Main website
├── login.html              # Login page (with backend)
├── login-simple.html       # Login page (standalone)
├── brochure.html           # Product brochure
├── style.css               # Styles
│
├── js/                     # JavaScript
│   ├── api.js              # API client
│   ├── main.js             # Main logic
│   ├── login-page.js       # Login logic
│   ├── contact.js          # Contact form
│   └── products.js         # Shopping cart
│
├── image/                  # Images
│
└── backend/                # Backend server
    ├── server-simple.js    # Express server
    ├── db/                 # Database
    │   └── data/           # JSON files
    └── ...
```

---

## 🛍️ How to Use

### Create Account
1. Click "🔐 Login" in navigation
2. Click "Sign Up" tab
3. Fill in your details
4. Click "Create Account"

### Purchase Products
1. Login to your account
2. Scroll to Products section
3. Click "Purchase" on any product
4. View cart and checkout

### View Cart
1. Click "🛒 Cart" in navigation
2. Manage quantities
3. Click "Proceed to Checkout"

---

## 🎨 Technology Stack

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript
- No frameworks!

### Backend
- Node.js
- Express.js
- File-based JSON database
- JWT authentication

---

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/index.html` | Main website |
| Login | `/login.html` | Login/Signup (with backend) |
| Login Simple | `/login-simple.html` | Login/Signup (no backend) |
| Brochure | `/brochure.html` | Product catalog |

---

## 🔧 Configuration

### Backend (.env)
```
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### API Endpoints
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/products` - Get products
- `POST /api/orders` - Create order
- `POST /api/contact` - Submit contact form

---

## 💰 Products

| Product | Price |
|---------|-------|
| Wireless Earbuds | ₹2,999 |
| Wireless Mouse | ₹899 |
| Mechanical Keyboard | ₹3,499 |
| HD Webcam | ₹2,499 |
| Premium Mobile Case | ₹599 |
| Gaming Mouse Pad | ₹399 |
| Premium Headphones | ₹4,999 |
| 20000mAh Power Bank | ₹1,999 |

---

## 📚 Documentation

- `SETUP_GUIDE.md` - Complete setup instructions
- `HOW_TO_VIEW.md` - How to access the website
- `PURCHASE_GUIDE.md` - Shopping cart guide
- `LOGIN_OPTIONS.md` - Login page options
- `PROJECT_STRUCTURE.md` - Project structure
- `REACT_REMOVED.txt` - React removal confirmation

---

## ✅ What's Working

✅ User registration and login  
✅ Shopping cart with persistence  
✅ Add/remove products from cart  
✅ Checkout and order creation  
✅ Contact form submission  
✅ User profile in navbar  
✅ Logout functionality  
✅ Backend API integration  
✅ Database storage  

---

## 🎊 Features Highlights

### Shopping Cart
- Add products with one click
- Real-time cart badge
- Manage quantities
- Remove items
- Persistent across sessions
- Beautiful notifications

### Authentication
- Secure login/signup
- JWT tokens
- Password hashing
- Session management
- User profile display

### UI/UX
- Gradient backgrounds
- Smooth animations
- Responsive design
- Interactive modals
- Hover effects
- Tab switching

---

## 🔐 Security

- Passwords hashed with bcrypt
- JWT token authentication
- Secure API endpoints
- Input validation
- CORS enabled

---

## 📱 Responsive Design

Works perfectly on:
- Desktop computers
- Laptops
- Tablets
- Mobile phones

---

## 🎯 Browser Support

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

---

## 🚀 Deployment

### Frontend
Deploy to any static hosting:
- GitHub Pages
- Netlify
- Vercel
- AWS S3

### Backend
Deploy to:
- Heroku
- Railway
- Render
- AWS EC2

---

## 📞 Contact

- Email: trustech@access.com
- Phone: +91-9876543210
- Location: Chennai, Tamil Nadu, India

---

## 📝 License

This project is open source and available for educational purposes.

---

## 🎉 Credits

Built with ❤️ using pure HTML, CSS, and JavaScript.

No React, no frameworks, just clean code!

---

## 🔗 Links

- **Website:** http://localhost:8000
- **Backend:** http://localhost:5000
- **Documentation:** See `/Documentation` folder

---

**Enjoy your fully functional e-commerce website!** 🛍️✨
>>>>>>> 6bbdca4 (Initial commit: Trustech website with navbar fixes, login/signup system, products, and admin role support)
>>>>>>> f6d83c0 (Initial commit of Trusttect project)
