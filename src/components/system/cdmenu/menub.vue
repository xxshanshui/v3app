<template>
  <div class="one">
    <el-input style="width: 14%" placeholder="输入名称或者邮箱搜索" />
    <el-date-picker
      style="width: 20%; margin: 0 10px"
      type="daterange"
      unlink-panels
      range-separator=":"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :shortcuts="shortcuts"
    />
    <el-button style="margin-left: 10px; color: white" color="#13ce66" :icon="Search">搜索</el-button>
    <el-button style="color: white" color="#ffba00" :icon="RefreshLeft">重置</el-button>
  </div>
  <div class="two">
    <div class="lefy">
      <el-button style="color: white" color="#1890ff" :icon="Plus">新增</el-button>
      <el-button style="color: white" color="#1890ff" :icon="Plus">新增</el-button>
      <el-button style="color: white" color="#13ce66" :icon="EditPen">修改</el-button>
      <el-button style="color: white" color="#ff4949" :icon="Delete">删除 <svg-icon></svg-icon></el-button>
    </div>
    <div class="right">
      <el-button-group class="ml-4">
        <el-button style="border: 1px solid #ccc" color="#ffffff" :icon="Search" />
        <el-button type="default" :icon="Refresh" />
        <el-button type="default" :icon="Grid" />
      </el-button-group>
    </div>
  </div>
  <div>

  </div>
</template>
<script setup lang="ts">
import { xlsx } from '@/utils/xlsx'
import { Calendar, Search, RefreshLeft, Plus, EditPen, Delete, Download, Refresh, Grid } from '@element-plus/icons-vue'
import { ref, reactive, defineProps, defineEmits } from 'vue'
const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
</script>
<style lang="scss" scoped>
.two {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
}
</style>
