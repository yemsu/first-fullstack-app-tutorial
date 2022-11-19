<template>
  <article class="card">
    {{ article._id }}
    {{ article.content }}
    {{ article.createdAt }}
  </article>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      article: {
        _id: null,
        content: null,
        createdAr: null
      }
    }
  },
  created() {
    this.findOneArticle()
  },
  methods: {
    async findOneArticle() {
      const articleId = this.$route.params.id
      const { data } = await axios.get(`http://localhost:3009/read/${articleId}`)
      this.article = {
        ...data
      }
    },
  }
}
</script>

<style>
</style>