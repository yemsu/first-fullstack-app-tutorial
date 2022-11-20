<template>
  <div>
    <section>
      <h2>글 목록</h2>
      <ul>
        <li
          v-for="article in articles"
          :key="article._id"
        >
          <router-link :to="article._id">
            {{ article.content }}
            {{ article.createdAt }}
          </router-link>
          <button @click="deleteArticle(article._id)">삭제</button>
        </li>
      </ul>
    </section>
    <hr />
    <section>
      <label for="newArticle"><h2>새 게시글 작성</h2></label>
      <textarea id="newArticle" cols="30" rows="10" v-model="newArticle" />
      <button @click="createArticle">작성 완료</button>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      articles: [],
      newArticle: ''
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    async getArticles() {
      const { data } = await axios.get('http://localhost:3009/read')
      this.articles = data
    },
    async createArticle() {
      if(this.newArticle.length === 0) {
        alert('글을 작성해 주세요')
        return
      }
      const { data, status } = await axios.post('http://localhost:3009/create', {
        content: this.newArticle
      })
      if(status ===  200) {
        alert('등록되었습니다!')
        this.articles.push(data)
        this.newArticle = '' 
        return
      }
      alert('등록에 실패했습니다. status code: ', status)
    },
    async deleteArticle(articleId) {
      const confirmDelete = confirm('삭제하시겠습니까?')
      if(!confirmDelete) return
      const { data, status } = await axios.delete(`http://localhost:3009/delete/${articleId}`)
      
      if(status ===  200) {
        alert('삭제되었습니다!', )
        console.log(data)
        this.articles = this.articles.filter(article => article._id !== data._id)
        return
      }
      alert('등록에 실패했습니다. status code: ', status)
      console.log(articleId)
    }
  }
}
</script>

<style>
</style>