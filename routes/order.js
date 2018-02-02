const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/Order.js');

/* GET ALL ORDERS */
router.get('/', function (req, res, next) {
    Order.find(function (err, items) {
        if (err) return next(err);
        res.json(items);
    })
})

/* GET SINGLE ORDER BY ID */
router.get('/:id', function(req, res, next) {
    Order.findById(req.params.id, function (err, item) {
      if (err) return next(err);
      res.json(item);
    });
  });
  
  /* SAVE ORDER */
  router.post('/', function(req, res, next) {
    Order.create(req.body, function (err, item) {
      if (err) return next(err);
      res.json(item);
    });
  });
  
  /* UPDATE ORDER */
  router.put('/:id', function(req, res, next) {
    Order.findByIdAndUpdate(req.params.id, req.body, function (err, item) {
      if (err) return next(err);
      res.json(item);
    });
  });
  
  /* DELETE ORDER */
  router.delete('/:id', function(req, res, next) {
    Order.findByIdAndRemove(req.params.id, req.body, function (err, item) {
      if (err) return next(err);
      res.json(item);
    });
  });

module.exports = router;