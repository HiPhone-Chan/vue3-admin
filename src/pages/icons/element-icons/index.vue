<template>
  <div>
    <div v-for="item of iconNames" :key="item">
      <svg-icon :icon-class="item" class="icon-item" />
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

const components = getCurrentInstance().appContext.components
const iconNames = []
for (const key of Object.keys(components)) {
  if (key.startsWith("el-icon")) {
    iconNames.push(key)
  }
}
</script>
<script>
export default {
  name: "ElementIconsPage"
}
</script>

<style>
.icon-item {
  margin: 20px;
  height: 85px;
  text-align: center;
  width: 100px;
  float: left;
  font-size: 30px;
  color: #24292e;
  cursor: pointer;
}
</style>
