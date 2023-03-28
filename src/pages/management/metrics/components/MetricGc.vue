<template>
  <h3>Garbage collections</h3>
  <el-row>
    <el-col :span="8">
      <span v-if="garbageCollector">
        GC Live Data Size/GC Max Data Size (
        {{ (garbageCollector['jvm.gc.live.data.size'] / 1048576).toFixed(1) }}M /
        {{ (garbageCollector['jvm.gc.max.data.size'] / 1048576).toFixed(1) }}M)
      </span>
      <el-progress v-if="garbageCollector"
        :percentage="garbageCollector['jvm.gc.live.data.size'] * 100 / garbageCollector['jvm.gc.max.data.size']"
        :format="(percentage) => percentage.toFixed(2)" />
    </el-col>
    <el-col :span="8">
      <span v-if="garbageCollector">
        GC Memory Promoted/GC Memory Allocated (
        {{ (garbageCollector['jvm.gc.memory.promoted'] / 1048576).toFixed(1) }}M /
        {{ (garbageCollector['jvm.gc.memory.allocated'] / 1048576).toFixed(1) }}M)
      </span>
      <el-progress v-if="garbageCollector"
        :percentage="garbageCollector['jvm.gc.memory.promoted'] * 100 / garbageCollector['jvm.gc.memory.allocated']"
        :format="(percentage) => percentage.toFixed(2)" />
    </el-col>
    <el-col :span="8" v-if="garbageCollector">
      <el-row>
        <el-col :span="6">Classes loaded</el-col>
        <el-col :span="18">{{ garbageCollector.classesLoaded }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="6">Classes unloaded</el-col>
        <el-col :span="18">{{ garbageCollector.classesUnloaded }}</el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup>
const props = defineProps({
  garbageCollector: Object
})
</script>

<style></style>
