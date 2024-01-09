<template>
  <div>
    <el-icon @click="qq"><Fold /></el-icon>
    <!-- <el-icon ><Expand /></el-icon> -->
    <!-- <el-icon @click="qwe.show = !qwe.show" :class="qwe.show == true ? 'Fold' : 'Expand'"></el-icon> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
// const qwe = defineProps({
//   show: true
// })
const emits = defineEmits(['ww'])
const qq = () => {
  emits('ww')
}
</script>
