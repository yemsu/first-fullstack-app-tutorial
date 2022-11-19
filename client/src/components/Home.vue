<template>
  <ul>
    <li
      v-for="article in articles"
      :key="article._id"
    >
      <router-link :to="article._id">
        {{ article.content }}
        {{ article.createdAt }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      articles: [],
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