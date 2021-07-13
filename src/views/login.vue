<template>
  <div>
    <el-form ref="loginForm" @submit.native.prevent="login" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录SWUST校友录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input type="text" id="code" v-model="form.code" style="width:155px"  placeholder="请输入您的验证码" />
        <div class="login-code" @click="refreshCode">
          <!--验证码组件-->
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
        <el-button type="primary" style="margin-left:50px;" @click="dirct">注册</el-button>
      </el-form-item>
      <el-link href="/repasswd">忘记密码？</el-link>
    </el-form>
  </div>
</template>

<script>
import SIdentify from '../components/sidentify'
export default {
  components: { SIdentify },
  data () {
    return {
      form: {
        username: '',
        password: '',
        code: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: '账号不可为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      identifyCodes: "1234567890",
      identifyCode: "",
    }
  },
  mounted() {
    this.identifyCode = "",
    this.makeCode(this.identifyCodes, 4)
  },
  // created () {
  //   this.refreshCode()
  // },
  methods: {
    login () {
      if (this.form.code != this.identifyCode){
        this.$message({
          message: "验证码错误",
          type: 'warning'
        })
      }
      else{
        // 为表单绑定验证功能
        this.$http.post('login', this.form).then(res => {
          if (res.data.status === '1') {
            this.$message({
              message: res.data.message,
              type: 'success'
            })
            this.$router.push({ path: '/private' })
            localStorage.setItem('Info',res.data['username'])
            window.sessionStorage.setItem('token',res.data.token)
            // console.log(res.data.token + " " + res.data.status)
          } else {
            this.$message.error(
              res.data.message
            )
          }
        })
      }
    },
    dirct () {
      this.$router.push({ path: '/regist' })
    },

    randomNum(min, max) {
       return Math.floor(Math.random() * (max - min) + min);
    },
        
    refreshCode() {
       this.identifyCode = "";
       this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
          ];
      }
      console.log(this.identifyCode);
    },
  }
}
</script>

<style>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 100px auto;
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
  .code{
      width:124px;
      height:31px;
      border:1px solid rgba(186,186,186,1) }
  .login-code{
       cursor: pointer;
  }
</style>
