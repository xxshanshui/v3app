<template>
  <div>
    <div class="top" v-if="show == false">
      <el-input v-model="pro.params.username" placeholder="输入用户名查询" />
      <el-button type="success" @click="seach">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload, Download, Refresh, Grid } from '@element-plus/icons-vue'
import { defineEmits, defineProps ,ref} from 'vue'
const emits = defineEmits()
const pro = defineProps({
  show: Boolean,
  params:Object
})
const username = ref('')

/**查询事件 */
const seach = () => {
  console.log(username.value)
  emits('seach', username.value)
}
</script>
