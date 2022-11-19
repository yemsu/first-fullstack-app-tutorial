const mongoose = require("mongoose")

const Author = new mongoose.Schema({
  nickname: { type: String, default: '', required: true, unique: true }, 
  hashedPassword: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true }
})

module.exports = Author