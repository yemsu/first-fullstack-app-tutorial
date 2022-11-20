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
      const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/read/${articleId}`)
      this.article = {
        ...data
      }
    },
  }
}
</script>

<style>
</style>