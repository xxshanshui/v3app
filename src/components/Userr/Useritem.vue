<template>
    <div>
  

     <!-- tab桌子 -->
     <el-table ref="multipleTableRef" :data="qwelist" style="width: 100%" @selection-change="zn" >
      <el-table-column type="selection" width="55" />
      <el-table-column label="用户名" property="userName" width="120"> </el-table-column>
      <el-table-column property="nickName" label="用户昵称" width="120"></el-table-column>
      <el-table-column property="dept" label="部门" show-overflow-tooltip></el-table-column>
      <el-table-column property="ip" label="登录IP" show-overflow-tooltip></el-table-column>
      <el-table-column property="address" label="登陆地点" show-overflow-tooltip></el-table-column>
      <el-table-column property="browser" label="浏览器" show-overflow-tooltip></el-table-column>
      <el-table-column property="loginTime" label="登陆时间" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" show-overflow-tooltip>

        <!-- <el-popconfirm title="确定强制退出该用户吗?"> -->
        <template #default="scope">
      <el-button  @click="del(scope.row.key)">强推</el-button>

          <!-- <a @click="del(scope.row.key)">强推</a> -->
        </template>
  <!-- </el-popconfirm> -->

      </el-table-column>
    </el-table>


    </div>
</template>

<script setup lang='ts'>
import { Delete, Edit, Search, Share, Upload, Download, Refresh, Grid } from '@element-plus/icons-vue'
import { defineEmits ,defineProps} from 'vue';
const propos = defineProps({
  qwelist:Array
})
const emits = defineEmits()
const del=(key)=>{
    emits('del',key)
}

const zn = (val)=>{
  emits('zn',val)

}
</script>
