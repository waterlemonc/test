import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue'),
    meta: { hidden: true,title:"首页"}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
    meta: { hidden: true,title:"用户登陆"}
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/regist.vue'),
    meta: { hidden: true,title:"用户注册"}
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin.vue'),
    meta: { hidden: true,title:"后台登录"}    
  },
  {
    path: '/private',
    name: 'Private',
    component: () => import('../views/private.vue'),
    meta: { hidden: true,title:"个人信息"}
  },
  {
    path: '/administrator',
    name: 'Administrator',
    component: () => import('../views/administrator.vue'),
    meta: { hidden: true,title:"后台管理界面"}
  },
  {
    path: '/logmessage',
    name: 'Logmessage',
    component: () => import('../views/logmessage.vue'),
    meta: { hidden: true,title:"用户日志"}
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import('../views/photos.vue'),
    meta: { hidden: true,title:"用户相册"}
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('../views/messages.vue'),
    meta: { hidden: true,title:"用户留言"}

  },
  {
    path: '/browse',
    name: 'Browse',
    component: () => import('../views/browse.vue'),
    meta: { hidden: true,title:"校友信息"}
  },
  {
    path: '/logmanage',
    name: 'Logmanage',
    component: () => import('../views/logmanage.vue'),
    meta: { hidden: true,title:"日志管理"}
  },
  {
    path: '/messagemanage',
    name: 'Messagemanage',
    component: () => import('../views/messagemanage.vue'),
    meta: { hidden: true,title:"留言管理"}
  },
  {
    path: '/newsmanage',
    name: 'Newsmanage',
    component: () => import('../views/newsmanage.vue'),
    meta: { hidden: true,title:"新闻管理"}
  },
  {
    path: '/changeInfo',
    name: 'ChangeInfo',
    component: () => import('../views/changeInfo.vue'),
    meta: { hidden: true,title:"用户信息修改"}
  },
  {
    path: '/upImg',
    name: 'UpImg',
    component: () => import('../views/upImg.vue'),
    meta: { hidden: true,title:"相片上传"}
  },
  {
    path: '/createNew',
    name: 'CreateNew',
    component: () => import('../views/createNew.vue'),
    meta: { hidden: true,title:"新闻创建"}
  },
  {
    path: '/repasswd',
    name: 'Repasswd',
    component: () => import('../views/repasswd.vue'),
    meta: { hidden: true,title:"忘记密码"}
  },
  {
    path: '/:id/cInfo',
    name: 'eidt_Info',
    component: () => import('../views/cInfo.vue'),
    meta: { hidden: true,title:"修改用户信息"}
  },
  {
    path: '/showNew/:id',
    name: 'ShowNew',
    component: () => import('../views/showNew.vue'),
    meta: { hidden: true, title:"新闻详情"}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/regist' || to.path === '/' || to.path == '/admin') {
    next()
  }
  else{
    let token = window.sessionStorage.getItem('token')
    if (token === null || token === ''){
      // alert('您还未登录!')
      next('/login')
    }
    else{
      next()
    }
  }
})
// 解决页面覆盖定向报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
