<template>
  <el-container style="height: 100vh">
    <el-header style="background-color: #B3C0D1;">
      <div style="text-align: left; float: left; line-height: 60px; font-style: italic; font-weight: 400; font-size: 25px; letter-spacing: 0.478em;">
        <!-- <span>校友录系统</span> -->
        <el-link style="font-size:25px" href="/">校友录系统</el-link>
      </div>
    </el-header>
    <el-main style="padding: 0px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>修改信息</span>
        </div>
        <div>
          <el-form label-position="right" label-width="80px" :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="专业">
            <el-input v-model="form.major"></el-input>
          </el-form-item>
          <el-form-item label="学院">
            <el-input v-model="form.college"></el-input>
          </el-form-item>
          <el-form-item label="学校">
            <el-input v-model="form.university"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="e-mail">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="单位">
            <el-input v-model="form.company"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="QQ">
            <el-input v-model="form.qqnumber"></el-input>
          </el-form-item>
          </el-form>
        </div> 
        <el-button style="margin-left: 380px" @click="saveInfo" type="primary" round>保存信息</el-button>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        major: '',
        college: '',
        university: '',
        phone: '',
        email: '',
        company: '',
        address: '',
        qqnumber: '',
        url: ''
      }
    }
  },
  methods: {
    fetch() {
      this.$http.get(`regist/${localStorage.getItem('Info')}`).then( res => {
        this.form = res.data
      })
    },
    saveInfo() {
      this.$http.put(`regist/${localStorage.getItem('Info')}`, this.form).then( res => {
        if (res.status === 200) {
          this.$message({
            message: '修改成功!',
            type: 'success'
          });
          this.$router.push('/private')
        }
        else {
          console.log("修改失败!")
        }
      })
    }
  },
  created() {
    this.fetch()
  }
}

</script>


<style>
  .el-header {
    color: #333;
    line-height: 60px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 8px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 880px;
    margin: auto;
    margin-top: 10px;
  }
</style>