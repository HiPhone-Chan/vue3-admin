<template>
  <h3>HTTP requests (time in millisecond)</h3>
  <el-table :data="list" v-if="requests">
    <el-table-column align="center" label="Code">
      <template v-slot="scope">
        <span>{{ scope.row.key }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Count">
      <template v-slot="scope">
        <el-progress :percentage="scope.row.count.percentage" :text-inside="true" :stroke-width="20"
          :format="() => scope.row.count.text" />
      </template>
    </el-table-column>
    <el-table-column align="center" label="Mean">
      <template v-slot="scope">
        <span>{{ scope.row.mean }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Max">
      <template v-slot="scope">
        <span>{{ scope.row.max }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  requests: Object
})

const list = computed(() => {
  const list = []
  const percode = props.requests['percode'];
  for (const key in percode) {
    const entry = percode[key];
    list.push({
      key,
      count: {
        percentage: entry.count * 100 / props.requests['all'].count,
        text: `${entry.count}`
      },
      mean: Number(entry.mean).toFixed(2),
      max: Number(entry.max).toFixed(2)
    })
  }
  return list;
})

</script>

<style></style>
