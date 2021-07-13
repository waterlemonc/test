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
                <span>日志列表</span>
              </div>
              <div>
                <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    label="日期"
                    width="180">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.timestamp }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="标题"
                    width="300">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>标题: {{ scope.row.title }}</p>
                        <p>内容: {{ scope.row.content }}</p>
                        <div slot="reference" class="name-wrapper">
                          <el-tag size="medium">{{ scope.row.title }}</el-tag>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="发布人"
                    width="180">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.author }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
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
      tableData: [],
      user: localStorage.getItem('Info'),
    }
  },
  methods:{
    fetch() {
      this.$http.get('logs').then(res => {
        this.tableData = res.data
      })
    },
    handleDelete(id) {
      this.$http.delete(`logs/${id}`).then( res => {
        if (res.data.status === 1){
            this.$message({
            message: '删除成功!',
            type: 'success'
          });
          this.fetch()
        }
      })
    },
    adminNav(command) {
      window.localStorage.clear()
      this.$router.push({ path: '/' })
    }
  },
  created() {
    this.fetch()
  }
}
</script>