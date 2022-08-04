<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" @click="handleFilter">
        <el-icon style="margin-right: 10px;">
          <Refresh />
        </el-icon>{{ $t('table.refresh') }}
      </el-button>
      <el-radio-group v-model="dataSelect" class="filter-item"
        style="margin-left: 20px;" @change="getData">
        <el-radio :label="'config'">配置</el-radio>
        <el-radio :label="'env'">环境</el-radio>
      </el-radio-group>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="给我一点时间"
      border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" :label="$t('table.id')" width="65"
        type="index" />
      <el-table-column align="center" label="key" width="215">
        <template v-slot="scope">
          <span>{{ scope.row.key }}</span>
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
import { Refresh } from '@element-plus/icons-vue'
import useConfigurationData from './composables/useConfigurationData'

const { dataSelect, list, listLoading, getData, handleFilter } = useConfigurationData()
</script>

<script>
export default {
  name: 'ConfigurationManagement'
}
</script>

<style>
</style>
