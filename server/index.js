const express = require('express')
// const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
let expressJWT = require('express-jwt')
const md5 = require('blueimp-md5')
const app = express()
app.use(require('cors')())

app.use(express.json())
// app.use(cookieParser())

app.use('/images', express.static(__dirname + '/../public/images'))

const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/userLogin', {
  useNewUrlParser: true,
  useFindAndModify: true,
  
  useCreateIndex: true,
  // 弃用警告，没有这个，启动服务端时会有版本警告
  useUnifiedTopology: true
})

const Login = mongoose.model('Login', new mongoose.Schema({
  username: {type: String},
  password: {type: String},
  phone: {type: String},
  email: {type: String},
  major: {type: String},
  college: {type: String},
  university: {type: String},
  company: {type: String},
  address: {type: String},
  qqnumber: {type: String},
  url: {type: String}
}))

const Admin = mongoose.model('Admin', new mongoose.Schema({
  username: {type: String},
  password: {type: String}
}))

const Photos = mongoose.model('Photos', new mongoose.Schema({
  filename: {type: String},
  author: {type: String},
  src: {type: String},
  timestamp: {type: String}
}))

const Logs = mongoose.model('Logs', new mongoose.Schema({
  title: {type: String},
  content: {type: String},
  author: {type: String},
  timestamp: {type: String}
}))

const Msgs = mongoose.model('Msgs', new mongoose.Schema({
  content: {type: String},
  author: {type: String},
  timestamp: {type: String}
}))

const News = mongoose.model('News', new mongoose.Schema({
  title: {type: String},
  content: {type: String},
  author: {type: String},
  timestamp: {type: String}
}))

const multer = require('multer')
const upload = multer({dest: __dirname + '/../public/images'})
const moment =require('moment')

// 写留言
app.post('/api/messages', async (req, res) => {
  // console.log(req.body)
  moment.locale('Zh-cn')
  _now = moment()
  const messages = await Msgs.create({
    "timestamp": _now.format('YYYY-MM-DD'),
    "content": req.body.content,
    "author": req.body.author
  })
  res.send({
    status: 1
  })
})

// 新闻发布-管理员
app.post('/api/news', async(req, res) => {
  const mit = await Admin.find({"username": req.body.author})
  if (mit.length == 1){
    moment.locale('Zh-cn')
    _now = moment()
    const news = await News.create({
      "timestamp": _now.format('YYYY-MM-DD'),
      "content": req.body.content,
      "author": req.body.author,
      "title": req.body.title
    })
    res.send({
      status: 1
    })
  }
  else {
    res.send({
      "message": "您没有发布新闻的权限!",
      stat1: 0
    })
  }
})

// 写日志
app.post('/api/logs', async(req, res) => {
  moment.locale('Zh-cn')
  _now = moment()
  const logs = await Logs.create({
    "timestamp": _now.format('YYYY-MM-DD'),
    "content": req.body.content,
    "author": req.body.author,
    "title": req.body.title
  })
  res.send({
    status: 1
  })
})

// 显示所有留言
app.get('/api/messages', async (req, res) => {
  const messages = await Msgs.find()
  res.send(messages)
})

// 显示所有日志
app.get('/api/logs', async (req, res) => {
  const logs = await Logs.find()
  res.send(logs)
})

// 显示所有新闻
app.get('/api/news', async (req, res) => {
  const news = await News.find()
  res.send(news)
})

app.get('/api/showNew/:id', async (req, res) => {
  const news = await News.findById(req.params.id)
  console.log(news)
  res.send(news)
})

//显示登录用户留言
app.get('/api/messages/:username', async(req, res) => {
  const messages = await Msgs.find({"author":req.params.username})
  res.send(messages)
})

//显示当前用户日志
app.get('/api/logs/:username', async(req, res) => {
  const logs = await Logs.find({"author":req.params.username})
  res.send(logs)
})

//删除留言
app.delete('/api/messages/:id', async(req, res) => {
  await Msgs.findByIdAndDelete(req.params.id)
  res.send({
    status: 1
  })
})
 
// 删除新闻-管理员
app.delete('/api/news/:id&:user', async(req, res) => {
  const mit = await Admin.find({"username":req.params.user})
  if(mit.length == 1){
    // console.log(req.params)
    await News.findByIdAndDelete(req.params.id)
    res.send({
      status: 1
    })
  }
  else{
    res.send({
      status:0,
      message:"您没有删除权限!"
    })
  }
})

//修改密码
app.post('/api/changepw', async(req, res) => {
  var cuname = await Login.find({"username": req.body.username})
  console.log(cuname.length)
  if (cuname.length == 1 ){
    // console.log(req.body['newpassword'])
    cuname[0].password = req.body['newpassword']
    const cs = await Login.findByIdAndUpdate(cuname[0]._id, cuname[0])
    console.log(cuname[0])
  }
})

