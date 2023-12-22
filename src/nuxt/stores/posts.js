export const usePostsStore = defineStore('posts', () => {
  const posts = ref([
    {
      id: 1,
      title: 'Post-1',
      comments: [],
    },
    {
      id: 2,
      title: 'Post-2',
      comments: [],
    },
  ])

  function storeComment(parentType, parentId, comment) {
    switch (parentType) {
      case 'post':
        const post = posts.value.find(post => post.id === parentId)
        post.comments.push(comment)
        break;
      case 'comment':
        break;
    }

  }

  return { posts, storeComment }
})