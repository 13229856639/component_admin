(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88e40f50"],{"2e28":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"container_view",staticClass:"container_view"},[e("div",{staticClass:"card_list",style:{width:t.nowWidth}},t._l(20,(function(i){return e("div",{key:i,staticClass:"card_item"},[e("div",{staticClass:"item_bg"}),e("div",{staticClass:"item_info"},[t._m(0,!0),e("div",{staticClass:"card_info"},[t._v("我是标题我是标题")]),e("div",{staticClass:"item_footer"},t._l(3,(function(t){return e("div",{key:t,staticClass:"f_item"})})),0)])])})),0)])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"info_img"},[e("img",{attrs:{src:"https://img2.baidu.com/it/u=2312383180,3750420672&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"}})])}];function a(t){var i,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){var n=arguments,s=this;clearTimeout(i),i=setTimeout((function(){t.apply(s,n)}),e)}}var r={name:"CardList",data:function(){return{nowWidth:"1000px"}},mounted:function(){this.getSize(),window.addEventListener("resize",this.resizeHandle)},destroyed:function(){window.removeEventListener("resize",this.resizeHandle)},methods:{getSize:function(){var t=this.$refs.container_view.offsetWidth,i=t/420;this.nowWidth=420*Math.floor(i)+"px"},resizeHandle:a((function(){this.getSize()}),300)}},o=r,c=(e("f209"),e("2877")),d=Object(c["a"])(o,n,s,!1,null,"177bb939",null);i["default"]=d.exports},b69b:function(t,i,e){},f209:function(t,i,e){"use strict";e("b69b")}}]);