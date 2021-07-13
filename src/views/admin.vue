<template>
  <div>
    <el-form ref="loginForm" @submit.native.prevent="login" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">后台登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="管理员账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="管理员密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" style="margin-left:70px">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: '账号不可为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 为表单绑定验证功能
      this.$http.post('admin', this.form).then(res => {
        if (res.data.status === '1') {
          this.$message({
            message: res.data.message,
            type: 'success'
          })
          this.$router.push({ path: '/administrator' })
        } else {
          this.$message.error(
            res.data.message
          )
        }
        localStorage.setItem('Info',res.data['username'])
      })
    }
  }
}
</script>

<style>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }
  .r_but{
    margin-left: 10px;
  }
</style>
