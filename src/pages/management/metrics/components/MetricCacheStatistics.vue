<template>
  <h3>Cache statistics</h3>
  <el-table :data="list" v-if="cache">
    <el-table-column align="center" label="Hits">
      <template v-slot="scope">
        <span>{{ scope.row.hit }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Misses">
      <template v-slot="scope">
        <span>{{ scope.row.miss }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Gets">
      <template v-slot="scope">
        <span>{{ scope.row.gets }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Hit %">
      <template v-slot="scope">
        <span>{{ scope.row.hitPercent }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Puts">
      <template v-slot="scope">
        <span>{{ scope.row.puts }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Removals">
      <template v-slot="scope">
        <span>{{ scope.row.removals }}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" label="Evictions">
      <template v-slot="scope">
        <span>{{ scope.row.evictions }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  cache: Object
})

const list = computed(() => {
  const list = []
  for (const key in props.cache) {
    const entry = props.cache[key];
    const hit = entry['cache.gets.hit']
    const miss = entry['cache.gets.miss']
    const gets = hit + miss
    list.push({
      key, hit, miss, gets,
      hitPercent: gets == 0 ? 0 : (hit * 100 / gets).toFixed(2),
      puts: entry['cache.puts'],
      removals: entry['cache.removals'],
      evictions: entry['cache.evictions']
    })
  }
  return list;
})

</script>

<style></style>
