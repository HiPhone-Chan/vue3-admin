<template>
  <h3>DataSource statistics (time in millisecond)</h3>
  <el-table :data="list" v-if="databases">
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
    <el-table-column align="center" label="Min">
      <template v-slot="scope">
        <span>{{ scope.row.min }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="p75">
      <template v-slot="scope">
        <span>{{ scope.row.p75 }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="p95">
      <template v-slot="scope">
        <span>{{ scope.row.p95 }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="p99">
      <template v-slot="scope">
        <span>{{ scope.row.p99 }}</span>
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
  databases: Object
})

const list = computed(() => {
  const list = [];
  const actions = ['acquire', 'creation', 'usage'];
  for (const action of actions) {
    const entry = props.databases[action];
    list.push({
      count: entry.count,
      mean: Number(entry.mean).toFixed(2),
      min: entry['0.0'],
      p50: entry['0.5'],
      p75: entry['0.75'],
      p95: entry['0.95'],
      p99: entry['0.99'],
      max: Number(entry.max).toFixed(2)

    })
  }
  return list;
})

</script>

<style></style>
