<script setup>
const props = defineProps({
  id: Number,
  text: String,
  comments: Array,
})

const commentCreatingDialog = ref(null)
function createComment() {
  commentCreatingDialog.value.open("comment", props.id)
}
</script>


<template>
  <UCard>
    <template #header>
      Comment
    </template>

    {{ text }}

    <template #footer>
      <div v-if="comments">
        <TheComment v-for="comment in comments" :key="comment.id" :id="comment.id" :text="comment.text" />

        <UButton label="Add comment" @click="createComment()" />
      </div>
    </template>
  </UCard>

  <CommentCreatingDialog ref="commentCreatingDialog" />
</template>