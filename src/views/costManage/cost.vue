<template>
  <div>
    <el-form :inline="true" :model="managerQueryVo">
      <el-form-item label="日期">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item label="缴费状态" prop="class">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请输入业主姓名/一卡通号码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="tableData">
      <el-table-column prop="ownerId" label="缴费类别" />
      <el-table-column prop="ownerName" label="缴费状态" />
      <el-table-column prop="sex" label="缴费方式" />
      <el-table-column prop="phone" label="缴费日期" />
      <el-table-column prop="building" label="欠费金额" />
      <el-table-column prop="tel" label="欠费天数" />
      <el-table-column label="操作" width="">
        <template>
          <el-button size="mini" type="primary" @click="dialogFormVisible = true">查看</el-button>
          <el-button size="mini" type="success" >缴费</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogFormVisible">
      <h2>收费项目明细表</h2>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="缴费类别">
          {{ form.name }}
        </el-form-item>
        <el-form-item label="缴费状态">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="单价">
          {{ form.price }}
        </el-form-item>
        <el-form-item label="单位">
          {{ form.delivery }}
        </el-form-item>
        <el-form-item label="周期">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="应缴金额">
          {{ form.resource }}
        </el-form-item>
        <el-form-item label="缴费时间">
          {{ form.time }}
        </el-form-item>
        <el-form-item label="欠费金额">
          {{ form.noCost }}
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Cost',
  data() {
    return {
      value1: '',
      dialogFormVisible: false,
      options: [{
        value: 1,
        label: '已缴'
      }, {
        value: 2,
        label: '未缴'
      }, {
        value: 3,
        label: '欠缴'
      }],
      options1: [{
        value: 1,
        label: '月'
      }, {
        value: 2,
        label: '季度'
      }, {
        value: 3,
        label: '半年'
      }, {
        value: 4,
        label: '年'
      }],
      tableData: [{
        ownerId: '物业费',
        ownerName: '已缴',
        sex: '支付宝',
        phone: '2019-03-12 3:34',
        building: '0',
        homeNum: '0'
      }],
      form: {
        name: '物业费',
        region: 1,
        price: 0.7,
        date1: '',
        date2: '',
        type: 1,
        delivery: '元/度/月',
        time: '2019-03-18 15:26',
        resource: '23.56',
        desc: '',
        noCost: '10'
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
