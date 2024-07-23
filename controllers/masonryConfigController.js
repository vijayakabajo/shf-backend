
const MasonryConfig = require('../models/masonryConfigModel');


exports.getMasonryConfig = async (req, res) => {
  try {
    let config = await MasonryConfig.findOne();
    if (!config) {
      config = new MasonryConfig({ columns: 3 });  //default:3
      await config.save();
    }
    res.status(200).json(config);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// exports.updateMasonryConfig = async (req, res)=>{
//   try{
//       const {columns} = req.body;
//       const cols = await MasonryConfig.findOneAndUpdate( {}, {columns}, {new: true, upsert: true});
//       res.status(200).json(cols);
//   }catch(error){
//       res.status(500).json({error: 'Error updating Masonry config', details: error.message});
//   }
// }

exports.updateMasonryConfig = async (req, res) => {
  try {
    // Log the incoming request body
    console.log('Incoming request body:', req.body);

    // Validate the input
    const { columns } = req.body;
    if (typeof columns !== 'number' || columns < 1) {
      return res.status(400).json({ error: 'Invalid columns value' });
    }

    // Update or insert the new columns value
    const cols = await MasonryConfig.findOneAndUpdate(
      {},
      { columns },
      { new: true, upsert: true }
    );

    // Log the updated config
    console.log('Updated MasonryConfig:', cols);

    // Respond with the updated config
    res.status(200).json(cols);
  } catch (error) {
    // Log the error details
    console.error('Error updating Masonry config:', error);

    // Respond with an error message
    res.status(500).json({
      error: 'Error updating Masonry config',
      details: error.message,
    });
  }
};
