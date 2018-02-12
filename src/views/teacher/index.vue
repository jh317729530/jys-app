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
      <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" >查询</el-button>
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
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
        :page-sizes="[10,20,30]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teacherList',
  data() {
    return {
      teacherData: [{
        workNumber: '13456',
        name: '甘俊辉',
        age: 22,
        sex: 1
      },
      {
        workNumber: '13153',
        name: '甘俊',
        age: 22,
        sex: 2
      }],

      total: 20,
      listQuery: {
        pageNo: 1,
        pageSize: 10
      }
    }
  },

  methods: {
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
      console.log('每页显示记录数改变' + val)
    },

    handleCurrentChange(val) {
      console.log('处理当前页跳转' + val)
    }
  }
}
</script>

