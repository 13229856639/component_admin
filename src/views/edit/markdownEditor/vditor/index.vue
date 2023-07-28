<template>
  <div class="app-container">
    <div id="vditor" class="vditor" />
  </div>
</template>

<script>
import Vditor from "vditor";
import "vditor/dist/index.css";
export default {
  data() {
    return {
      isMobile: window.innerWidth <= 960,
      vditor: null,
      imgSrc:
        "https://img2.baidu.com/it/u=2312383180,3750420672&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
    };
  },
  created() {
    // this.setDefaultText();
  },
  mounted() {
    this.initVditor();
  },
  methods: {
    initVditor() {
      const that = this;
      const options = {
        width: "100%",
        height: 900,
        upload: {
          max: 5 * 1024 * 1024,
          // linkToImgUrl: 'https://sm.ms/api/upload',
          handler(file) {
            // let formData = new FormData();
            // for (let i in file) {
            //   formData.append("smfile", file[i]);
            // }
            // let request = new XMLHttpRequest();
            // request.open("POST", "https://sm.ms/api/upload");
            // request.onload = that.onloadCallback;
            // request.send(formData);
            console.log("打开上传图片");
            that.onloadCallback();
          },
        },
        after: () => {
          this.vditor.focus();
        },
        cache: {
          enable: false,
        },
      };
      this.vditor = new Vditor("vditor", options);
    },
    onloadCallback(oEvent) {
      //   const currentTarget = oEvent.currentTarget;
      //   if (currentTarget.status !== 200) {
      //     return this.$message({
      //       type: "error",
      //       message: currentTarget.status + " " + currentTarget.statusText,
      //     });
      //   }
      //   let resp = JSON.parse(currentTarget.response);
      //   let imgMdStr = "";
      //   if (resp.code === "invalid_source") {
      //     return this.$message({
      //       type: "error",
      //       message: resp.message,
      //     });
      //   }
      //   if (resp.code === "image_repeated") {
      //     imgMdStr = `![](${resp.images})`;
      //   } else if (resp.code === "success" || resp.success) {
      //     imgMdStr = `![${resp.data.filename}](${resp.data.url})`;
      //   }
      //   this.vditor.insertValue(imgMdStr);
      console.log(this.vditor);
      this.vditor.insertValue(`![](${this.imgSrc})`);
    },
    // 填充
    setVditorValue() {
      this.vditor.setValue(
        "Vue Composition API + Vditor + TypeScript Minimal Example"
      );
    },
    setDefaultText() {
      const savedMdContent = localStorage.getItem("vditorvditor") || "";
      if (!savedMdContent.trim()) {
        localStorage.setItem("vditorvditor", defaultText);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>