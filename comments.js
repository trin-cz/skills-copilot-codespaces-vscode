// create web server
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

// GET comments
router.get('/comments', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) { return next(err); }
    res.json(comments);
  } );
});