<template>
  <div ref="view"></div>
</template>

<script setup>
import { xml } from "@codemirror/lang-xml"
import useEditorData from './composables/useEditorData.js'

const model = defineModel({
  type: String,
  required: true
})

useEditorData('view', model, [xml()])

</script>

<script>
export default {
  name: 'XmlEditor'
}
</script>

<style></style>
