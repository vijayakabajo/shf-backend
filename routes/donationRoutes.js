const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const upload = require('../middleware/multerS3Config');

// Route to create a new donation with image upload
router.post('/', upload.single('image'), donationController.createDonation);
router.get('/', donationController.getAllDonations);
router.get('/:id', donationController.getDonationById);
router.delete('/:id', donationController.deleteDonation);
router.put('/:id', upload.single('image'), donationController.updateDonation);

module.exports = router;
