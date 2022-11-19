<template>
  <ul>
    <li
      v-for="article in articles"
      :key="article.id"
    >
      {{ article.content }}
      {{ article.createdAt }}
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
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
</style>