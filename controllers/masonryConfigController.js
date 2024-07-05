
const MasonryConfig = require('../models/masonryConfigModel');


exports.getMasonryConfig = async (req, res) => {
  try {
    let config = await MasonryConfig.findOne();
    if (!config) {
      config = new MasonryConfig({ columns: 3 });
      await config.save();
    }
    res.status(200).json(config);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// exports.updateMasonryConfig = async (req, res) => {
//   const { columns } = req.body;
//   console.log('Received request body:', req.body);

//   if (columns === undefined) {
//     return res.status(400).json({ message: 'Columns field is required' });
//   }

//   try {
//     const updatedConfig = await MasonryConfig.findOneAndUpdate(
//       {}, // Filter (empty since we want to update the first document found)
//       { columns }, // Update
//       { new: true, upsert: true, setDefaultsOnInsert: true } // Options: return the updated document, create if not exists, apply defaults if creating
//     );

//     res.status(200).json(updatedConfig);
//   } catch (error) {
//     console.error('Error updating config:', error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// };
