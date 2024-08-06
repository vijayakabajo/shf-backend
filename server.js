const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const s3 = require('./config/awsConfig');

const imageRoutes = require('./routes/imageRoutes');
const eventRoutes = require('./routes/eventRoutes');
const donationRoutes = require('./routes/donationRoutes');
const homepageStoryRoutes = require('./routes/homepageStoryRoutes');
const aboutusRoutes1 = require('./routes/aboutBody1Routes')
const aboutusRoutes2 = require('./routes/aboutBody2Routes')
const masonryConfigRoutes = require('./routes/masonryConfigRoutes');
const authRoutes = require('./routes/authRoutes');
const upcomingEventRoutes = require('./routes/upcomingEventRoutes'); 
 
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

connectDB(); // Database Connection >> db.js

app.use('/api/images', imageRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/upcomingevents', upcomingEventRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/homepagestory', homepageStoryRoutes);
app.use('/api/aboutus1', aboutusRoutes1);
app.use('/api/aboutus2', aboutusRoutes2);
app.use('/api/masonryconfig', masonryConfigRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
