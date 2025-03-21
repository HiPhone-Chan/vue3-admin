<template>
  <div>
    <div v-for="item of svgIconNames" :key="item">
      <svg-icon :icon-class="item" class="icon-item" />
    </div>
  </div>
</template>

<script setup>
import svgIconNames from './index';

</script>
<script>
export default {
  name: "SvgIconsPage"
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
