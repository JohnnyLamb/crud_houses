var express = require('express');
var router = express.Router();
var House = require('../models/houses');


// GET all houses
router.get('/houses', function(req, res, next) {
  House.find(function(err,data){
    if(err){
      res.json({
        'message':err
      });
    } else{
      res.json(data);
    }
  });
});
// GET SINGLE HOUSE
router.get('/house/:id', function(req, res, next) {
  House.findById(function(err,data){
    if(err){
      res.json({
        'message':err
      });
    } else{
      res.json(data);
    }
  });
});

// POST House
router.post('/houses', function(req, res, next) {
  newHouse = new House({
    location: req.body.location,
    price: req.body.price,
    garage: req.body.garage
  });
  newHouse.save(function(err,data){
    if(err){
      res.json({'message':err});
    }
  });
});

// PUT houses
router.put('/house/:id', function(req, res, next) {
  var update = {
    location: req.body.location,
    price: req.body.price,
    garage: req.body.garage
  };
  House.findByIdAndUpdata(req.params.id,update,function(err,data){
    if(err){
      res.json({
        'message':err
      });
    } else{
      res.json(data);
    }
  });
});
// DELETE house
router.delete('/house/:id', function(req, res, next) {
  House.findByIdAndRemove(function(err,data){
    if(err){
      res.json({
        'message':err
      });
    } else{
      res.json(data);
    }
  });
});



module.exports = router;
