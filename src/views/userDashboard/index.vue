<template>
  <div>
    <div>
      <span style="color: cornflowerblue;margin-right: 10px">当前正在举行《本年业主最关注的物业问题》投票调查</span>
      <el-button size="mini" type="primary" @click="vote">参与投票</el-button>
      <el-button size="mini" type="primary">查看结果</el-button>
    </div>
    <div :inline="true">
      <el-form ref="ruleForm" label-width="100px">
        <h3 align="center">物业通告</h3>
        <el-form-item style="color: #304156">
          <a>告业主通知书(关于遛狗宠物问题)</a>
          <span style="margin-left: 50px">2019-04-12</span>
        </el-form-item>
        <el-form-item style="color: #304156">
          <a>关于小区绿化改造通知</a>
          <span style="margin-left: 50px">2019-04-12</span>
        </el-form-item>
      </el-form>
      <el-form ref="ruleForm" label-width="100px">
        <h3 align="center">会议</h3>
        <el-form-item style="color: #304156">
          <a>关于召开业主大会的通知</a>
          <span style="margin-left: 50px">2019-04-12</span>
        </el-form-item>
        <el-form-item style="color: #304156">
          <a>教师公寓业主2019年大会公告</a>
          <span style="margin-left: 50px">2019-04-12</span>
        </el-form-item>
      </el-form>
      <el-form ref="ruleForm" label-width="100px">
        <h3 align="center">投票</h3>
        <el-form-item style="color: #304156">
          <router-link to="/vote/index">
            <span>本年业主最关注的物业问题</span>
            <span style="margin-left: 50px">2019-04-12</span>
          </router-link>
        </el-form-item>
        <el-form-item style="color: #304156">
          <a>关于物业费上涨的问题</a>
          <span style="margin-left: 50px">2019-04-12</span>
        </el-form-item>
      </el-form>
      <el-form ref="ruleForm" label-width="100px">
        <h3 align="center">缴费通知</h3>
        <el-form-item style="color: #304156">
          <a>4月份水费</a>
          <span style="margin-left: 50px">2019-04-12</span>
        </el-form-item>
        <el-form-item style="color: #304156">
          <a>4月份物业费</a>
          <span style="margin-left: 50px">2019-04-12</span>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData">
      <el-table-column prop="idNum" label="一卡通号码" width="120" />
      <el-table-column prop="idBalance" label="一卡通余额" width="120" />
      <el-table-column label="操作" width="">
      <template>
        <el-button size="mini" type="primary">查看明细</el-button>
      </template>
    </el-table-column>
      <el-table-column label="消费明细" width="">
        <template>
          <el-button size="mini" type="success">水费明细</el-button>
          <el-button size="mini" type="success" >电费明细</el-button>
          <el-button size="mini" type="success" >燃气费明细</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      tableData: [{
        idNum: 2015190419,
        idBalance: 52.3
      }]
    }
  },
  methods: {
    vote() {
      this.$router.push({ path: '/vote/index' })
    }
  }
}
</script>

<style scoped>

</style>
