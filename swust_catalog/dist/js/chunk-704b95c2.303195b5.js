(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-704b95c2"],{"0522":function(t,e,n){"use strict";n("0995")},"0995":function(t,e,n){},e362:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{height:"100vh"}},[n("el-header",{staticStyle:{"background-color":"#B3C0D1"}},[n("div",{staticStyle:{"text-align":"left",float:"left","line-height":"60px","font-style":"italic","font-weight":"400","font-size":"25px","letter-spacing":"0.478em"}},[n("span",[t._v("校友录系统")])])]),n("el-main",{staticStyle:{padding:"0px"}},[n("el-container",{staticStyle:{height:"90vh"}},[n("el-aside",{staticStyle:{width:"220px","background-color":"rgb(238, 241, 246)"}},[n("el-menu",{attrs:{router:"","default-openeds":["1"]}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),t._v("用户个人中心")]),n("el-menu-item",{attrs:{index:"/private"}},[t._v("个人信息")]),n("el-menu-item",{attrs:{index:"/logmessage"}},[t._v("日志管理")]),n("el-menu-item",{attrs:{index:"/messages"}},[t._v("留言管理")]),n("el-menu-item",{attrs:{index:"/photos"}},[t._v("相册管理")]),n("el-menu-item",{attrs:{index:"/browse"}},[t._v("校友信息")])],2)],1)],1),n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[n("el-dropdown",[n("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("查看")]),n("el-dropdown-item",[t._v("新增")]),n("el-dropdown-item",[t._v("删除")])],1)],1),n("span",[t._v("王小虎")])],1),n("el-main",[n("el-card",{staticClass:"box-card1"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("校友信息")])]),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.userList}},[n("el-table-column",{attrs:{label:"姓名",prop:"username",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("el-avatar",{attrs:{shape:"circle",size:50,src:e.row.url}}),n("span",{staticStyle:{"padding-left":"10px","font-size":"18px"}},[t._v(t._s(e.row.username))]),n("p",[t._v("电话: "+t._s(e.row.phone))]),n("p",[t._v("邮箱: "+t._s(e.row.email))]),n("p",[t._v("公司:"+t._s(e.row.company))]),n("p",[t._v("地址:"+t._s(e.row.address))]),n("p",[t._v("QQ:"+t._s(e.row.qqnumber))]),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.username))])],1)],1)]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.showInfo()}}},[t._v("查看详情")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.Words(e.$index,e.row)}}},[t._v("留言")])]}}])})],1)],1)])],1)],1)],1)],1)],1)},a=[],i={data:function(){return{url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",userList:[],dialogVisible:!1}},methods:{fetch:function(){var t=this;this.$http.get("regist").then((function(e){t.userList=e.data}))},showInfo:function(){},Words:function(){}},created:function(){this.fetch()}},r=i,l=(n("0522"),n("2877")),o=Object(l["a"])(r,s,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-704b95c2.303195b5.js.map