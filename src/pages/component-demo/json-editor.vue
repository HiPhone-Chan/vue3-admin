<template>
  <div class="components-container">
    <aside>Json-Editor is base on <a href="https://codemirror.net/" target="_blank">CodeMirrorr</a>. Lint
      base on <a href="https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js"
        target="_blank">json-lint</a>.</aside>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value" />
    </div>
  </div>
</template>

<script>
import JsonEditor from '@/components/JsonEditor/index.vue'

export default {
  name: 'JsonEditorDemo',
  components: { JsonEditor },
  data() {
    return {
      value: { "items": [{ "market_type": "forexdata", "symbol": "XAUUSD" }, { "market_type": "forexdata", "symbol": "UKOIL" }] }
    }
  }
}
</script>

<style scoped>
.editor-container {
  position: relative;
  height: 100%;
}
</style>

