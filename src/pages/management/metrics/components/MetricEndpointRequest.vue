<template>
  <h3>Endpoints requests (time in millisecond)</h3>
  <el-table :data="list" v-if="services">
    <el-table-column align="center" label="Method">
      <template v-slot="scope">
        <span>{{ scope.row.method }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Url">
      <template v-slot="scope">
        <span>{{ scope.row.url }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Count">
      <template v-slot="scope">
        <span>{{ scope.row.count }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Mean">
      <template v-slot="scope">
        <span>{{ scope.row.mean }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  services: Object
})

const list = computed(() => {
  const list = []
  for (const url in props.services) {
    const urlObj = props.services[url];
    for (const method in urlObj) {
      const entry = urlObj[method]
      list.push({
        method, url,
        count: entry.count,
        mean: Number(entry.mean).toFixed(2)
      })
    }
  }
  return list;
})

</script>

<style></style>
