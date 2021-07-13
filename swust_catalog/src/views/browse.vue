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
            <el-card class="box-card1">
              <div slot="header" class="clearfix">
                <span>校友信息</span>
              </div>
              <div>
                <el-input v-model="username" placeholder="请输入姓名" style="width:240px"></el-input>
                <el-button type="primary" @click="doFilter">搜索</el-button>
                <el-table
                  :data="userList"
                  style="width: 100%">
                  <el-table-column
                    label="姓名"
                    prop="username"
                    width="200">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <el-avatar shape="circle" :size="50" :src=scope.row.url></el-avatar>
                        <span style="padding-left:10px; font-size:18px">{{ scope.row.username }}</span>
                        <p>电话: {{ scope.row.phone }}</p>
                        <p>邮箱: {{ scope.row.email }}</p>
                        <p>公司: {{ scope.row.company }}</p>
                        <p>地址: {{ scope.row.address }}</p>
                        <p>QQ:{{ scope.row.qqnumber }}</p>
                        <div slot="reference" class="name-wrapper">
                          <el-tag size="medium">{{ scope.row.username }}</el-tag>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="电话" prop="phone"></el-table-column>
                  <el-table-column label="学院" prop="college"></el-table-column>
                </el-table>
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

  .box-card1 {
    width: 911.2px;
    min-width: 800px;
    margin: auto;
  }

  .el-aside {
    color: #333;
  }
  .box-card2 {
    width: 870px;
    margin-bottom: 20px;
    height: 150px;
  }
  .cls-msg {
    float: left;
    margin-top: 10px;
    margin-left: 80px;
  }
  .cls-msg span {
    display: block;
    height: 20px;
  }
</style>
<script>
export default {
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      userList: [],
      dialogVisible: false,
      user: localStorage.getItem('Info'),
      username:""
    }
  },
  methods: {
    fetch() {
      this.$http.get('regist').then( res=> {
      this.userList = res.data
      })
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
    },
    doFilter() {
      console.log(this.username)
      this.$http.post('search', {
        params: { 
        username: this.username
      }
      }).then( res=> {
        this.userList = res.data
      })
    }
  },
  created() {
    this.fetch()
  }
}
</script>
