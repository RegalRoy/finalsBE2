const mongoose = require('mongoose');
const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req,res)=>{
    Book.find().then(r=>res.json(r)).catch(e=>res.json(e))
})

router.route('/getbook/:id').get((req,res)=>{
    Book.findById(req.params.id).then(r=>res.json(r)).catch(e=>res.json(e))
})

router.route('/add').post((req,res)=>{
    const book = new Book(req.body)
    book.save().then(r=>{res.json(r)}).catch(e=>res.json(e))
})

router.route('/del/:id').delete((req,res)=>{
    Book.findByIdAndDelete(req.params.id).then(r=>res.json(r)).catch(e=>res.json(e))
})

router.route('/update/:id').put((req,res)=>{
    Book.findByIdAndUpdate(req.params.id, req.body).then(r=>res.json(r)).catch(e=>res.json(e))
})



module.exports = router