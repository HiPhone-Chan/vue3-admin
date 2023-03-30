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
      <el-table-column align="center" :label="$t('table.name')" min-width="215">
        <template v-slot="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="配置级别" width="95">
        <template v-slot="scope">
          <span>{{ scope.row.configuredLevel }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="生效级别" width="95">
        <template v-slot="scope">
          <span>{{ scope.row.effectiveLevel }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('table.actions')" class-name="small-padding fixed-width">
        <template v-slot="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)">
            级别
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialog.visible">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="70px"
        style="width: 400px; margin-left:50px;">
        <template v-if="dialog.status == STATUS_UPDATE">
          <el-form-item :label="$t('table.name')">
            <el-input v-model="temp.name" type="text" placeholder="key" disabled />
          </el-form-item>
          <el-form-item label="级别">
            <el-select v-model="temp.level" placeholder="级别">
              <el-option v-for="item in levelsOptions" :key="item" :label="item" :value="item" />
            </el-select>
          </el-form-item>
        </template>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button v-if="dialog.status == STATUS_UPDATE" type="primary" @click="updateData">
            {{ $t('table.confirm') }}
          </el-button>
          <el-button @click="dialog.visible = false">{{ $t('table.cancel') }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import useLogsDialog from './composables/useLogsDialog'
import useLogsData from './composables/useLogsData'

const { temp, dialog } = useLogsDialog()
const { list, listLoading, levelsOptions, STATUS_UPDATE, getData,
  handleUpdate, updateData } = useLogsData(temp, dialog, 'dataForm')
</script>

<script>
export default {
  name: "LogsManagement",
}
</script>

<style></style>
