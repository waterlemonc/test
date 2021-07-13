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
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>{{ name }},退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span> {{ name }} </span>
          </el-header>

            <el-main>
              <el-form @submit.native.prevent="saveNews" ref="form" :model="news" label-width="80px">
                <el-form-item label="新闻标题">
                    <el-input v-model="news.title"></el-input>
                </el-form-item>
                <el-form-item label="新闻内容">
                    <el-input type="textarea" v-model="news.content"></el-input>
                </el-form-item>
                <el-form-item label="发布人">
                    <el-input :disabled="true" v-model="news.author"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">发布</el-button>
                    <el-button @click="cancle">取消</el-button>
                </el-form-item>
              </el-form>
            </el-main>
        </el-container>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
        news: {
            title: '',
            author: localStorage.getItem('Info'),
            content: ''
        },
        name: localStorage.getItem('Info')
    }
  },
  methods: {
    cancle() {
        this.$router.push({ path: '/newsmanage' })
    },
    saveNews() {
        this.$http.post('news', this.news).then(res => {
        if (res.status == 1){
          console.log("新闻发布成功!")
          this.cancle()
        }
      })
    }
  }
}
</script>

<style>
  .el-header {
    color: #333;
    line-height: 60px;
  }

  .box-card {
    width: 85%;
    margin: auto;
  }

  .el-aside {
    color: #333;
  }
  
  .bottom {
    margin-bottom: 10px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

  .el-col-8 {
    width: 10%;
  }
</style>
