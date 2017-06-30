/**
 * Created by yucccc on 2017/6/29.
 */
var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Stores = require('../models/goods')
mongoose.connect('mongodb://127.0.0.1:27017/jd-test')

mongoose.connection.on('connected', function () {
  console.log('成功')
})
router.get('/', function (req, res, next) {
  Stores.find({}, function (err, doc) {
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
          list: doc
        }
      })
    }
  })
})
module.exports = router

