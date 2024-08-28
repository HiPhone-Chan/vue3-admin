<template>
  <div class="app-container">
    <p v-if="!isSupported"> Your browser does not support Clipboard API </p>
    <p> Clipboard Permission:
      read <b>{{ permissionRead }}</b> | write <b>{{ permissionWrite }}</b>
    </p>
    <el-input v-model="inputData" placeholder="Please input" class="w-full max-w-96" />
    <el-button class="ml-1" type="primary" @click="handleCopy">
      <el-icon> <el-icon-document /> </el-icon> copy
    </el-button>

    <hr />
    <div class="text-green">
      Current copied:
      <p v-if="copied"> {{ text }}</p>
    </div>

    <el-input v-model="pasteInput" type="textarea" :rows="10" class="w-full max-w-96"
      placeholder="Paste copied content here" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useClipboard, usePermission } from '@vueuse/core'

const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')

const inputData = ref('https://github.com/HiPhone-Chan/vue3-admin')
const pasteInput = ref('')
const { text, copy, copied, isSupported } = useClipboard()

const handleCopy = () => {
  copy(inputData.value)
}
</script>

<script>
export default {
  name: 'ClipboardDemo'
}
</script>

<style></style>
