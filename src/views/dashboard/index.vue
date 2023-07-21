<template>
  <div class="container_view">Hello</div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  methods: {},
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
