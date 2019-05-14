<template>
  <div id="add-info" style="margin-left: 50px">
    <h2>投诉建议处理表</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="述求业主">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.tel" />
      </el-form-item>
      <el-form-item label="投诉建议">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item align="center">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Form1',
  data() {
    return {
      form: {
        name: '',
        tel: '',
        result: ''
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

