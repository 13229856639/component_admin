(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ddf8e"],{8451:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("Editor",{attrs:{content:e.content,height:800},on:{"update:content":function(t){e.content=t}}})],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("tinymce-editor",{ref:"Editor",attrs:{id:e.tinymceId,value:e.content,init:e.init,witdh:e.width,height:e.height,resize:e.resize,disabled:e.disabled},on:{input:e.onInput}})],1)},r=[],s=(n("d3b7"),n("a9e3"),n("e562"),n("ca72")),l=(n("fd8a"),n("fc39"),n("84ec"),n("64d8"),n("ebac"),n("c3d7"),n("69e4"),n("6957"),n("0a9d"),n("840a"),n("4ea8"),n("3aea"),n("4237"),n("d2dc"),n("07d7"),n("07d1"),n("62e5"),n("2b07"),n("4bd0"),n("bc54"),n("9434"),n("3154"),n("0aa0"),{language_url:"/component_admin/tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"/component_admin/tinymce/skins/ui/oxide",content_css:"/component_admin/tinymce/skins/content/default/content.min.css",emoticons_database_url:"/component_admin/tinymce/emojis/emojis.min.js",width:"100%",height:450,plugins:"lists code pagebreak charmap emoticons save preview print image media link paste anchor codesample table wordcount fullscreen help searchreplace hr insertdatetime",menubar:"file edit view insert format tools table help",toolbar:"| formatselect fontselect fontsizeselect lineheight| undo redo | code bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent numlist bullist insertdatetime | table forecolor backcolor removeformat | hr searchreplace pagebreak charmap emoticons | fullscreen preview save print | image media link anchor codesample ",toolbar_mode:"sliding",resize:!1,statusbar:!0,branding:!1,paste_data_images:!0,insertdatetime_formats:["%H点%M分","%Y年%m月%d日","%Y年%m月%d日 %H点%M分","%Y-%m-%d %H:%M"]});function c(e){return new Promise((function(t,n){adminFileGetToken({bizType:"common"}).then((function(i){if("OK"===i.status){console.log(i);var a=i.data.token;ossUpload(a,e).then((function(e){t(e)})).catch((function(e){n(e)}))}else n(i.message)}))}))}var d="| formatselect fontsizeselect lineheight| undo redo | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | image link | outdent indent numlist bullist insertdatetime | table forecolor backcolor removeformat | hr searchreplace charmap emoticons | fullscreen preview ",m="edit view tools help",u={name:"Editor",components:{TinymceEditor:s["a"]},props:{id:{type:String,default:function(){return"tinymce-"+Date.now()+Math.floor(1e3*Math.random())}},content:{type:String,default:""},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:600},resize:{type:[String,Boolean],default:!0},menubar:{type:String,default:m},toolbar:{type:String,default:d},contentStyle:{type:String,default:"img {max-width:100%;}"}},data:function(){return{tinymceId:this.id,init:Object.assign(l,{width:this.width,height:this.height,resize:this.resize,menubar:this.menubar?this.menubar:l.menubar,toolbar:this.toolbar?this.toolbar:l.toolbar,fontsize_formats:"12px 14px 16px 18px 20px 21px 24px 36px 48px 56px 72px",content_style:this.contentStyle,toolbar_mode:"wrap",images_upload_handler:this.images_upload_handler,object_resizing:!1})}},methods:{onInput:function(e){this.$emit("update:content",e)},images_upload_handler:function(e,t,n){var i=this,a=e.blob();c(a).then((function(e){document.createElement("img");return i.$refs.Editor.editor.insertContent("<p><img src=".concat(e,' style="width:100%"/></p>')),i.$refs.Editor.editor.windowManager.close(),!1})).catch((function(e){console.log(e),n("文件上传失败，请重试")}))}}},h=u,p=n("2877"),f=Object(p["a"])(h,o,r,!1,null,null,null),g=f.exports,b={name:"Dashboard",components:{Editor:g},data:function(){return{content:""}},methods:{}},_=b,w=Object(p["a"])(_,i,a,!1,null,"69062a08",null);t["default"]=w.exports}}]);