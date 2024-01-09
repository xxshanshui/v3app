<template>
  <div>
    <!-- <div>{{ userInfo.name }}</div>
    <div>{{ userInfo.age }}</div>


    <el-button @click="qwe">1</el-button> -->

    <el-container>
      <el-aside :width="show == true ? '180px' : '50px'">
        <as></as>
      </el-aside>
      <el-container>
        <el-header>
          <itemtop @ww="qq" :show="show"></itemtop>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useInfoStore } from '../store/index'
import as from '../layout/as.vue'
import itemtop from '../layout/itemtop.vue'
import { getImg, login } from '../API/http'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
const router = useRouter()
const route = useRoute()
const userInfo = useInfoStore()
const show = ref(true)

const qq = () => {
  console.log('qweqwe')

  show.value = !show.value
}

// let {name,age } = storeToRefs(useInfoStore())
// console.log(name,age);

// const qwe = ()=>{

// }
</script>
