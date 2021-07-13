<template>
  <div>
    <el-form ref="registForm" @submit.native.prevent="regist" :model="form" :rules="rules" label-width="80px" class="regist-box">
      <h3 class="regist-title">SWUST校友录注册</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item label="确认" prop="cpassword">
        <el-input type="password" placeholder="请确认密码" v-model="form.cpassword"/>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input type="text" placeholder="请输入手机号" v-model="form.phone"/>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input type="text" placeholder="请输入邮箱" v-model="form.email"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">注册</el-button>
        <el-button type="primary" style="margin-left:50px;" @click="dirct">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      }else if (value !== this.form.password) {
         callback(new Error('两次输入密码不一致!'))
      } else {
       	 callback()
      }
    }
    var checkEmail = (rule, value, callback) => {
      const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ( regEmail.test(value)) {
        return callback();
      }
      callback(new Error("请输入合法的邮箱地址!"))
    }
    var checkPhone = (rule, value, callback) => {
      const regPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regPhone.test(value)) {
        return callback()
      }
      callback(new Error("请输入合法电话!"))
    }
    return {
      form: {
        username: '',
        password: '',
        cpassword: '',
        phone: '',
        email: ''
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: '账号不可为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ],
        cpassword: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: checkPhone, trigger: 'blur' }
        ],
        email: [
          { required: true, validator: checkEmail, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    regist () {
      // 为表单绑定验证功能
      this.$http.post('regist', this.form).then(res => {
        if (res.data.status === '0') {
          this.$message.error(res.data.message)
        } else {
          this.$message({
            message: '恭喜你，添加成功!',
            type: 'success'
          })
        }
      })
    },
    dirct () {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
.regist-box {
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 100px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.regist-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
