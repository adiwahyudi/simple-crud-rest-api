const express = require('express');
const { restart } = require('nodemon');
const router = express();
const { Users } = require('../models/schema');


// All users
router.get('/', async (req,res) => {
    try{
        const usr = await Users.find();
        res.json(usr);
    } catch (err) {
        res.send({message:err});
    }
})


// Add Users
router.post('/', async (req,res) => {
    const usr = new Users({
        nama: req.body.nama,
        asal: req.body.asal,
        umur: req.body.umur,
        email: req.body.email
    });
    try {
        const savedUsers = await usr.save();
        res.json(savedUsers);
    } catch (err) {
        res.json( { message: err });
    }
})

// Find Specific User
router.get('/:id',async (req,res) => {
    try {
        const usr = await Users.findById(req.params.id);
        res.json(usr);
    } catch(err) {
        res.json(err);
    }
})

// Update Users
router.patch('/:id', async (req,res) => {

    const { nama, asal, umur, email } = req.body;

    try {
        const usr = await Users.findById(req.params.id)
        if(nama) usr.nama = nama;
        if(asal) usr.asal = asal;
        if(umur) usr.umur = umur;
        if(email) usr.email = email;
        const saved = await usr.save();
        res.json(saved)
    } catch(err) {
        res.json(err);
    }
})

//Delete Users
router.delete('/:id', async (req, res) => {
    try{
        const usr = await Users.findByIdAndRemove(req.params.id);
        res.status(200).json({ code:200, message: 'User delete Success',
            deleteUser:usr });
    } catch(err) {
        res.json(err);
    }
});

module.exports = router;