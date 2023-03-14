<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" @click="handleFilter">
        <el-icon style="margin-right: 10px;">
          <Refresh />
        </el-icon>{{ $t('table.refresh') }}
      </el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="给我一点时间"
      border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" :label="$t('table.id')" width="65"
        type="index" />
      <el-table-column align="center" label="线程名" width="205">
        <template v-slot="scope">
          <span>{{ scope.row.threadName }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态" min-width="75">
        <template v-slot="scope">
          <span>{{ scope.row.threadState }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="阻塞次数" min-width="75">
        <template v-slot="scope">
          <span>{{ scope.row.blockedCount }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="被等次数" min-width="75">
        <template v-slot="scope">
          <span>{{ scope.row.waitedCount }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import useThreaddumpData from './composables/useThreaddumpData'

const { list, listLoading, getData, handleFilter } = useThreaddumpData()
</script>

<script>
export default {
  name: "ThreaddumpManagement"
}
</script>
<style></style>
