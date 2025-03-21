<template>
  <h3>JVM</h3>
  <el-row>
    <el-col :span="8">
      <h4>Memory</h4>
      <div v-for="(entry, key) of jvm" :key="key">
        <span>{{ key }} :</span> {{ (entry.used / 1048576).toFixed(2) }}M
        <div>Committed : {{ (entry.committed / 1048576).toFixed(2) }}M</div>
        <el-progress v-if="entry.max > 0" :percentage="Number((entry.used * 100) / entry.max)" />
      </div>
    </el-col>
    <el-col :span="2">
      <!-- <h4>Threads</h4>
      <span></span> -->
    </el-col>
    <el-col :span="8">
      <h4>System</h4>
      <el-row>
        <el-col :span="8">Uptime</el-col>
        <el-col :span="16" v-if="processMetrics"> {{ formatTime(processMetrics['process.uptime'] * 1000) }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Start time</el-col>
        <el-col :span="16" v-if="processMetrics"> {{ parseTime(processMetrics['process.start.time']) }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Process CPU usage</el-col>
        <el-col :span="16" v-if="processMetrics"> {{ (processMetrics['process.cpu.usage'] * 100).toFixed(2) }}%</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">System CPU usage</el-col>
        <el-col :span="16" v-if="processMetrics"> {{ (processMetrics['system.cpu.usage'] * 100).toFixed(2) }}%</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">System CPU count</el-col>
        <el-col :span="16" v-if="processMetrics"> {{ processMetrics['system.cpu.count'] }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">System 1m Load average</el-col>
        <el-col :span="16" v-if="processMetrics"> {{ processMetrics['system.load.average.1m'] }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Process files max</el-col>
        <el-col :span="16" v-if="processMetrics"> {{ processMetrics['process.files.max'] }}</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">Process files open</el-col>
        <el-col :span="16" v-if="processMetrics"> {{ processMetrics['process.files.open'] }}</el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script setup>
import { parseTime, formatTime } from '@/utils'

defineProps({
  jvm: Object,
  processMetrics: Object,
})
</script>
