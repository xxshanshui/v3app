<template>
  <div>
    <el-menu
      style="height: 100vh"
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
    >
      <el-menu-group>
        <el-menu-item index="/dashboard">
          <el-icon><location /></el-icon>
           首页</el-menu-item>
      </el-menu-group>
      <el-menu-group>
        
        <el-menu-item :index="item.path" v-for="(item, index) in menus" :key="index" v-show="!item.redirect">
          <el-icon>{{ item.children[0].meta.icon }}</el-icon>
          {{ item.children[0].meta.title }}
        </el-menu-item>
      </el-menu-group>
      <el-sub-menu :index="item.path" v-for="(item, index) in menus" :key="index" v-show="item.redirect">
        <template #title>
          <!-- <el-icon>{{ item.children.meta.icon }}</el-icon> -->
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="'/' + ele.path" v-for="(ele, index) in item.children" :key="index">{{
            ele.meta.title
          }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { getImg, login, layout } from '../API/http'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const menus = ref([])
const getlayout = () => {
  layout().then((res) => {
    console.log(res)
    menus.value = res
  })
}
getlayout()
</script>
