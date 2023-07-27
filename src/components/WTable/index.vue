<template>
  <div class="table_view_box">
    <div class="table_box" ref="table_box">
      <WbTable
        ref="table"
        :columns="columns"
        :data="data"
        v-bind="$attrs"
        v-on="$listeners"
        v-show="!resizeing"
        style="width: 100%"
        :height="tableHeight"
      >
        <!-- 处理列的动态插槽 -->
        <template
          v-for="slotName in columnSlots"
          #[slotName]="{ row, col, rowIdx, colIdx }"
        >
          <slot
            :name="slotName"
            :row="row"
            :col="col"
            :rowIdx="rowIdx"
            :colIdx="colIdx"
          />
        </template>
      </WbTable>
    </div>

    <div class="page_box" v-if="showPag">
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="pageNum"
        :page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        :layout="layout"
        :total="total"
      />
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

import WbTable from "./Table.vue";
export default {
  name: "TableView",
  components: {
    WbTable,
  },
  data() {
    return {
      width: "",
      resizeing: false, // 改变时table原本有高度，先隐藏计算出真实高度
      tableHeight: 0,
      TableRef: null,
    };
  },
  props: {
    // 表格数据
    data: {
      type: Array,
      required: true,
    },
    // 要展示的列
    columns: {
      type: Array,
      required: true,
    },
    // 请求数据的方法回调(传入自动调取)
    // 在触发分页时调用数据请求函数
    getListMethod: {
      type: Function,
    },
    // 分页相关数据
    showPag: {
      type: Boolean,
      default: true,
    },
    pageNum: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    // 自动回滚到顶
    autoScroll: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    allSlots() {
      return {
        ...this.$slots,
        ...this.$scopedSlots,
      };
    },
    // 所有列的插槽，插槽名为列的 prop
    columnSlots() {
      const columnsProps = this.columns.map((col) => col.prop);
      return Object.keys(this.allSlots).filter((slotName) =>
        columnsProps.includes(slotName)
      );
    },
    // windowHeight() {
    //     return document.body.offsetHeight - 88 - 40 - 48 + 'px'
    // },
  },
  mounted() {
    this.$nextTick(() => {
      this.TableRef = this.getElTable();
      this.resizeHandle();
      window.addEventListener("resize", this.resizeHandle);
    });
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandle);
  },
  methods: {
    /**
     * 返回ElTable实例
     */
    getElTable() {
      return this.$refs.table.getElTable();
    },
    sizeChange(val) {
      this.$emit("update:pageNum", 1);
      this.$emit("update:pageSize", val);
      this.getListMethod();
    },
    currentChange(val) {
      this.$emit("update:pageNum", val);
      this.getListMethod();
    },
    currentChange(val) {
      this.$emit("update:pageNum", val);
      this.getListMethod();
      if (this.autoScroll) {
        this.tableToTop();
      }
    },
    tableToTop() {
      this.TableRef.bodyWrapper.scrollTop = 0;
    },
    resizeHandle: debounce(function () {
      this.resizeing = true;
      this.$nextTick(() => {
        this.tableHeight = this.$refs.table_box.offsetHeight;
        this.resizeing = false;
        this.$nextTick(() => {
          this.TableRef.doLayout(); // 重新计算表格布局
        });
      });
    }, 500),
  },
};
</script>

<style lang="scss" scoped>
.table_view_box {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .table_box {
    flex: 1;
  }

  .page_box {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
