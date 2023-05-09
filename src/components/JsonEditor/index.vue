<template>
  <div class="json-editor">
    <div ref="textarea"></div>
  </div>
</template>

<script>
import { basicSetup, EditorView } from 'codemirror'
import { EditorState, Compartment } from "@codemirror/state"
import { keymap } from "@codemirror/view"
import { defaultKeymap } from "@codemirror/commands"
import { json, jsonParseLinter } from "@codemirror/lang-json"
// import 'codemirror/addon/lint/lint.css'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/rubyblue.css'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/addon/lint/lint'
// import 'codemirror/addon/lint/json-lint'

// TODO
export default {
  name: 'JsonEditor',
  props: ['modelValue'],
  data() {
    return {
      jsonEditor: false
    }
  },
  mounted() {
    const languageConf = new Compartment
    let state = EditorState.create({
      doc: JSON.stringify(this.modelValue, null, 2),
      extensions: [
        basicSetup,
        json(),
        jsonParseLinter(),
        keymap.of(defaultKeymap),
        EditorView.updateListener.of((view) => {
          const value = view.state.doc.toString()
          this.$emit('changed', value)
          this.$emit('input', value)
        })
      ]
    })

    this.jsonEditor = new EditorView({
      state,
      parent: this.$refs.textarea
    })
  },
  methods: {
    getValue() {
      return this.jsonEditor.state.doc.toString()
    }
  }
}
</script>

<style lang="scss" scoped></style>
