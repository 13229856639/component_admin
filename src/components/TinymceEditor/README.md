```vue
<template>
    <div class="app-container">
        <h2>真灵</h2>
        <Editor :content.sync="content" :menubar="menubar" :toolbar="toolbar" />
    </div>
</template>

<script>
import Editor from '@/components/tinymceEditor'
export default {
    components: {
        Editor,
    },
    data() {
        return {
            content: '<h1>阿萨大大</h1> <p>啊实打实大a阿斯达</p> <p>&nbsp;</p> <p>阿达的</p>',
            menubar: 'edit view tools help',
            toolbar:
                '| formatselect fontsizeselect lineheight' +
                '| undo redo ' +
                '| code bold italic underline strikethrough ' +
                '| alignleft aligncenter alignright alignjustify ' +
                '| image link codesample ' +
                '| outdent indent numlist bullist insertdatetime ' +
                '| table forecolor backcolor removeformat ' +
                '| hr searchreplace charmap emoticons ' +
                '| fullscreen preview ',
        }
    },
}
</script>

<style scoped>
</style>
```