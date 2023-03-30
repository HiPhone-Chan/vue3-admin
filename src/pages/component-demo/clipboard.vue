<template>
  <div class="app-container">
    <el-input v-model="inputData" placeholder="Please input" style="width:400px;max-width:100%;" />
    <el-button type="primary" @click="handleCopy(inputData, $event)">
      <el-icon>
        <Document />
      </el-icon>
      copy
    </el-button>
  </div>
</template>

<script>
import clip from '@/utils/clipboard' // use clipboard directly

export default {
  name: 'ClipboardDemo',
  data() {
    return {
      inputData: 'https://github.com/HiPhone-Chan/vue3-admin'
    }
  },
  methods: {
    handleCopy(text, event) {
      clip(text, event)
    }
  }
}
</script>

<style></style>
