(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e55fd"],{"93e2":function(t,i,o){"use strict";o.r(i);var e=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"vditor",attrs:{id:"vditor"}})])}],a=(o("498a"),o("ff41")),r=o.n(a),c=(o("2f2f"),{data:function(){return{isMobile:window.innerWidth<=960,vditor:null,imgSrc:"https://img2.baidu.com/it/u=2312383180,3750420672&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"}},created:function(){},mounted:function(){this.initVditor()},methods:{initVditor:function(){var t=this,i=this,o={width:"100%",height:900,upload:{max:5242880,handler:function(t){console.log("打开上传图片"),i.onloadCallback()}},after:function(){t.vditor.focus()},cache:{enable:!1}};this.vditor=new r.a("vditor",o)},onloadCallback:function(t){console.log(this.vditor),this.vditor.insertValue("![](".concat(this.imgSrc,")"))},setVditorValue:function(){this.vditor.setValue("Vue Composition API + Vditor + TypeScript Minimal Example")},setDefaultText:function(){var t=localStorage.getItem("vditorvditor")||"";t.trim()||localStorage.setItem("vditorvditor",defaultText)}}}),d=c,l=o("2877"),s=Object(l["a"])(d,e,n,!1,null,"ba35599a",null);i["default"]=s.exports}}]);