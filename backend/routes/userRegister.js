const express = require("express");
const UserData = require('../Models/user.model.register');
const mongoose = require('mongoose');
const User = require("../Models/UserModel");

const router = express.Router();

router.post('api/register', async (req, res) => {
    try {

        // console.log(req.body);
        // res.json({ status: ok })
        const user = await User.create({

            name: req.body.name,
            email: req.body.email,
                password: req.body.password,
        })

    }

catch (error) {

    console.log(error);
    res.send(600).json({ error: error.message });


}
});


module.exports = router;