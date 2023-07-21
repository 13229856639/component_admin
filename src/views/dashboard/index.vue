<template>
  <div class="dashboard-container">
    <div class="query_view">
      <el-form :inline="true" size="small" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批人">
          <el-input placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table_view">
      <div class="table_box" ref="table_box">
        <el-table
          v-show="!resizeing"
          :data="tableData"
          border
          stripe
          size="medium"
          style="width: 100%"
          :height="tableHeight"
          ref="myTable"
          :header-cell-style="{
            background: '#f4f6fa',
            color: '#333',
          }"
        >
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </div>
      <div class="page_box">
        <el-pagination
          background
          :page-sizes="[10, 100, 200, 300, 400]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
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
  name: "Dashboard",
  data() {
    return {
      resizeing: false, // 改变时table原本有高度，先隐藏计算出真实高度
      tableData: [],
      tableHeight: 0,
    };
  },
  created() {
    let size = 50;
    while (size > 0) {
      this.tableData.push({
        date: "2016-05-02",
        name: "王小虎" + size,
        address: "上海市普陀区金沙江路 1518 弄",
      });
      size--;
    }
  },
  mounted() {
    this.resizeHandle();
    window.addEventListener("resize", this.resizeHandle);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeHandle);
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.tableToTop();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.tableToTop();
    },
    tableToTop() {
      this.$refs.myTable.bodyWrapper.scrollTop = 0;
    },
    resizeHandle: debounce(function () {
      this.resizeing = true;
      this.$nextTick(() => {
        this.tableHeight = this.$refs.table_box.offsetHeight;
        this.resizeing = false;
        this.$nextTick(() => {
          this.$refs.myTable.doLayout(); // 重新计算表格布局
        });
      });
    }, 500),
  },
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 20px;
  box-sizing: border-box;
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  background-color: #e9f0fb;

  .query_view {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 20px;
    flex: none;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;
  }

  .table_view {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;

    .table_box {
      flex: 1;
    }

    .page_box {
      padding: 20px;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