//删除日志
app.delete('/api/logs/:id', async(req, res) => {
  await Logs.findByIdAndDelete(req.params.id)
  res.send({
    status: 1
  })
})

app.delete('/api/regist/:id', async(req, res) => {
  await Login.findByIdAndDelete(req.params.id)
  res.send({
    status: 1
  })
})

// 图片上传
app.post('/api/upload', upload.single('file'), async (req,res) => {
  const file = req.file
  file.src = `http://192.168.137.1:3002/images/${file.filename}`
  file.status = 1
  res.send(file)

  moment.locale('Zh-cn')
  _now = moment()
  const photo = await Photos.create({
    "filename": file.filename,
    "author": req.body.username,
    "src": file.src,
    "timestamp": _now.format('YYYY-MM-DD')
  })
  console.log(photo)
})



app.get('/api/upload/:username', async(req, res) => {
  const photoList = await Photos.find({
    "author": req.params.username
  })
  res.send(photoList)
})

// 用户登陆
app.post('/api/login', async (req, res) => {
  const user = await Login.find({
    "username": req.body.username,
    "password": md5(md5(req.body.password))
  })
  let userInfo = {name: req.body.username} // token信息
  let secretKey = "jwt" // 加密密钥
  let token = jwt.sign(userInfo, secretKey, {
    expiresIn: 60 * 60 * 1 // 一小时过期
  })
  if (user.length !=0) {
    // res.cookie('username','cookies',{maxAge:24*60*60*1000})
    res.send({
      'status': '1',
      'message': '登录成功!',
      'username': req.body.username,
      'token': token
    })
  }else {
    res.send({
      'status': '0',
      'message': '登录失败!'
    })
  }
})

//edit
app.get('/api/chg/:id', async (req, res) => {
  const userInfo = await Login.findById(req.params.id)
  res.send(userInfo)
});

app.put('/api/chg/:id', async(req, res) => {
  const userInfo = await Login.findByIdAndUpdate(req.params.id, req.body)
  res.send(userInfo)
})

app.post('/api/admin', async (req, res) => {
  const admin = await Admin.find({
    "username": req.body.username,
    "password": req.body.password
  })
  if (admin.length != 0) {
    res.send({
      'status': '1',
      'message': '登录成功',
      'username': req.body.username
    })
  } else {
    res.send({
      'status': '0',
      'message': '登录失败!'
    })
  }
})

// // 管理员新闻中心数据获取
// app.get()

// // 用户日志发布
// app.post()

app.post('/api/regist', async (req, res) => {
  if (req.body.username == '' || req.body.password == '' || req.body.phone == '') {
    res.send({
      'status': '0',
      'message': '用户/密码/手机号不能为空!'
    })
  }else{
    const user = await Login.find({
      "username": req.body.username,
      // "password": req.body.password,
      // 'phone': req.body.phone,
      // 'email': req.body.email
    })
    if (user.length == 0){
      const registuser = await Login.create({
        "username": req.body.username,
        "password": md5(md5(req.body.password)),
        "phone": req.body.phone,
        "university": 'null',
        "college": 'null',
        "major": 'null',
        "email": req.body.email,
        "company": 'null',
        "address": 'null',
        "qqnumber": 'null',
        "url": 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      })
      // console.log(registuser)
      res.send({
        'status': '1',
        'message': '注册成功!',
      })
    }else{
      res.send({
        'status': '0',
        'message': '用户名已存在!'
      })
    }
  }
})

app.get('/api/regist', async(req, res) => {
  const userlist = await Login.find()
  res.send(userlist)
});

app.post('/api/search', async(req, res) => {
  // console.log(req.body)
  // res.send(req.params)
  // console.log(req.body.params.id)
  const userlist = await Login.find({username: req.body.params.username})
  res.send(userlist)
})

app.get('/api/regist/:username', async(req, res) => {
  const userInfo = await Login.find({
    "username": req.params.username
  })
  res.send({
    "username": userInfo[0].username,
    "major": userInfo[0].major,
    "college": userInfo[0].college,
    "phone": userInfo[0].phone,
    "email": userInfo[0].email,
    "university": userInfo[0].university,
    "company": userInfo[0].company,
    "address": userInfo[0].address,
    "qqnumber": userInfo[0].qqnumber,
    "url": userInfo[0].url
  })
})

//个人信息修改
app.put('/api/regist/:username', async(req, res) => {
  const userID = await Login.find({"username":req.params.username})
  const userInfo = await Login.findByIdAndUpdate(userID[0]._id, req.body)
  res.send(userInfo)
})

app.listen(3002, () => {
  console.log('http://192.168.137.1:3002')
})
