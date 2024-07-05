const AboutBody1 = require('../models/aboutBody1');

exports.getAboutBody1 = async (req, res)=>{
    try{
        const content = await AboutBody1.findOne();
        if(!content){
            res.status(404).json({message: 'Content not found'})
        }
        res.status(200).json(content);
    }catch(error){
        res.status(500).json({error: 'Error fetching aboutus content(1)', details: error.message});
    }
    
}

exports.updateAboutBody1 = async (req, res)=>{
    try{
        const {title, sub_text, description} = req.body;
        const images = req.files.map(file=>file.location);

        const content = await AboutBody1.findOneAndUpdate({}, {title, sub_text, description, images}, {new: true, upsert: true});
        res.status(200).json(content);

    }catch(error){
        res.status(500).json({error: 'Error updating aboutus content(1)', details: error.message});
    }

}