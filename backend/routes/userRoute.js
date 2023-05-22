const express = require("express");
const User = require('../Models/UserModel');
const mongoose = require('mongoose');

const router = express.Router();



//create user
router.post('/', async (req, res) => {

    const { name, email, age } = req.body;

    try {

        const userData = await User.create({
            name: name,
            email: email,
            age: age,
        });
        res.status(201).json(userData)

    }
    catch (error) {
        console.log(error);
        res.send(400).json({error:error.message})

    }


})

// get user
router.get("/", async (req, res) => {

    // const { name, email, age } = req.body;

    try {

        const showAll = await User.find();
        res.status(200).json(showAll)

    }
    catch (error) {
        console.log(error);
        res.send(500).json({error:error.message})

    }

})

// get single user
router.get("/:id", async (req, res) => {

    const {id} = req.params;
    // const { name, email, age } = req.body;
    try {
        const singleUser = await User.findById({_id: id});
        res.status(202).json(singleUser)
    }
    catch (error) {
        console.log(error);
        res.send(501).json({error:error.message})
    }
})


// delete single user
router.delete("/:id", async (req, res) => {

    const {id} = req.params;
    // const { name, email, age } = req.body;
    try {
        const deleteUser = await User.findByIdAndDelete({_id: id});
        res.status(203).json(deleteUser)
    }
    catch (error) {
        console.log(error);
        res.send(502).json({error:error.message})
    }
})


//Update user
router.patch("/:id", async (req, res) => {

    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new : true, });
        res.status(204).json(updateUser)
    }
    catch (error) {
        console.log(error);
        res.send(503).json({error:error.message})
    }
})

module.exports = router;