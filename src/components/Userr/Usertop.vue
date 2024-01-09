<template>
  <div>
    <div class="topx">
      <div>
        <el-button type="danger" :icon="Delete" @click="delall">强退</el-button>
        <el-button type="warning" :icon="Download" @click="xlsxs">导出</el-button>
      </div>
      <div>
        <el-button :icon="Search" @click="status"></el-button>
        <el-button :icon="Refresh" @click="Refreshpage"></el-button>
        <el-button :icon="Grid" @click="manage"></el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload, Download, Refresh, Grid } from '@element-plus/icons-vue'
import { xlsx } from '@/utils/xlsx'
import { defineEmits, defineProps } from 'vue'
const list = defineProps(['qqwwe','qwelist'])
// const qwe = {
//   userName: '用户名',
//   nickName: '用户昵称',
//   dept: '部门',
//   ip: '登录IP',
//   address: '登陆地点',
//   browser: '浏览器',
//   loginTime: '登陆时间'
// }
const emits = defineEmits()
/**控制搜索显示隐藏 */
const status = () => {
  emits('status')
}
const Refreshpage = () => {
  emits('Refreshpage')
}
const manage = () => {
  emits('manage')
}
const delall = () => {
  emits('delall')
}

const xlsxs = () => {
  console.log(1111111111);
 xlsx(list.qwelist, list.qqwwe, '用户')
 emits('xlsxs')
}

</script>
