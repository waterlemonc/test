<template>
  <div>
    <el-form ref="repasswd" @submit.native.prevent="changepw" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">重置密码</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="新密码" prop="newpassword">
        <el-input type="password" placeholder="新密码" v-model="form.newpassword"/>
      </el-form-item>
      <el-form-item label="确认" prop="newrepassword">
        <el-input type="password" placeholder="再次输入" v-model="form.newrepassword"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" style="margin-left:50px">确认修改</el-button>
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
        newpassword: '',
        newrepassword: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: '账号不可为空', trigger: 'blur' }
        ],
        newpassword: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ],
        newrepassword: [
          { required: true, message: '密码不可为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    dirct () {
      this.$router.push({ path: '/login' })
    },
    changepw () {
      this.$http.post('changepw',this.form).then(res => {
          if (res.data.status == 1) {
            this.$message({
              message: '密码修改成功!',
              type: 'success'
          });
        }
      })
    }
  }
}
</script>
<style scoped>
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
</style>