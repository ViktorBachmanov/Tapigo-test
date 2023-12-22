<script setup>
const props = defineProps({
  id: Number,
  text: String,
  comments: Array,
  commentTo: String,
})

const commentCreatingDialog = ref(null)
function createComment() {
  commentCreatingDialog.value.open("comment", props.id)
}
</script>


<template>
  <UCard class="m-2">
    <template #header>
      Comment to {{ commentTo }}
    </template>

    {{ text }}

    <template #footer>
      <div v-if="comments">
        <TheComment v-for="comment in comments" :key="comment.id" :id="comment.id" :text="comment.text"
          commentTo="comment" />

        <UButton label="Add comment" @click="createComment()" class="m-2" />
      </div>
    </template>
  </UCard>

  <CommentCreatingDialog ref="commentCreatingDialog" />
</template>