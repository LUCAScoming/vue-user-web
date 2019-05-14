<template>
  <div id="add-info" style="margin-left: 50px">
    <h2>服务申请处理表</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="述求业主">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.tel" />
      </el-form-item>
      <el-form-item label="房产位置">
        <el-input v-model="form.position" />
      </el-form-item>
      <el-form-item label="申请内容">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Form2',
  data() {
    return {
      form: {
        name: '',
        tel: '',
        result: '',
        people: '',
        position: '',
        desc: ''
      },
      value: '选项1'
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

