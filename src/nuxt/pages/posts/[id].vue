<script setup>
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts.js'

const route = useRoute()

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

const title = posts.value.find(post => post.id == route.params.id)?.title

</script>


<template>
  Post {{ title }}
</template>
