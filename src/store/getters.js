const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  getUserInfoed: state => state.user.getUserInfoed,
  getPermissions: state => state.permission.permissions
}
export default getters
