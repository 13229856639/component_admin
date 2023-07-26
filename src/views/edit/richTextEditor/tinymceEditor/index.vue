<template>
  <div class="container_view">
    <Editor :content.sync="content" :height="800" />
  </div>
</template>

<script>
import Editor from "@/components/TinymceEditor";
export default {
  name: "Dashboard",
  components: {
    Editor,
  },
  data() {
    return {
      content: "",
    };
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
}
</style>
