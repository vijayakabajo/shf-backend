const AboutBody2 = require('../models/aboutBody2');

exports.getAboutBody2 = async (req, res)=>{
    try{
        const content = await AboutBody2.findOne();
        if(!content){
            res.status(404).json({message: 'Content not found'})
        }
        res.status(200).json(content);
    }catch(error){
        res.status(500).json({error: 'Error fetching aboutus content(2)', details: error.message});
    }
    
};

exports.updateAboutBody2 = async (req, res)=>{
    try{
        const {title, sub_text, description} = req.body;
        const images = req.files.map(file=>file.location);

        const content = await AboutBody2.findOneAndUpdate({}, {title, sub_text, description, images}, {new: true, upsert: true});
        res.status(200).json(content);

    }catch(error){
        res.status(500).json({error: 'Error updating aboutus content(2)', details: error.message});
    }

};