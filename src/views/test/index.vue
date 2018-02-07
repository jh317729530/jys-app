<template>
  <div class="test-container">
      <el-col :span="11"><el-button type="primary" style="width:100%;" @click.native.prevent="test">测试</el-button></el-col>
  </div>
</template>

<script>
import axios from '../../api/common'
export default {
  name: 'test',
  methods: {
    test() {
      axios.get('/api/test/test')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.test {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

