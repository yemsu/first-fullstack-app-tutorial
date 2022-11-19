const mongoose = require("mongoose")

const Article = new mongoose.Schema({
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }, //author.js 참조. 이런식으로 계층탐색 가능
  content: { type: String, default: '', required: true }, // 게시글 본문
  createdAt: { type: Date, default: Date.now, required: true }
})

module.exports = Article