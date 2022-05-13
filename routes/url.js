const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const validUrl = require('valid-url');
const shortid = require('shortid');


router.post('/shorten',
async (req,res)=>{
    const longurl = req.body.longUrl;

    if(!validUrl.isUri(longurl)){
        return res.status(401).json('Invalid URL')
    }

    const urlcode = shortid.generate();

    if(validUrl.isUri(longurl)){
        try{
            let url = await Url.findOne({longUrl: longurl});

            if(url){
                res.json(url);
            }else{
                const shorturl = "http://localhost:6000"+ "/" + urlcode;

                url = Url.create({
                    shortUrl: shorturl,
                    longUrl: longurl,
                    urlCode: urlcode
                });

            }
        }catch(error){
            console.log(error);
            res.status(500).json('Internal Server Error');
        }
    }else{
            res.status(401).json('Invalid Url');
    }

})

module.exports = router;