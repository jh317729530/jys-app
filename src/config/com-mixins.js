import { hasPermission } from './utils'

export default {
  data() {},
  methods: {
    handleHasPermissions(resource) {
      return hasPermission(resource)
    }
  }
}
