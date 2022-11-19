const mongoose = require('mongoose')
const schema = require('./schema')

const db = mongoose.connection
const model = (() => {
  db.on('error', console.error)
  db.on('open', () => {
    console.log('connecting mongodb')
  })

  //  Atlas mongodb cluster와 연결
  mongoose.connect(`mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@fullstackapptutorial.qfosij8.mongodb.net/?retryWrites=true&w=majority`)

  // 스키마 연결
  const model = {}
  for (let key in schema) {
    model[key] = mongoose.model(key, schema[key])
  }

  return model
})()

module.exports = model