<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" :placeholder="$t('table.search')"
        style="width: 200px;" class="filter-item" @keyup.enter="handleFilter" />
      <el-button class="filter-item" type="primary" @click="handleFilter">
        <el-icon style="margin-right: 10px;">
          <Search />
        </el-icon>{{ $t('table.search') }}
      </el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="给我一点时间"
      border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" :label="$t('table.id')" width="65"
        type="index" />
      <el-table-column align="center" label="用户" width="155">
        <template v-slot="scope">
          <span>{{ scope.row.createdBy }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="方法" width="95">
        <template v-slot="scope">
          <span>{{ scope.row.method }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="路径" min-width="115">
        <template v-slot="scope">
          <span>{{ scope.row.path }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="时间" width="165">
        <template v-slot="scope">
          <span>{{ formatTime(scope.row.createdDate) }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" v-model:page="listQuery.page"
      v-model:limit="listQuery.size" @pagination="getData" />

  </div>
</template>

<script setup>
import Pagination from '@/components/Pagination/index.vue'
import { Search } from '@element-plus/icons-vue'
import { formatAuthorities, roleOptions, createRoleOptions } from '@/utils/app-option'
import useOperationLogData from './composables/useOperationLogData'
import { formatTime } from '@/utils'

const { list, total, listLoading, listQuery,
  getData, handleFilter } = useOperationLogData()

</script>

<script>
export default {

}
</script>

<style>
</style>
