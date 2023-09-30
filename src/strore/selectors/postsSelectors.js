const posts = id => state => state.posts[id]?.userPosts
const isLoading = id => state => state.posts[id]?.isLoading
const error = id => state => state.posts[id]?.error

export const postsSelectors = {
	posts,
	isLoading,
	error
}
