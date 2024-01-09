<template>
  <div>
    <!-- 用户列表分页 -->
    <el-pagination
      v-model:current-page="propos.page"
      v-model:page-size="propos.size"
      :page-sizes="[3, 5, 7, 10]"
      layout="total, prev, pager, next,sizes"
      :total="propos.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload, Download, Refresh, Grid } from '@element-plus/icons-vue'
import { defineEmits, defineProps } from 'vue'
const propos = defineProps({
    page:Number,
    size:Number,
    total:Number,

})
const emits = defineEmits()
/**分页方法*/
const handleSizeChange = (val: number) => {
    emits('handleSizeChange',val)
  //   console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    emits('handleCurrentChange',val)
  //   console.log(`current page: ${val}`)
}
</script>
