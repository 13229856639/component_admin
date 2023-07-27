<template>
  <div class="app-container">
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
</style>
