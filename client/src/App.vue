<template>
  <div id="app">
    <ul>
      <li
        v-for="article in articles"
        :key="article.id"
      >
        {{ article.content }}
        {{ article.createdAt }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      articles: null,
      newContent: ''
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
