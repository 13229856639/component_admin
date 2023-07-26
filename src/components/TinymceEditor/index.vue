<template>
  <div>
    <tinymce-editor
      ref="Editor"
      :id="tinymceId"
      :value="content"
      :init="init"
      :witdh="width"
      :height="height"
      :resize="resize"
      :disabled="disabled"
      @input="onInput"
    />
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import TinymceEditor from "@tinymce/tinymce-vue";
// 引入配置信息
import defaultConfig from "./config";
// import { adminFileGetToken } from '@/api/common'
// import { ossUpload } from '@/utils/ossSDK'

// 上传图片
function uploadFile(file) {
  return new Promise((resolve, reject) => {
    // 获取oss配置
    adminFileGetToken({
      bizType: "common",
    }).then((res) => {
      if (res.status === "OK") {
        console.log(res);
        let dataObj = res.data.token;
        ossUpload(dataObj, file)
          .then((url) => {
            resolve(url);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        reject(res.message);
      }
    });
  });
}
/**
 * 建议默认
 */
const toolbar =
  "| formatselect fontsizeselect lineheight" +
  "| undo redo " +
  "| bold italic underline strikethrough " +
  "| alignleft aligncenter alignright alignjustify " +
  "| image link " +
  "| outdent indent numlist bullist insertdatetime " +
  "| table forecolor backcolor removeformat " +
  "| hr searchreplace charmap emoticons " +
  "| fullscreen preview ";

const menubar = "edit view tools help";
export default {
  name: "Editor",
  components: { TinymceEditor },
  props: {
    id: {
      type: String,
      default: function () {
        // 这个id一定要写，否则会出现莫名其妙的问题。
        return "tinymce-" + Date.now() + Math.floor(Math.random() * 1000);
      },
    },
    // 内容
    content: {
      type: String,
      default: "",
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 宽度
    width: {
      type: [String, Number],
      default: "100%",
    },
    // 高度
    height: {
      type: [String, Number],
      default: 600,
    },
    // 是否允许拖动
    resize: {
      type: [String, Boolean],
      default: true,
    },
    // 菜单栏
    menubar: {
      type: String,
      default: menubar,
    },
    // 工具栏
    toolbar: {
      type: String,
      default: toolbar,
    },
    // 默认样式
    contentStyle: {
      type: String,
      default: "img {max-width:100%;}",
    },
  },
  data() {
    return {
      tinymceId: this.id,
      init: Object.assign(defaultConfig, {
        // 组件值覆盖默认配置
        width: this.width,
        height: this.height,
        resize: this.resize,
        menubar: this.menubar ? this.menubar : defaultConfig.menubar,
        toolbar: this.toolbar ? this.toolbar : defaultConfig.toolbar,
        fontsize_formats:
          "12px 14px 16px 18px 20px 21px 24px 36px 48px 56px 72px",
        content_style: this.contentStyle, // 图片尺寸
        // image_dimensions: false, // 禁用TinyMCE默认的图片尺寸设置
        toolbar_mode: "wrap", // 固定菜单栏
        images_upload_handler: this.images_upload_handler,
        object_resizing: false,
      }),
    };
  },
  methods: {
    onInput(content) {
      this.$emit("update:content", content);
    },
    // 默认使用base64格式
    images_upload_handler(blobInfo, success, failure) {
      // const maxSize = 2
      const blob = blobInfo.blob();

      // if (blob.size / 1024 / 1024 > maxSize) {
      //     failure('图片大小不能超过' + maxSize + 'MB')
      //     return
      // }

      // const formData = new FormData()
      // formData.append('file', blob, blobInfo.fileName)

      uploadFile(blob)
        .then((res) => {
          // 创建一个 <img> 元素，并设置属性
          let img = document.createElement("img");
          // 将图片节点插入到编辑器中的当前光标位置
          this.$refs.Editor.editor.insertContent(
            `<p><img src=${res} style="width:100%"/></p>`
          );
          // TinyMCE 5 自定义上传成功后阻止默认的插入行为，并关闭上传图片的弹窗
          this.$refs.Editor.editor.windowManager.close();
          return false;
          // 通知上传成功
          // success(res)
        })
        .catch((err) => {
          console.log(err);
          failure("文件上传失败，请重试");
        });
    },
  },
};
</script>
