const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const s3 = require('./config/awsConfig');

const imageRoutes = require('./routes/imageRoutes');
const eventRoutes = require('./routes/eventRoutes');
const donationRoutes = require('./routes/donationRoutes');
const homepageStoryRoutes = require('./routes/homepageStoryRoutes')

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB(); // Database Connection >> db.js

app.use('/api/images', imageRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/homepagestory', homepageStoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
