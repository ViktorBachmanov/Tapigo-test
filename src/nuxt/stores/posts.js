export const usePostsStore = defineStore('posts', () => {
  const posts = ref([
    {
      id: 1,
      title: 'Post-1',
    },
    {
      id: 2,
      title: 'Post-2',
    },
  ])

  return { posts }
})