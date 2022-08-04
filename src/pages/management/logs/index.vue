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
      <el-table-column align="center" label="key" min-width="215">
        <template v-slot="scope">
          <span>{{ scope.row.key }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="配置" width="95">
        <template v-slot="scope">
          <span>{{ scope.row.configuredLevel }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="生效" width="95">
        <template v-slot="scope">
          <span>{{ scope.row.effectiveLevel }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('table.actions')"
        class-name="small-padding fixed-width">
        <el-button type="primary" @click="handleUpdate(scope.row)">
          级别</el-button>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialog.visible">
      <el-form ref="dataForm" :model="temp" label-position="left"
        label-width="70px" style="width: 400px; margin-left:50px;">
        <template v-if="dialogStatus == 'update'">
          <el-form-item :label="$t('table.id')">
            <el-input v-model="temp.id" type="text" placeholder="id" disabled />
          </el-form-item>
        </template>

      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialog.visible = false">{{ $t('table.cancel') }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { Refresh } from '@element-plus/icons-vue'
import useLogsData from './composables/useLogsData'
import useLogsDialog from './composables/useLogsDialog'

const { list, listLoading, getData, handleFilter } = useLogsData()
const { temp, dialog, handleUpdate } = useLogsDialog()
</script>

<script>
import { changeLevel } from '@/api/log'

export default {
  name: "LogsManagement",
  methods: {
    updateData() {
      this.$refs['dataForm'].validate(async valid => {
        if (valid) {
          await changeLevel(this.temp)
          this.getData()
          this.dialogVisible = false
        }
      })
    }
  }
}
</script>

<style>
</style>
