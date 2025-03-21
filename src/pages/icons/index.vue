<template>
  <div class="container">
    <el-tabs v-model="activeName" class="flex-1 mt-3 ml-5">
      <el-tab-pane label="本地svg" name="svg">
        <svg-icons />
      </el-tab-pane>

      <el-tab-pane label="element" name="element">
        <element-icons />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SvgIcons from './svg-icons/index.vue'
import ElementIcons from './element-icons/index.vue'

const activeName = ref('svg')
</script>
<script>
export default {
  name: 'IconsPage',
}
</script>

<style></style>
