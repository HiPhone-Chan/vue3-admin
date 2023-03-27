<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" @click="getData">
        <el-icon style="margin-right: 10px;">
          <Refresh />
        </el-icon>{{ $t('table.refresh') }}
      </el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="给我一点时间" border fit highlight-current-row
      style="width: 100%">
      <el-table-column align="center" :label="$t('table.id')" width="65" type="index" />
      <el-table-column align="center" label="key" width="315">
        <template v-slot="scope">
          <span>{{ scope.row.key }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="properties" min-width="115">
        <template v-slot="scope">
          <el-table :data="scope.row.properties">
            <el-table-column align="center" label="key" width="215">
              <template v-slot="scope">
                <span>{{ scope.row.key }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="val">
              <template v-slot="scope">
                <span>{{ scope.row.val }}</span>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script setup>
import useEnvData from './composables/useEnvData'

const { list, listLoading, getData } = useEnvData()
</script>

<script>
export default {
  name: 'ConfigurationManagement'
}
</script>

<style></style>
