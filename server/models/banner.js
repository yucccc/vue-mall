var mongoose = require('mongoose')
// 表模型
var Schema = mongoose.Schema
var produtSchema = new Schema({
  'alt': String,
  'href': String,
  'index': String,
  'src': String
})
module.exports = mongoose.model('Banner', produtSchema)
