<script setup>
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts.js'

const route = useRoute()

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

const post = posts.value.find(post => post.id == route.params.id)

const commentCreatingDialog = ref(null)
function createComment() {
  commentCreatingDialog.value.open('post', post.id)
}
</script>


<template>
  <UCard>
    <template #header>
      <div class="flex justify-between">
        <span>{{ post.title }}</span> {{ post.date }}
      </div>
    </template>

    <div class="flex">
      <img :src="`/pics/${post.image}`" :alt="post.image" class="w-24 m-2" />
      {{ post.fullDesc }}
    </div>

    <template #footer>
      <ul v-if="post.comments.length">
        <li v-for="comment in post.comments" :key="comment.id">
          <TheComment :id="comment.id" :text="comment.text" :comments="comment.comments" />
        </li>
      </ul>
      <UButton label="Add comment" @click="createComment()" />
    </template>
  </UCard>

  <CommentCreatingDialog ref="commentCreatingDialog" />
</template>
