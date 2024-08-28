<template>
  <div class="flex">
    <el-tabs v-model="activeName" class="flex-1 mt-3 ml-5" @tab-click="switchTab">
      <el-tab-pane label="text" name="text">
        <text-editor v-model="currentInputData" />
      </el-tab-pane>
      <el-tab-pane label="xml" name="xml">
        <xml-editor v-model="currentInputData" />
      </el-tab-pane>
      <el-tab-pane label="json" name="json">
        <json-editor v-model="currentInputData" />
      </el-tab-pane>
    </el-tabs>

    <el-input v-model="currentInputData" type="textarea" :rows="10" class="flex-1 ml-2" style="margin-top: 60px;" />

  </div>

</template>

<script setup>
import { nextTick, reactive, ref } from 'vue'
import TextEditor from '@/components/CodeMirror/Text.vue'
import XmlEditor from '@/components/CodeMirror/Xml.vue'
import JsonEditor from '@/components/CodeMirror/Json.vue'

const currentInputData = ref("")

const editorStore = {}

const activeName = ref('text')
const switchTab = async () => {
  editorStore[activeName.value] = currentInputData.value
  await nextTick()
  currentInputData.value = editorStore[activeName.value] ?? ""
}

</script>
<script>
export default {
  name: 'CodeMirrorDemo',
}
</script>

<style></style>
