<template>
    <el-card class="box-card">
    <div slot="header" class="clearfix">
        <h3><span>{{ title }}</span></h3>
        <br>
        <span>发布人:{{ author }}</span>
    </div>
    <div class="text item">
        {{ content }}
    </div>
    <span>发布时间:{{ time }}</span>
    <br>
    <el-button style="margin-left: 150px" type="primary" @click="back" round>返回主页</el-button>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      title: "",
      time: "",
      author: "",
      content: ""
    }
  },
  methods: {
    fetch() {
      this.$http.get(`showNew/${this.$route.params.id}`).then( res => {
        this.title = res.data.title
        this.time = res.data.timestamp
        this.author = res.data.author
        this.content = res.data.content
        console.log(res.data)
      })
    },
    back() {
      this.$router.push({path: '/'})
    }
  },
  created() {
      this.fetch()
  }
}
</script>


<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
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
    width: 480px;
    margin: auto;
    margin-top: 100px;
  }
</style>