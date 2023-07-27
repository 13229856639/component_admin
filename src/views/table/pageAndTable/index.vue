<template>
  <div class="container_view">
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
      <WTable
        border
        stripe
        :columns="columns"
        :getListMethod="getList"
        :pageNum.sync="pageNum"
        :pageSize.sync="pageSize"
        :total="total"
        :data="tableData"
        columnAlign="center"
        :header-cell-style="{
          background: '#f4f6fa',
          color: '#333',
        }"
      >
      </WTable>
    </div>
  </div>
</template>

<script>
import WTable from "@/components/WTable";
export default {
  name: "Dashboard",
  components: {
    WTable,
  },
  data() {
    return {
      // 查询表单
      queryForm: {},
      // 表格配置
      tableData: [],
      loading: false,
      pageNum: 1,
      pageSize: 10,
      total: 1000,
      columns: [
        {
          label: "时间",
          prop: "date",
          elProps: {
            minWidth: "120px",
          },
        },
        {
          label: "姓名",
          prop: "name",
          elProps: {
            minWidth: "120px",
          },
        },
        {
          label: "地址",
          prop: "address",
          elProps: {
            minWidth: "120px",
          },
        },
      ],
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
  methods: {
    // 获取列表数据
    getList() {
      //   this.loading = true;
      //   let query = {
      //     "page.current": this.pageNum,
      //     "page.size": this.pageSize,
      //     ...this.queryForm,
      //     merchantUserId: this.id,
      //     tab: 1,
      //   };
      //   adminOrderBlessList(query)
      //     .then((res) => {
      //       if (res.status == "OK") {
      //         this.tableData = res.data.list;
      //         this.total = res.data.total;
      //       }
      //     })
      //     .finally(() => {
      //       this.loading = false;
      //     });
    },
  },
};
</script>

<style lang="scss" scoped>
.container_view {
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
  }
}
</style>
