<script setup>
import { storeToRefs } from 'pinia'
import { usePostsStore } from '~/stores/posts.js'


const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

</script>

<template>
  <h1 class="m-5">Posts</h1>

  <ul>
    <li v-for="post in posts" :key="post.id" class="m-3">
      <NuxtLink :to="`/posts/${post.id}`">
        <UCard>
          <template #header>
            {{ post.title }}
          </template>

          <div class="flex">
            <img :src="`/pics/${post.image}`" :alt="post.image" class="w-16 m-2" />
            {{ post.shortDesc }}
          </div>

        </UCard>
      </NuxtLink>
    </li>
  </ul>
</template>
