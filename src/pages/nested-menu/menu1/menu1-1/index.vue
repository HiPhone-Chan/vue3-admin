<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1-1" type="success">
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </router-view>
    </el-alert>
  </div>
</template>

<script>
export default {
  name: 'NestMenu1-1'
}
</script>
