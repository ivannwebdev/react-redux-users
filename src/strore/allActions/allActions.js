import { postsActions } from '../slices/posts'
import { themeActions } from '../slices/theme'
import { usersActions } from '../slices/users'

export const allActions = {
  ...postsActions,
  ...themeActions,
  ...usersActions
}
