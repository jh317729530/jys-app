import store from '@/store'

export const hasPermission = (params) => {
  const totalPermissions = store.getters.getPermissions
  const paramsData = params
  console.log(params)

  if ((typeof paramsData) === 'object') {
    for (var item of paramsData) {
      if (totalPermissions.includes(item)) {
        return true
      }
    }
  } else {
    return totalPermissions.includes(paramsData)
  }
}
