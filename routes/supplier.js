//import { model } from 'mongoose';
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Supplier = require('../models/Supplier.js');

/* GET ALL SUPPLIERS */
router.get('/', function (req, res, next) {
    Supplier.find(function (err, items) {
        if (err) return next(err);
        res.json(items);
    })
})

/* GET SINGLE SUPPLIER BY ID */
router.get('/:id', function(req, res, next) {
    Supplier.findById(req.params.id, function (err, item) {
      if (err) return next(err);
      res.json(item);
    });
  });
  
  /* SAVE SUPPLIER */
  router.post('/', function(req, res, next) {
    Supplier.create(req.body, function (err, item) {
      if (err) return next(err);
      res.json(item);
    });
  });
  
  /* UPDATE SUPPLIER */
  router.put('/:id', function(req, res, next) {
    Supplier.findByIdAndUpdate(req.params.id, req.body, function (err, item) {
      if (err) return next(err);
      res.json(item);
    });
  });
  
  /* DELETE SUPPLIER */
  router.delete('/:id', function(req, res, next) {
    Supplier.findByIdAndRemove(req.params.id, req.body, function (err, item) {
      if (err) return next(err);
      res.json(item);
    });
  });

module.exports = router;