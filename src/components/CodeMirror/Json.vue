<template>
  <div ref="view"></div>
</template>

<script setup>
import { json } from "@codemirror/lang-json"
import useEditorData from './composables/useEditorData.js'

const model = defineModel({
  type: String,
  required: true
})

useEditorData('view', model, [json()])

</script>

<script>
export default {
  name: 'JsonEditor'
}
</script>

<style></style>
