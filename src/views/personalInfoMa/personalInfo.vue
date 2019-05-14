<template>
  <div id="personal-info" style="margin-left: 50px">
    <h2 style="text-align: center">业主信息登记表</h2>
    <el-form ref="addInfo" :model="data" label-width="120px" :inline="true">
      <el-form-item label="业主ID" prop="roles">
        <el-input v-model="data.ownerId" style="width:200px" />
      </el-form-item>
      <el-form-item label="证件类型" prop="class">
        <el-select v-model="data.idtyType" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="证件号码">
        <el-input v-model="data.idtyNum" style="width:200px" />
      </el-form-item>
      <el-form-item label="业主姓名">
        <el-input v-model="data.ownerName" style="width:200px" />
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="data.sex" placeholder="请选择">
          <el-option
            v-for="item in sex"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="data.phone" style="width:200px" />
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input v-model="data.nativePlace" style="width:200px" />
      </el-form-item>
      <el-form-item label="民族">
        <el-input v-model="data.national" style="width:200px" />
      </el-form-item>
      <el-form-item label="紧急联系人">
        <el-input v-model="data.emergencyName" style="width:200px" />
      </el-form-item>
      <el-form-item label="紧急联系人电话">
        <el-input v-model="data.emergencyContact" style="width:200px" />
      </el-form-item>
      <el-form-item label="关系">
        <el-input v-model="data.emergencyRelationship" style="width:200px" />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="data.phone" style="width:200px" />
      </el-form-item>
      <el-form-item label="家庭成员">
        <el-input v-model="data.familyId" style="width:200px" />
      </el-form-item>
      <el-form-item label="一卡通号码">
        <el-input v-model="data.cardNum" style="width:200px" />
      </el-form-item>
      <el-form-item label="家庭成员数" >
      <el-input v-model="data.familyNum" style="width:200px" />
      </el-form-item>
      <el-form-item label="一卡通余额" >
      <el-input v-model="data.money" style="width:200px" />
      </el-form-item>
      <el-form-item label="学历">
        <el-select v-model="data.degree" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="政治面貌">
        <el-select v-model="data.politicalLandscape" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="楼层单元">
        <el-input v-model="data.building" style="width:200px" />
      </el-form-item>
      <el-form-item label="房间号码">
        <el-input v-model="data.homeNum" style="width:200px" />
      </el-form-item>
    </el-form>
    <div align="center">
      <el-button type="primary">保存</el-button>
      <el-button type="warning" @click="dialogFormVisible = true">修改登录密码</el-button>
    </div>
    <el-form :model="data" label-width="120px" :inline="true">
      <p>以下为非必填项</p>
      <el-form-item label="工作单位" prop="signName">
        <el-input v-model="data.familyMembersList[0].workPosition" style="width:200px" />
      </el-form-item>
      <el-form-item label="工作职务" prop="signName">
        <el-input v-model="data.familyMembersList[0].workName" style="width:200px" />
      </el-form-item>
      <el-form-item label="工作地址" prop="realName">
        <el-input v-model="data.familyMembersList[0].workPlace" style="width:200px" />
      </el-form-item>
      <el-form-item label="家庭成员姓名" prop="password">
        <el-input v-model="data.familyMembersList[0].memberName" style="width:200px" />
      </el-form-item>
      <el-form-item label="关系" prop="mobile">
        <el-input v-model="data.familyMembersList[0].relation" style="width:200px" />
      </el-form-item>
      <el-form-item label="联系电话" prop="mobile">
        <el-input v-model="data.familyMembersList[0].phone" style="width:200px" />
      </el-form-item>
      <el-form-item label="家庭成员姓名" prop="password">
        <el-input v-model="data.familyMembersList[0].memberName" style="width:200px" />
      </el-form-item>
      <el-form-item label="关系" prop="mobile">
        <el-input v-model="data.familyMembersList[0].relation" style="width:200px" />
      </el-form-item>
      <el-form-item label="联系电话" prop="mobile">
        <el-input v-model="data.familyMembersList[0].phone" style="width:200px" />
      </el-form-item>
    </el-form>
    <div align="center">
      <el-button type="primary">保存</el-button>
      <el-button type="warning">添加家庭成员</el-button>
    </div>
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
        <el-form-item label="请输入原始密码" prop="pass">
          <el-input type="password" v-model="ruleForm.originPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'PersonalInfo',
  filters: {
    sexFilter(sex) {
      if (sex === 0) return '男'
      else if (sex === 1) return '女'
      else return '其他'
    }
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        originPass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      dialogFormVisible: false,
      options: [{
        value: 1,
        label: '小学'
      }, {
        value: 2,
        label: '初中'
      }, {
        value: 3,
        label: '高中'
      }, {
        value: 4,
        label: '本科'
      }, {
        value: 5,
        label: '硕士'
      }, {
        value: 6,
        label: '博士'
      }, {
        value: 7,
        label: '博士后'
      }],
      options1: [{
        value: 0,
        label: '群众'
      }, {
        value: 1,
        label: '共青团员'
      }, {
        value: 2,
        label: '预备党员'
      }, {
        value: 3,
        label: '党员'
      }],
      options2: [{
        value: 1,
        label: '身份证'
      }, {
        value: 2,
        label: '军人'
      }, {
        value: 3,
        label: '港澳'
      }, {
        value: 4,
        label: '外籍'
      }],
      sex: [{
        value: 0,
        label: '男'
      }, {
        value: 1,
        label: '女'
      }],
      data: {
        ownerId: 12,
        idtyType: 1,
        idtyNum: 431127199705017900,
        ownerName: '贾海凌',
        sex: 1,
        nativePlace: '湖南永州',
        emergencyName: 'XXX',
        emergencyContact: '1234567890',
        emergencyRelationship: '父女',
        familyId: 6,
        cardNum: '2015190419',
        phone: '12345678890',
        degree: 4,
        politicalLandscape: 1,
        building: 17,
        homeNum: 1702,
        national: '中国大陆',
        familyNum: 6,
        money: 52.3,
        familyMembersList: [{
          id: '',
          identy: '',
          memberId: '',
          memberName: 'XXX',
          ownerId: '',
          pageNum: null,
          pageSize: null,
          phone: '13255447766',
          relation: '父女',
          workName: 'XXXXX',
          workPlace: 'XXXXX',
          workPosition: 'XXXXX'
        }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>

