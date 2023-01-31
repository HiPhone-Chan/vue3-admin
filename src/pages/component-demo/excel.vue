<template>
  <div class="app-container">
    filename: <el-input class="filter-item" v-model="filename"
      placeholder="Please enter the file name" style="width:345px;" />
    <book-type-option class="filter-item" v-model="bookType"
      style="margin-left:10px" />
    <el-button class="filter-item" style="margin-left: 10px"
      :loading="downloadLoading" type="primary" @click="handleDownload">
      Export
    </el-button>

    <upload-excel-component style="margin-top:20px"
      :on-success="handleUploadSuccess" :before-upload="beforeUpload" />
    <el-table :data="tableData" border highlight-current-row
      style="width: 100%;margin-top:20px;">
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item"
        :label="item" />
    </el-table>
  </div>
</template>

<script>
import * as XLSX from 'xlsx'
import UploadExcelComponent from '@/components/Excel/Upload.vue'
// options components
import BookTypeOption from '@/components/Excel/BookTypeOption.vue'

export default {
  name: 'ExcelDemo',
  components: { UploadExcelComponent, BookTypeOption },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      downloadLoading: false,
      filename: 'demo',
      bookType: 'xlsx'
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleUploadSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    },
    handleDownload() {
      // https://www.npmjs.com/package/xlsx
      this.downloadLoading = true
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.aoa_to_sheet([
        ["A1", "B1", "C1"],
        ["A2", "B2", "C2"],
        ["A3", "B3", "C3"]
      ]);
      XLSX.utils.book_append_sheet(workbook, worksheet, "sheetName");
      XLSX.writeFile(workbook, this.filename + "." + this.bookType);
      this.downloadLoading = false
    }
  }
}
</script>
