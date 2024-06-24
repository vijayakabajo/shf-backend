const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/admin');
const connectDB = require('./config/db');

dotenv.config();

connectDB();  // Database Connectionf >> db.js

const createAdmin = async (username, password) => {
  try {
    const admin = new Admin({ username, password });
    await admin.save();
    console.log(`Admin user ${username} created successfully.`);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close();
  }
};


createAdmin('admin_username', 'admin_password');    // Replace username and password
