<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" @click="getData">
        <el-icon style="margin-right: 10px;">
          <el-icon-refresh />
        </el-icon>{{ $t('table.refresh') }}
      </el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="给我一点时间" border fit highlight-current-row
      style="width: 100%">
      <el-table-column align="center" :label="$t('table.id')" width="65" type="index" />
      <el-table-column align="center" label="key" width="135">
        <template v-slot="scope">
          <span>{{ scope.row.key }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态" width="75">
        <template v-slot="scope">
          <span>{{ scope.row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="详情" min-width="115">
        <template v-slot="scope">
          <span>{{ scope.row.details }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import useHealthData from './composables/useHealthData'

const { list, listLoading, getData } = useHealthData()
</script>

<script>
export default {
  name: "HealthManagement"
}
</script>
<style></style>
