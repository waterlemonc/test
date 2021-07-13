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
                <span>相册</span>
                <el-button style="float: right; padding: 3px 0" @click="upImg" type="text">上传</el-button>
              </div>
              <div>
                <el-row>
                  <el-col :span="8" v-for="(o, index) in imgs" :key="index" :offset="index > 0 ? 4 : 0">
                    <el-card style="width: 170px; height:190px">
                      <div style="height: 100px">
                        <el-image :src="o.src" :preview-src-list="imgs" class="image"></el-image>
                      </div>
                      <div style="padding: 14px;">
                        {{ o.timestamp }}
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
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
<script>
export default {
  data () {
    return {
      user: localStorage.getItem('Info'),
      imgs: [],
      imgData: {
        accept: 'image/gif, image/jpeg, image/png, image/jpg'
      },
      click: "a"
    }
  },
  methods: {
    upImg (){
      this.$router.push({ path: '/upImg' })
    },
    fetch() {
      this.$http.get(`upload/${localStorage.getItem('Info')}`).then( res => {
        this.imgs = res.data
        // console.log(res.data[0].src)
      })
    },
    show(index) {
      // console.log(this.imgs[$index].src)
      // console.log()
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
