<script setup>
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts.js'

const route = useRoute()

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

const post = posts.value.find(post => post.id == route.params.id)
// const title = post.title

const commentCreatingDialog = ref(null)
function createComment() {
  commentCreatingDialog.value.open('post', post.id)
}
</script>


<template>
  Post {{ post.title }}

  <ul>
    <li v-for="comment in post.comments">
      {{ comment }}
    </li>
  </ul>

  <UButton label="Create comment" @click="createComment()" />

  <CommentCreatingDialog ref="commentCreatingDialog" />
</template>
