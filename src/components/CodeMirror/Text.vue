<template>
  <div ref="view"></div>
</template>

<script setup>
import { keymap } from "@codemirror/view"
import { defaultKeymap } from "@codemirror/commands"
import useEditorData from './composables/useEditorData.js'

const model = defineModel({
  type: String,
  required: true
})

useEditorData('view', model, [keymap.of(defaultKeymap)])

</script>

<script>
export default {
  name: 'TextEditor',
}
</script>

<style></style>
