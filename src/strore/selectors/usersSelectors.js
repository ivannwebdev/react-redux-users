const users = state => state.users.usersList
const username = id => state => state.users.usersList?.find(user => user.id === id)?.name
const isLoading = state => state.users.isLoading
const error = state => state.users.error

export const usersSelectors = {
  users,
  isLoading,
  error,
  username
}
