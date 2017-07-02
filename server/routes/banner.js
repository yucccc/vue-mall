// 轮播图接口
var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Banner = require('../models/banner')
mongoose.connect('mongodb://127.0.0.1:27017/mymall')

router.get('/', function (req, res, next) {
  Banner.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          data: doc
        }
      })
    }
  })
})
module.exports = router

