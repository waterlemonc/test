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
          <el-menu router :default-openeds="['1','2']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>用户信息管理</template>
            <el-menu-item index="/administrator">用户列表</el-menu-item>
            <!-- <el-menu-item index="1-2">用户信息查询</el-menu-item> -->
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>系统信息管理</template>
            <el-menu-item index="/newsmanage">新闻管理</el-menu-item>
            <!-- <el-menu-item index="2-2">公告</el-menu-item> -->
            <el-menu-item index="/messagemanage">留言管理</el-menu-item>
            <el-menu-item index="/logmanage">日志管理</el-menu-item>
            <!-- <el-menu-item index="2-6">用户信息修改</el-menu-item> -->
        </el-submenu>
      </el-menu>
        </el-aside>
        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown @command="adminNav">
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <span> {{ user }} </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="exit">{{ user }},退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-header>
          <el-main>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>用户列表</span>
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
                    width="500">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>电话: {{ scope.row.phone }}</p>
                        <p>邮箱: {{ scope.row.email }}</p>
                        <div slot="reference" class="name-wrapper">
                          <el-tag size="medium">{{ scope.row.username }}</el-tag>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="handleEdit(scope.row._id)">编辑</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row._id)">删除</el-button>
                    </template>
                  </el-table-column>
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

  .el-card {
    width: 85%;
    margin: auto;
  }

  .el-aside {
    color: #333;
  }
</style>
<script>
export default {
  data () {
    return {
      user: localStorage.getItem('Info'),
      userList: [],
      username:""
    }
  },
  methods: {
    fetch(){
      this.$http.get('regist').then( res => {
      this.userList = res.data
      })
    },
    handleDelete(id) {
      this.$http.delete(`regist/${id}`).then( res => {
        if (res.data.status === 1){
            this.$message({
            message: '删除成功!',
            type: 'success'
          });
          this.fetch()
        }
      })
    },
    handleEdit(id) {
      this.$router.push(`/${id}/cInfo`)
    },
    adminNav(command) {
      window.localStorage.clear()
      this.$router.push({ path: '/' })
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