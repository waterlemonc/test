(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52d40233"],{"310e":function(t,e,a){},"57b8":function(t,e,a){"use strict";a("310e")},bb5f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticStyle:{height:"100vh"}},[a("el-header",{staticStyle:{"background-color":"#B3C0D1"}},[a("div",{staticStyle:{"text-align":"left",float:"left","line-height":"60px","font-style":"italic","font-weight":"400","font-size":"25px","letter-spacing":"0.478em"}},[a("a",{attrs:{href:"/"}},[t._v("校友录系统")])])]),a("el-main",{staticStyle:{padding:"0px"}},[a("el-container",{staticStyle:{height:"90vh"}},[a("el-aside",{staticStyle:{width:"220px","background-color":"rgb(238, 241, 246)"}},[a("el-menu",{attrs:{router:"","default-openeds":["1"]}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),t._v("用户个人中心")]),a("el-menu-item",{attrs:{index:"/private"}},[t._v("个人信息")]),a("el-menu-item",{attrs:{index:"/logmessage"}},[t._v("日志管理")]),a("el-menu-item",{attrs:{index:"/messages"}},[t._v("留言管理")]),a("el-menu-item",{attrs:{index:"/photos"}},[t._v("相册管理")]),a("el-menu-item",{attrs:{index:"/browse"}},[t._v("校友信息")])],2)],1)],1),a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[t._v("查看")]),a("el-dropdown-item",[t._v("新增")]),a("el-dropdown-item",[t._v("删除")])],1)],1),a("span",[t._v(" "+t._s(t.username)+" ")])],1),a("el-main",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("留言管理")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.timestamp))])]}}])}),a("el-table-column",{attrs:{label:"内容",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.content))])],1)]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.row._id)}}},[t._v("删除")])]}}])})],1)],1)])],1)],1)],1)],1)],1)},s=[],l={data:function(){return{tableData:[],username:localStorage.getItem("Info")}},methods:{handleDelete:function(t){var e=this;this.$http.delete("messages/".concat(t)).then((function(t){1===t.data.status&&(e.$message({message:"删除成功!",type:"success"}),e.fetch())}))},fetch:function(){var t=this;this.$http.get("messages/".concat(localStorage.getItem("Info"))).then((function(e){t.tableData=e.data}))}},created:function(){this.fetch()}},i=l,o=(a("57b8"),a("2877")),r=Object(o["a"])(i,n,s,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-52d40233.809855b8.js.map