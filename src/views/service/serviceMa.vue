<template>
  <div id="car-container" style="margin:20px;">
    <el-form ref="form" :inline="true" :model="managerQueryVo">
      <el-form-item label="述求事项">
        <el-input placeholder="请输入述求事项" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="medium" @click="form2">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="tableData">
      <el-table-column prop="ownerId" label="房产位置"  />
      <el-table-column prop="ownerName" label="述求事项" />
      <el-table-column prop="sex" label="述求时间" />
      <el-table-column prop="phone" label="状态" />
      <el-table-column prop="building" label="审批人"  />
      <el-table-column prop="tel" label="审批时间" />
      <el-table-column prop="result" label="审批意见" />
    </el-table>
    <el-pagination
      :current-page="managerQueryVo.pageObj.currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="managerQueryVo.pageObj.size"
      :total="managerQueryVo.pageObj.totalElements"
      style="margin-top:20px;"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-dialog :visible.sync="FormVisible">
      <form2 ref="form2" @close="handleFormClose()" />
    </el-dialog>
  </div>
</template>

<script>
import form2 from './components/form2'
export default {
  name: 'ServiceMa',
  components: {
    form2
  },
  data() {
    return {
      loading: false,
      FormVisible: false,
      isEdit: 0,
      value: '',
      value1: '',
      tableData: [{
        ownerId: '16栋A单元1602',
        ownerName: '防盗门需要更换',
        sex: '2019-04-12',
        phone: '待处理',
        building: '物业管理员',
        tel: '2019-04-13 12:03',
        result: '同意办理'
      }],
      managerQueryVo: {
        pageObj: {
          pageNum: 1,
          pageSize: 10,
          ownerInfo: {}
        }
      }
    }
  },
  mounted() {
    // this.queryPage()
  },
  methods: {
    handleSizeChange: function(val) {
      this.managerQueryVo.pageObj.size = val
      // this.queryPage()
    },
    handleCurrentChange: function(val) {
      this.managerQueryVo.pageObj.currentPage = val
      // this.queryPage()
    },
    form2() {
      this.FormVisible = true
    }
  }
}
</script>

<style scoped>

</style>

