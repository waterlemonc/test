<template>
<el-card style="margin: auto; margin-top: 150px; width:500px">
    <el-upload
        class="avatar-uploader"
        :action="$http.defaults.baseURL + '/upload'"
        :show-file-list="false"
        :data="author"
        :on-success="afterupload"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-card style="float:right; width:350px; margin-top:-85px">
        <span>
            上传图片请直接点击图标，仅支持上传jpg格式的图片！
        </span>
    </el-card>
    <el-button type="primary" style="margin-top:10px; margin-left: 200px" @click="dirct" plain>返回</el-button>
</el-card>
</template>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
  }
  .avatar {
    width: 78px;
    height: 78px;
    display: block;
  }
</style>

<script>
  export default {
    data() {
      return {
        
        imageUrl: '',
        author: {username:localStorage.getItem('Info')}
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(res.src);
      },
      afterupload(res) {
        console.log(res.src)
        if (res.status == 1) {
            console.log("shang")
        }
        this.imageUrl = res.src
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt20M = file.size / 1024 / 1024 < 20;
        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt20M) {
          this.$message.error('上传头像图片大小不能超过 20MB!');
        }
        return isJPG && isLt20M;
      },
      dirct () {
      this.$router.push({ path: '/photos' })
    }
    }
  }
</script>