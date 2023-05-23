const express = require("express");
const contactUs = require('../Models/contactUsModel');
const mongoose = require('mongoose');

const router = express.Router();



//create Query Message(Contact us data)
router.post('/', async (req, res) => {

    const { name, email, mobileNumber, messagebody } = req.body;

    try {

        const contactUsData = await contactUs.create({
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            messagebody: messagebody,
        });
        res.status(201).json(contactUsData)

    }
    catch (error) {
        console.log(error);
        res.send(400).json({error:error.message})

    }


})

// get contactUs data
router.get("/", async (req, res) => {

    // const { name, email, age } = req.body;

    try {

        const showAll = await contactUs.find();
        res.status(200).json(showAll)

    }
    catch (error) {
        console.log(error);
        res.send(500).json({error:error.message})

    }

})


module.exports = router;