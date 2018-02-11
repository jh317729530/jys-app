<template>
  <div class="app-container">
      <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="Test">
              <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="onSubmit">create</el-button>
              <el-button>cancel</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import axios from '../../api/common'
export default {
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit() {
      axios.get('/api/user/test')
    }
  }
}
</script>
