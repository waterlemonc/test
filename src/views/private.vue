<template>
  <el-container style="height: 100vh">
    <el-header style="background-color: #B3C0D1;">
      <div style="text-align: left; float: left; line-height: 60px; font-style: italic; font-weight: 400; font-size: 25px; letter-spacing: 0.478em;">
        <!-- <span>校友录系统</span> -->
        <el-link style="font-size:25px" href="/">校友录系统</el-link>
      </div>
    </el-header>
    <el-main style="padding: 0px">
      <el-container style="height: 90vh;">
        <el-aside style="width: 220px; background-color: rgb(238, 241, 246)">
          <el-menu router :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>用户个人中心</template>
                <el-menu-item index="/private">个人信息</el-menu-item>
                <el-menu-item index="/logmessage">日志管理</el-menu-item>
                <el-menu-item index="/messages">留言管理</el-menu-item>
                <el-menu-item index="/photos">相册管理</el-menu-item>
                <el-menu-item index="/browse">校友信息</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown @command="userNav">
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <span> {{ user }} </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="index">主页</el-dropdown-item>
                <el-dropdown-item command="exit">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-header>
          <el-main>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
              <span>基本信息</span>
              </div>
              <div class="head-image">
                <div class="block">
                    <el-avatar shape="square" :size="100" :src="url"></el-avatar>
                </div>
              </div>
              <div class="pre-message">
                <div>
                  <table>
                    <tr>
                      <td>姓名</td>
                      <td>{{ username }}</td>
                      <td width="50">专业</td>
                      <td>{{ major }}</td>
                    </tr>
                    <tr>
                      <td>学院</td>
                      <td>{{ college }}</td>
                      <td>学校</td>
                      <td>{{ university }}</td>
                    </tr>
                    <tr>
                      <td width="50">手机</td>
                      <td width="280">{{ phone }}</td>
                      <td>邮箱</td>
                      <td>{{ email }}</td>
                    </tr>
                    <tr>
                      <td>单位</td>
                      <td>{{ company }}</td>
                      <td>地址</td>
                      <td>{{ address }}</td>
                    </tr>
                    <tr>
                      <td>QQ</td>
                      <td>{{ qqnumber }}</td>
                    </tr>
                  </table>
                  <div style="margin-left: 200px; margin-top: 15px"><el-button type="primary" @click="changeInfo" round>修改信息</el-button></div>
                </div>
              </div>
            </el-card>
          </el-main>
        </el-container>
      </el-container>
    </el-main>
  </el-container>
</template>

<style>
  .el-header {
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
  .box-card {
    width: 85%;
    margin: auto;
  }
  .head-image {
    margin-left: 25px;
    margin-top: 10px;
    float: left;
  }
  .pre-message {
    float: left;
    margin-left: 25px;
    margin-top: 5px;
    margin-bottom: 30px;
  }
</style>
<script>
export default {
  data () {
    return {
      username: '',
      major: '',
      college: '',
      university: '',
      phone: '',
      email: '',
      company: '',
      address: '',
      qqnumber: '',
      url: '',
      user: localStorage.getItem('Info')
    }
  },
  methods: {
    fetch() {
      this.$http.get(`regist/${localStorage.getItem('Info')}`).then( res => {
        this.username = res.data['username'],
        this.major = res.data['major'],
        this.college = res.data['college'],
        this.university = res.data['university'],
        this.phone = res.data['phone'],
        this.email = res.data['email'],
        this.company = res.data['company'],
        this.address = res.data['address'],
        this.qqnumber = res.data['qqnumber'],
        this.url = res.data['url']
      })
    },
    changeInfo() {
      this.$router.push({ path: '/changeInfo' })
    },
    userNav(command) {
      // console.log(command)
      if (command == 'index'){
        this.$router.push({ path: '/' })
      }
      else{
        window.localStorage.clear()
        this.$router.push({ path: '/' })
      }
    }
  },
  created() {
    this.fetch()
  }
}

</script>
