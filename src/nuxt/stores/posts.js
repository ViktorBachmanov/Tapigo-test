export const usePostsStore = defineStore('posts', () => {
  const posts = ref([
    {
      id: 1,
      title: 'Post-1',
      shortDesc: 'Puanson stock',
      fullDesc: 'Puanson before machining',
      image: '/puanson.jpg',
      comments: [],
      date: '22.12.2023',
    },
    {
      id: 2,
      title: 'Post-2',
      shortDesc: 'Puanson first step',
      fullDesc: 'Puanson first step of machining',
      image: '/puanson1.jpg',
      comments: [],
      date: '22.12.2023',
    },
  ])

  const commentId = ref(0)

  function storeComment(parentType, parentId, text) {
    const newComment = { 
      id: ++commentId.value,
      parentType,
      parentId,
      text,
    }

    switch (parentType) {
      case 'post':
        const parentPost = posts.value.find(post => post.id === parentId)
        parentPost.comments.push({ ...newComment, comments: [] })
        break;
      case 'comment':
        let parentComment 
        for (let i = 0; i < posts.value.length; i++) {
          parentComment = posts.value[i].comments.find(comment => comment.id === parentId)
          if (parentComment) {
            break
          }
        }
        parentComment.comments.push(newComment)
        break;
    }
  }

  return { posts, storeComment }
})