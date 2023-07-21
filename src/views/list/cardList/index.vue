<template>
  <div class="container_view" ref="container_view">
    <div class="card_list" :style="{ width: nowWidth }">
      <div class="card_item" v-for="k in 20" :key="k">
        <div class="item_bg"></div>
        <div class="item_info">
          <div class="info_img">
            <img
              src="https://img2.baidu.com/it/u=2312383180,3750420672&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800"
            />
          </div>
          <div class="card_info">我是标题我是标题</div>
          <div class="item_footer">
            <div class="f_item" v-for="i in 3" :key="i"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 防抖
function debounce(func, delay = 300) {
  let timerId;

  return function () {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}
export default {
  name: "CardList",
  data() {
    return {
      nowWidth: "1000px",
    };
  },
  mounted() {
    this.getSize();
    window.addEventListener("resize", this.resizeHandle);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandle);
  },
  methods: {
    getSize() {
      let bodyWidth = this.$refs.container_view.offsetWidth;
      let size = bodyWidth / 420;
      this.nowWidth = Math.floor(size) * 420 + "px";
    },
    resizeHandle: debounce(function () {
      this.getSize();
    }, 300),
  },
};
</script>

<style scoped lang="scss">
.card_list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  .card_item {
    width: 400px;
    height: 300px;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
    margin: 0 10px;

    overflow: hidden;
    cursor: pointer;

    .item_bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
      clip-path: inset(30px 0 50px 30px round 10px);
      contain: strict;
      transition: clip-path 0.3s ease 0.1s;
    }

    .item_info {
      width: 100%;
      height: 100%;
      position: relative;

      .info_img {
        width: 100%;
        height: 200px;
        border-radius: 5px;
        overflow: hidden;

        img {
          width: 100%;
          object-fit: cover;
        }
      }

      .card_info {
        color: #666;
        padding-top: 10px;
        font-size: 16px;
        font-weight: bold;
      }

      .item_footer {
        margin-top: 10px;
        display: flex;
        .f_item {
          width: 50px;
          height: 20px;
          background-color: #666;
          margin-right: 10px;
          transform: translateY(-50%);
          opacity: 0;
          transition: all 0.12s ease;
          transition-property: transform, opacity;
          transition-timing-function: cubic-bezier(1, 0, 0.65, 0.75), linear;

          &:nth-child(2) {
            transition-delay: 0.05s;
          }

          &:nth-child(3) {
            transition-delay: 0.1s;
          }
        }
      }
    }

    &:hover {
      .item_bg {
        clip-path: inset(0 0 0 0 round 10px);
        transition-delay: 0s;
      }
      .info_img {
        box-shadow: inset -26px 49px 70px -19px rgba(0, 0, 0, 0.2);
      }
      .f_item {
        transform: translateY(0) !important;
        opacity: 1 !important;
        transition-timing-function: cubic-bezier(0.2, 0.15, 0.1, 1), ease;
        transition-delay: 0.09s;
      }
    }
  }
}
</style>