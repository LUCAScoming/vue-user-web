<template>
  <div id="car-container" style="margin:20px;">
    <el-form :inline="true" :model="managerQueryVo">
      <el-form-item label="投诉建议">
        <el-input placeholder="请输入投诉建议" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" size="medium" @click="form1">我要建议</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="tableData">
      <el-table-column prop="suggestionId" label="编号"></el-table-column>
      <el-table-column prop="ownerId" label="述求事项" />
      <el-table-column prop="ownerName" label="述求时间" />
      <el-table-column prop="sex" label="状态" />
      <el-table-column prop="phone" label="受理人" />
      <el-table-column prop="building" label="受理时间" />
      <el-table-column prop="tel" label="受理结果" />
    </el-table>
    <el-pagination
      :current-page="managerQueryVo.pageObj.currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="managerQueryVo.pageObj.size"
      :total="managerQueryVo.pageObj.totalElements"
      style="margin-top:20px;"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
    <el-dialog :visible.sync="FormVisible">
      <form1 ref="form1" @close="handleFormClose()"/>
    </el-dialog>
  </div>
</template>

<script>
import form1 from './form1'
export default {
  name: 'Complain',
  components: {
    form1
  },
  data() {
    return {
      loading: false,
      isEdit: 0,
      value: '',
      value1: '',
      tableData: [{
        suggestionId:2019041202 ,
        ownerId: '咱们小区物业费偏贵...',
        ownerName: '2019-04-12',
        sex: '待处理',
        phone: '物业管理员',
        building: '2019-04-12 12:09',
        tel: '感谢您的建议，我们会在会议上提出'
      }],
      managerQueryVo: {
        pageObj: {
          pageNum: 1,
          pageSize: 10,
          ownerInfo: { }
        }
      },
      options: [{
        value: '选项1',
        label: '处理完毕'
      }, {
        value: '选项2',
        label: '处理中'
      }, {
        value: '选项3',
        label: '未处理'
      }],
      FormVisible: false
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
    form1() {
      this.FormVisible = true
    },
    handleFormClose() {
      this.FormVisible = false
      // this.queryPage()
    }
  }
}
</script>

<style scoped>

</style>

