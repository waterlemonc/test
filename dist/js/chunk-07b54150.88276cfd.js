(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07b54150"],{"060c":function(t,e,a){t.exports=a.p+"img/3.8ee985e3.jpg"},"0852":function(t,e,a){t.exports=a.p+"img/1.cdd34041.jpg"},"1e4b":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",[a("div",{staticStyle:{"text-align":"left",float:"left","line-height":"60px","font-style":"italic","font-weight":"400","font-size":"25px","letter-spacing":"0.478em"}},[a("span",[t._v("校友录系统")])]),a("div",{staticStyle:{"text-align":"right","line-height":"60px",float:"right","font-size":"14px"}},[a("el-link",{attrs:{href:"login"}},[t._v("登录")]),a("span",[t._v("-")]),a("el-link",{attrs:{href:"regist"}},[t._v("注册")])],1)]),a("el-main",[a("div",{staticStyle:{width:"1309px",margin:"auto"}},[a("el-tabs",{attrs:{type:"border-card",stretch:!0},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"first",label:"首页"}},[a("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.urls,(function(t){return a("el-carousel-item",{key:t,staticStyle:{height:"200px",width:"645px"}},[a("el-image",{attrs:{src:t,fit:"cover"}})],1)})),1),a("div",{staticStyle:{width:"1309px"}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("推荐新闻")])],1),a("div",{staticStyle:{float:"left"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:1.8}},[a("el-card",{staticClass:"box-mcard",attrs:{"body-style":{padding:"0px"}}},[a("span",{staticStyle:{"text-align":"center",display:"block","padding-top":"8px"}},[t._v("2020-01")]),a("span",{staticStyle:{"text-align":"center",display:"block","font-size":"18px"}},[t._v("06")])])],1),a("el-col",{attrs:{span:7}},[a("el-card",{staticClass:"box-bcard"})],1)],1)],1),a("div",{staticStyle:{float:"left","margin-left":"30px"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:1.8}},[a("el-card",{staticClass:"box-mcard",attrs:{"body-style":{padding:"0px"}}},[a("span",{staticStyle:{"text-align":"center",display:"block","padding-top":"8px"}},[t._v("2020-01")]),a("span",{staticStyle:{"text-align":"center",display:"block","font-size":"18px"}},[t._v("06")])])],1),a("el-col",{attrs:{span:7}},[a("el-card",{staticClass:"box-bcard"})],1)],1)],1),a("div",{staticStyle:{float:"left","margin-left":"30px"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:1.8}},[a("el-card",{staticClass:"box-mcard",attrs:{"body-style":{padding:"0px"}}},[a("span",{staticStyle:{"text-align":"center",display:"block","padding-top":"8px"}},[t._v("2020-01")]),a("span",{staticStyle:{"text-align":"center",display:"block","font-size":"18px"}},[t._v("06")])])],1),a("el-col",{attrs:{span:7}},[a("el-card",{staticClass:"box-bcard"})],1)],1)],1)],1),a("div",{staticStyle:{float:"left",width:"1275px"}},[a("el-divider")],1),a("el-card",{staticClass:"box-scard",staticStyle:{"margin-left":"10px",width:"1260px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("校友留言")]),a("el-table",{staticStyle:{width:"1260px"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"timestamp",label:"日期",width:"680"}}),a("el-table-column",{attrs:{prop:"content",label:"内容",width:"580"}})],1)],1)])],1),a("el-tab-pane",{attrs:{name:"second",label:"新闻中心"}}),a("el-tab-pane",{attrs:{name:"third",label:"校友留言"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"timestamp",label:"日期",width:"180"}}),a("el-table-column",{attrs:{prop:"content",label:"内容",width:"680"}}),a("el-table-column",{attrs:{prop:"author",label:"留言人"}})],1),a("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"text",round:""},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(" 添加留言 ")])],1),a("el-tab-pane",{attrs:{name:"fourth",label:"校友日志"}},[a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.logList}},[a("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.date))])]}}])}),a("el-table-column",{attrs:{label:"标题",width:"500"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[t._v("标题: "+t._s(e.row.title))]),a("p",[t._v("内容: "+t._s(e.row.content))]),a("p",[t._v("发布人: "+t._s(e.row.author))]),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.title))])],1)])]}}])}),a("el-table-column",{attrs:{prop:"author",label:"发布人"}})],1),a("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"text",round:""},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v(" 写日志 ")])],1)])],1)],1)]),a("el-dialog",{attrs:{title:"添加留言",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form},nativeOn:{submit:function(e){return e.preventDefault(),t.upMsg(e)}}},[a("el-form-item",{attrs:{label:"留言内容","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),a("el-form-item",{attrs:{label:"留言人","label-width":t.formLabelWidth}},[a("el-input",{attrs:{disabled:!0,autocomplete:"off"},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1),a("el-form-item",[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("确 定")])],1)],1)],1),a("el-dialog",{attrs:{title:"写日志",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form_logs},nativeOn:{submit:function(e){return e.preventDefault(),t.upLog(e)}}},[a("el-form-item",{attrs:{label:"日志标题","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form_logs.title,callback:function(e){t.$set(t.form_logs,"title",e)},expression:"form_logs.title"}})],1),a("el-form-item",{attrs:{label:"日志内容","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.form_logs.content,callback:function(e){t.$set(t.form_logs,"content",e)},expression:"form_logs.content"}})],1),a("el-form-item",{attrs:{label:"发表人","label-width":t.formLabelWidth}},[a("el-input",{attrs:{disabled:!0,autocomplete:"off"},model:{value:t.form_logs.author,callback:function(e){t.$set(t.form_logs,"author",e)},expression:"form_logs.author"}})],1),a("el-form-item",[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("确 定")])],1)],1)],1)],1)},o=[],i={data:function(){return{urls:[a("0852"),a("5882"),a("060c"),a("6b1d"),a("a0d0"),a("d387")],activeName:"first",dialogFormVisible:!1,form:{content:"",author:localStorage.getItem("Info")},form_logs:{title:"",content:"",author:localStorage.getItem("Info")},formLabelWidth:"120px",tableData:[],logList:[]}},methods:{handleClick:function(t,e){},upMsg:function(){var t=this;this.$http.post("messages",this.form).then((function(e){1==e.status&&(console.log("留言成功!"),t.fetch())}))},upLog:function(){var t=this;this.$http.post("logs",this.form_logs).then((function(e){1==e.status&&(console.log("日志写入成功!"),t.fetch_logs())}))},fetch:function(){var t=this;this.$http.get("messages").then((function(e){t.tableData=e.data}))},fetch_logs:function(){var t=this;this.$http.get("logs").then((function(e){t.logList=e.data}))}},created:function(){this.fetch(),this.fetch_logs()}},s=i,r=(a("d44d"),a("2877")),n=Object(r["a"])(s,l,o,!1,null,null,null);e["default"]=n.exports},"222d":function(t,e,a){},5882:function(t,e,a){t.exports=a.p+"img/2.3b326c1f.jpg"},"6b1d":function(t,e,a){t.exports=a.p+"img/4.9a14fc7a.jpg"},a0d0:function(t,e,a){t.exports=a.p+"img/5.ce6e35d3.jpg"},d387:function(t,e,a){t.exports=a.p+"img/6.625cca4c.jpg"},d44d:function(t,e,a){"use strict";a("222d")}}]);
//# sourceMappingURL=chunk-07b54150.88276cfd.js.map