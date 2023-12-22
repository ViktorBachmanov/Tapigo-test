<script setup>
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts.js'


const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

</script>

<template>
  <h3>Hello, Tapigo!</h3>

  <ul>
    <li v-for="post in posts" :key="post.id">
      <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
    </li>
  </ul>
</template>