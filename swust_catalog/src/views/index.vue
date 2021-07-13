<template>
  <el-container>
    <el-header style="background-color: rgb(179, 192, 209)">
      <div style="text-align: left; float: left; line-height: 60px; font-style: italic; font-weight: 400; font-size: 25px; letter-spacing: 0.478em;">
        <!-- <span>校友录系统</span> -->
        <el-link style="font-size:25px" href="/">校友录系统</el-link>
      </div>
      <div style="text-align: right; line-height: 60px; float: right; font-size: 14px;">
        <ul v-if="!showname">
          <el-link href="login">登录</el-link>
          <span>-</span>
          <el-link href="regist">注册</el-link>
          <span>-</span>
          <el-link href="admin">后台登陆</el-link>
        </ul>      
        <el-dropdown @command="dropNav">
          <span class="el-dropdown-link">{{ user }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="">{{ nav }}</el-dropdown-item>
            <el-dropdown-item command="clear">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-main>
      <div style="width: 1309px; margin: auto;">
        <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane name="first" label="首页">
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item style="height: 300px; width: 645px" v-for="url in urls" :key="url">
              <el-image :src="url" :fit="'cover'"></el-image>
            </el-carousel-item>
          </el-carousel>
          <div style="float: left; width: 1275px;"><el-divider></el-divider></div>
          <el-card class="box-scard" style="margin-left:10px; width: 1250px">
            <div slot="header" class="clearfix">
              <span>校友留言</span>
              <el-table
                :data="tableData"
                stripe
                style="width: 1250px">
                <el-table-column
                  prop="timestamp"
                  label="日期"
                  width="740px">
                </el-table-column>
                <el-table-column
                  prop="content"
                  label="内容"
                  width="470px">
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane name="second" label="新闻中心">
          <el-table
            :data="newsList"
            style="width: 100%">
            <el-table-column
              label="日期"
              width="380">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.timestamp }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="标题"
              width="490">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>标题: {{ scope.row.title }}</p>
                  <p>内容: {{ scope.row.content }}</p>
                  <p>发布人: {{ scope.row.author }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.title }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="showNew(scope.row._id)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane name="third" label="校友留言">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="timestamp"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="content"
              label="内容"
              width="680">
            </el-table-column>
            <el-table-column
              prop="author"
              label="留言人">
            </el-table-column>
          </el-table>
          <el-button type="text" @click="dialogFormVisible = true" style="margin-top: 10px" round>
            添加留言
          </el-button>
        </el-tab-pane>
        <el-tab-pane name="fourth" label="校友日志">
          <div>
            <el-table
              :data="logList"
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
                width="500">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>标题: {{ scope.row.title }}</p>
                    <p>内容: {{ scope.row.content }}</p>
                    <p>发布人: {{ scope.row.author }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.title }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column prop="author" label="发布人">
              </el-table-column>
            </el-table>
            <el-button type="text" @click="dialogFormVisible_log = true" style="margin-top: 10px" round>
            写日志
          </el-button>
          </div>
        </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>
    <el-dialog title="添加留言" :visible.sync="dialogFormVisible">
      <el-form @submit.native.prevent="upMsg" ref="form" :model="form">
        <el-form-item label="留言内容" :label-width="formLabelWidth">
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="留言人" :label-width="formLabelWidth">
          <el-input v-model="form.author" :disabled="true" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left:485px" @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" native-type="submit">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="写日志" :visible.sync="dialogFormVisible_log">
      <el-form @submit.native.prevent="upLog" ref="form" :model="form_logs">
        <el-form-item label="日志标题" :label-width="formLabelWidth">
          <el-input v-model="form_logs.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日志内容" :label-width="formLabelWidth">
          <el-input v-model="form_logs.content" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="发表人" :label-width="formLabelWidth">
          <el-input v-model="form_logs.author" :disabled="true" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left:485px" @click="dialogFormVisible_log = false">取 消</el-button>
          <el-button type="primary" native-type="submit">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-container>
</template>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    /* text-align: center; */
    height: 10vh;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 90vh;
  }

  /* body > .el-container {
    margin-bottom: 40px;
  } */
  body >.el-container {
    height: 100vh;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-row {
    margin-top: 20px;
  }
  .el-col {
    border-radius: 4px;
  }

  .box-mcard {
    width: 50px;
    height: 50px;
    font-size: 13px;
  }
  .box-bcard {
    width: 341px;
    height: 50px;
  }

  .box-scard {
    font-size: 14px;
    width: 416px;
    text-align: left;
    float: left;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>

<script>
export default {
  data () {
    return {
      urls: [
        require('../../static/image/1.jpg'),
        require('../../static/image/2.jpg'),
        require('../../static/image/3.jpg'),
        require('../../static/image/4.jpg'),
        require('../../static/image/5.jpg'),
        require('../../static/image/6.jpg')
      ],
      activeName: 'first',
      dialogFormVisible: false,
      dialogFormVisible_log:false,
      form: {
        content: '',
        author: localStorage.getItem('Info')
      },
      form_logs: {
        title: '',
        content: '',
        author: localStorage.getItem('Info')
      },
      formLabelWidth: '120px',
      tableData:[],
      logList:[],
      user: localStorage.getItem('Info'),
      showname: false,
      newsList: [],
      nav: "个人中心"
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(this.activeName)
    },
    dropNav(command){
      // this.$router.push({path: command})
      if (command == 'clear') {
        window.localStorage.clear()
        location.reload()
      }else {
        command = localStorage.getItem('Info')
        if (command == 'admin'){
          this.$router.push({path: '/administrator'})
        }
        else {
          this.$router.push({path: '/private'})
        }
      }
    },
    upMsg() {
      this.$http.post('messages', this.form).then(res => {
        if (res.status == 200){
          // console.log("留言成功!")
          alert("留言成功!")
          this.dialogFormVisible = false
          location.reload()
        }
      })
    },
    upLog() {
      this.$http.post('logs', this.form_logs).then(res => {
        if (res.status == 200){
          // console.log(res.status)
          alert("写入日志成功!")
          this.dialogFormVisible_log = false
          location.reload()
        }
      })
    },
    fetch() {
      this.$http.get('messages').then( res => {
        this.tableData = res.data
        if (this.user){
          this.showname = true
          if (this.user === 'admin'){
            this.nav = "后台管理"
          }
        }else{
          this.showname = false
        }
        // console.log(res.data[0].src)
      })
    },
    fetch_logs() {
      this.$http.get('logs').then(res => {
        this.logList = res.data
      })
    },
    fetch_news() {
      this.$http.get('news').then(res => {
        this.newsList = res.data
        // console.log(this.newsList)
      })
    },
    showNew(id) {
      this.$router.push(`/showNew/${id}`)
    }
  },
  created() {
    this.fetch()
    this.fetch_logs()
    this.fetch_news()
  }
}
</script>
