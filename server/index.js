const express = require("express")
const app = express()
const POST = 3009

app.unsubscribe(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send("Success")
})

app.listen(POST, "localhost", () => {
  console.log(`App listening at http://localhost:${POST}`)
})

//  req.body - post에서 들어온 페이로드를 받을 수 있다.