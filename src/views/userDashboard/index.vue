<template>
  <div>
    <div>
      <span style="color: cornflowerblue;margin-right: 10px">当前正在举行《本年业主最关注的物业问题》投票调查</span>
      <el-button size="mini" type="primary" @click="vote">参与投票</el-button>
      <el-button size="mini" type="primary">查看结果</el-button>
    </div>

    <div style="margin-top: 50px; margin-left: 10px;margin-right: 10px">
      <div>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="align-content: center ; font-weight: bold">物业通告</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item">
                  <a>告业主通知书(关于遛狗宠物问题)</a>
                  <span style="margin-left: 50px">2019-04-12</span>
                </div>
                <div class="text item">
                  <a>关于小区绿化改造通知</a>
                  <span style="margin-left: 50px">2019-04-12</span>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="align-content: center ; font-weight: bold">会议通知</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item">
                  <a>关于召开业主大会的通知</a>
                  <span style="margin-left: 50px">2019-04-12</span>
                </div>
                <div class="text item">
                  <a>教师公寓业主2019年大会公告</a>
                  <span style="margin-left: 50px">2019-04-12</span>
                </div>
              </el-card>
            </div>
          </el-col>

        </el-row>
      </div>
      <div style="margin-top: 50px;">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="align-content: center ; font-weight: bold">投票</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item">
                  <a>本年业主最关注的物业问题</a>
                  <span style="margin-left: 50px">2019-04-12</span>
                </div>
                <div class="text item">
                  <a>关于物业费上涨的问题</a>
                  <span style="margin-left: 50px">2019-04-12</span>
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="align-content: center ; font-weight: bold">缴费通知</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item">
                  <a>4月份水费</a>
                  <span style="margin-left: 50px">2019-04-12</span>
                </div>
                <div class="text item">
                  <a>4月份物业费</a>
                  <span style="margin-left: 50px">2019-04-12</span>
                </div>
              </el-card>
            </div>
          </el-col>

        </el-row>
      </div>
    </div>


<div style="margin-top: 10px;margin-left: 10px">
  <el-table :data="tableData">
    <el-table-column prop="idNum" label="一卡通号码" width="120"/>
    <el-table-column prop="idBalance" label="一卡通余额" width="120"/>
    <el-table-column label="操作" width="">
      <template>
        <el-button size="mini" type="primary">查看明细</el-button>
      </template>
    </el-table-column>
    <el-table-column label="消费明细" width="">
      <template>
        <el-button size="mini" type="success">水费明细</el-button>
        <el-button size="mini" type="success">电费明细</el-button>
        <el-button size="mini" type="success">燃气费明细</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>


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


  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
