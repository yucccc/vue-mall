var express = require('express')
var router = express.Router()
var User = require('../models/user')
/* GET users listing. */
router.post('/login', function (req, res, next) {
  var params = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }
  User.findOne(params, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else if (doc) {
      res.json({
        status: '0',
        msg: '登陆成功',
        result: {
          userId: doc.userId,
          name: doc.name,
          avatar: doc.avatar
        }
      })
    } else {
      res.json({
        status: '1',
        msg: '账号或者密码错误',
        result: ''
      })
    }
  })
})

module.exports = router
