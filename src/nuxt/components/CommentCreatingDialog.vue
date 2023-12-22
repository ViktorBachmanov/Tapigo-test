<script setup>
import { usePostsStore } from '~/stores/posts.js'


const postsStore = usePostsStore()

const isOpen = ref(false)

let parentType, parentId

function open(inParentType, inParentId) {
  parentType = inParentType
  parentId = inParentId

  isOpen.value = true
}

function close() {
  isOpen.value = false
  comment.value = ''
}

defineExpose({
  open,
})

const comment = ref('')

function store() {
  postsStore.storeComment(parentType, parentId, comment.value)
  close()
}
</script>

<template>
  <UModal v-model="isOpen">
    <div class="flex justify-between">
      <header class="m-2">Comment</header>
      <UButton icon="i-heroicons-x-mark" size="sm" color="primary" square variant="solid" class="self-start"
        @click="close" />
    </div>

    <div class="p-4">
      <UTextarea v-model="comment" />
    </div>

    <UButton class="self-start" @click="store">Create</UButton>
  </UModal>
</template>

