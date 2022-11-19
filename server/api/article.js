const model = require('../mongoose/model')

// CREATE
const articleCreate = async (req, res) => {
  const { content } = req.body
  const newArticle = await model.Article({ content })
  const saveRequest = await newArticle.save()
  console.log(saveRequest)
  res.send(saveRequest)
}

// READ
const articleRead = async (req, res) => {
  const articles = await model.Article.find({})
  res.send(articles)
}

// UPDATE
const articleUpdate = async (req, res) => {
  const { id, content } = req.body
  const updatedArticle = await model.Article.findByIdAndUpdate(id, { content }, {
    returnDocument: 'after' // 변경된 값 리턴하도록 옵션 설정.
  })
  res.send(updatedArticle) 
}

// DELETE
const articleDelete = async (req, res) => {
  const { id } = req.params
  const deleteArticle = await model.Article.findByIdAndDelete(id)
  res.send(deleteArticle)
}

module.exports = {
  articleCreate,
  articleRead,
  articleUpdate,
  articleDelete
}