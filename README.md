# BS Traders E-Commerce

A full-stack e-commerce web application built using React, Vite, Express, MongoDB, Razorpay, and Cloudinary.

---

## Features

- User Registration and Login
- Product Listing
- Product Details Page
- Sell / Add Product Feature
- Image Upload using Cloudinary
- Online Payment Integration using Razorpay
- Responsive UI
- Backend API using Express
- MongoDB Database Integration
- Vercel Deployment Support

---

## Tech Stack

### Frontend
- React
- Vite
- CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Cloudinary
- Razorpay

---

## Folder Structure

```bash
bstraders/
└── e-commerce/
    ├── backend/
    │   ├── api/
    │   ├── config/
    │   ├── middleware/
    │   └── models/
    │
    ├── client/
    │   ├── src/
    │   ├── index.html
    │   └── vite.config.js
    │
    ├── package.json
    ├── vercel.json
    └── .env


Installation
Clone the Repository
git clone https://github.com/BHAGAVATHIRAJA26/BS-Traders-Ecommerce-.git
cd BS-Traders-Ecommerce-
Install Frontend Dependencies
cd client
npm install
Install Backend Dependencies
cd ../backend
npm install
Run Project Locally
Start Backend
cd backend
npm start
Start Frontend
cd client
npm run dev
Environment Variables

Create a .env file in the root folder and add:

MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
