const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const imageRoutes = require('./routes/imageRoutes');
const cors = require('cors');
const path = require('path');
const s3 = require('./config/awsConfig');
const authRoutes = require('./routes/auth')

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); // Database Connectionf >> db.js

app.use('/api/images', imageRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
