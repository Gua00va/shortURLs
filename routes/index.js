const express = require('express');
const router = express.Router();
const Url = require('../models/Url');

// Route: post /:code 
// dest: orignial URL

router.post('/:code',
async (req,res)=>{
    const url = await Url.findOne({urlCode: req.params.code});
    console.log(req.params.code);
    try{
        if(url){
            return res.redirect(url.longUrl);
        }else{
            res.status(404).json('No url found');
        }
    }catch(error){
        console.log(error);
        res.status(500).json('Internal Server Error');
    }
})

module.exports = router;