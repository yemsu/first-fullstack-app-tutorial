const express = require('express')
const cors = require('cors')
const { Article } = require('./api')
const app = express()
const POST = 3009

app.use(cors())
app.use(express.json()) // body parser 를 구현할 수 있다. req.body 접근 가능하게 됨.
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send("full stack app is running")
})

app.post('/create', Article.articleCreate)
app.get('/read', Article.articleRead)
app.get('/read/:id', Article.articleFindOne)
app.patch('/update', Article.articleUpdate)
app.delete('/delete/:id', Article.articleDelete)

app.listen(POST, "localhost", () => {
  console.log(`App listening at http://localhost:${POST}`)
})

//  req.body - post에서 들어온 페이로드를 받을 수 있다.