<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" @click="handleFilter">
        <el-icon style="margin-right: 10px;">
          <Refresh />
        </el-icon>{{ $t('table.refresh') }}
      </el-button>
    </div>

    <metric-jvm v-if="!loading" :jvm="metrics.jvm" :process-metrics="metrics.processMetrics"></metric-jvm>
    <metric-gc v-if="!loading" :garbage-collector="metrics.garbageCollector"></metric-gc>
    <metric-http-request v-if="!loading" :requests="metrics['http.server.requests']"></metric-http-request>
    <metric-endpoint-request v-if="!loading" :services="metrics.services"></metric-endpoint-request>
    <metric-cache-statistics v-if="!loading" :cache="metrics.cache"></metric-cache-statistics>
    <metric-data-source-statistics v-if="!loading" :databases="metrics.databases"></metric-data-source-statistics>
  </div>
</template>

<script setup>
import MetricJvm from './components/MetricJvm.vue'
import MetricGc from './components/MetricGc.vue'
import MetricHttpRequest from './components/MetricHttpRequest.vue'
import MetricEndpointRequest from './components/MetricEndpointRequest.vue'
import MetricCacheStatistics from './components/MetricCacheStatistics.vue'
import MetricDataSourceStatistics from './components/MetricDataSourceStatistics.vue'
import useMetricsData from './composables/useMetricsData'

const { metrics, loading, handleFilter } = useMetricsData()
</script>

<script>
export default {
  name: "MetricsManagement"
}
</script>
<style></style>
