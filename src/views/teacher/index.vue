<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input style="width: 200px;" class="filter-item" placeholder="输入教师名字查询">
      </el-input>
      <el-select clearable style="width: 90px" class="filter-item" >
        <el-option >
        </el-option>
      </el-select>
      <el-select clearable class="filter-item" style="width: 130px">
        <el-option >
        </el-option>
      </el-select>
      <el-select style="width: 140px" class="filter-item">
        <el-option >
        </el-option>
      </el-select>
      <el-button class="filter-item" v-waves type="primary" icon="el-icon-search" >查询</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit">新增</el-button>
    </div>

    <el-table :data="teacherData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="workNumber" label="工号" align="center" width="65" ></el-table-column>
        <el-table-column prop="name" label="姓名" align="center" width="65" ></el-table-column>
        <el-table-column prop="age" label="年龄" align="center" width="65" ></el-table-column>
        <el-table-column prop="sex" label="性别" align="center" width="65" :formatter="sexFormatter"></el-table-column>
        <el-table-column align="center" label="操作" width="230" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" >编辑</el-button>
            <el-button size="mini" type="success" >查看</el-button>
            <el-button size="mini" type="danger" >删除</el-button>
          </template>
        </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination 
        background 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
        :current-page.sync="currentPage"
        :page-sizes="[10,20,30]" 
        :page-size="pageSize" 
        layout="total, sizes, prev, pager, next, jumper" 
        :total="pageTotal"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import tableMixins from '@/config/mixins/table'
import waves from '@/directive/waves'
import { teacherList } from '@/service'
export default {
  name: 'teacherList',
  directives: {
    waves
  },
  mixins: [tableMixins],
  data() {
    return {
      teacherData: [],
      query: {
        name: ''
      }
    }
  },
  mounted() {
    const self = this
    console.log(self.pageTotal)
    self.getData()
  },
  methods: {
    getData() {
      const self = this
      const paramsObj = {
        pageNo: self.currentPage,
        pageSize: self.pageSize,
        name: self.query.name
      }
      console.log('尝试获取数据')
      teacherList(paramsObj).then(res => {
        console.log(res)
        if (res.status === 'true') {
          self.pageTotal = res.info.total
          self.teacherData = res.info.result
        }
      })
    },

    sexFormatter: function(row, column) {
      if (row.sex) {
        if (row.sex === 1) {
          return '男'
        } else {
          return '女'
        }
      }
    },

    handleSizeChange(val) {
      if (this.pageSize === val) {
        return
      }
      this.pageSize = val
      this.getData()
    },

    handleCurrentChange(val) {
      if (this.pageNp === val) {
        return
      }
      this.pageNo = val
      this.getData()
    }
  }
}
</script>

