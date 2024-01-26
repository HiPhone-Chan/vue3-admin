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
      <el-table-column align="center" label="prefix" width="315">
        <template v-slot="scope">
          <span>{{ scope.row.prefix }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="properties" min-width="115">
        <template v-slot="scope">
          <el-row v-for="key in Object.keys(scope.row.properties)" :key="key">
            <el-col :span="4">{{ key }}</el-col>
            <el-col :span="20">
              {{ scope.row.properties[key] }}
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script setup>
import useConfigurationData from './composables/useConfigurationData'

const { list, listLoading, getData } = useConfigurationData()
</script>

<script>
export default {
  name: 'ConfigurationManagement'
}
</script>

<style></style>
