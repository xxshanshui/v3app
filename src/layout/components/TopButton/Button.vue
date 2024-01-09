<template>
    <div>
      <div class="top">
        <el-input v-model="user" placeholder="输入名称或者描述搜索" clearable />
              <div class="rihiz">
                  <el-date-picker
          v-model="date"
          type="date"
          placeholder="开始日期 ：结束日期"
          clearable
        />
              </div>
  
        <el-button
          @click="sear"
          style="background-color: #13ce66; border: none; color: #fff"
          ><el-icon><ElementPlusIconsVue.Search /></el-icon>搜索</el-button
        >
        <el-button @click="rolecz" style="background-color: #ffba00; border: none; color: #fff"
          ><el-icon><ElementPlusIconsVue.RefreshLeft /></el-icon>重置</el-button
        >
      </div>
  
      <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline" >
      <el-form-item>
  
      </el-form-item>
          <el-form-item>
  
      </el-form-item>
          <el-form-item>
        <el-button @click="search" style="background-color: #13ce66; border: none; color: #fff;"><el-icon><ElementPlusIconsVue.Search /></el-icon>搜索</el-button>
        <el-button style="background-color: #ffba00; border: none; color: #fff;"><el-icon><ElementPlusIconsVue.RefreshLeft
   /></el-icon>重置</el-button>
      </el-form-item>
          </el-form> -->
      <div class="bun">
        <div class="left">
          <el-button
            @click="add"
            style="background-color: #1890ff; border: none; color: #fff"
            ><el-icon><ElementPlusIconsVue.Plus /></el-icon>新增</el-button
          >
          <el-button style="background-color: #13ce66; border: none; color: #fff"
            ><el-icon><ElementPlusIconsVue.EditPen /></el-icon>修改</el-button
          >
          <el-button @click="Delapi" style="background-color: #ff4949; border: none; color: #fff"
            ><el-icon><ElementPlusIconsVue.Delete /></el-icon>删除</el-button
          >
          <el-button @click="xlelx" style="background-color: #ffba00; border: none; color: #fff"
            ><el-icon><ElementPlusIconsVue.Download /></el-icon>导出</el-button
          >
        </div>
        <div class="rigth">
          <button>
            <el-icon><ElementPlusIconsVue.Search /></el-icon>
          </button>
          <button>
            <el-icon><ElementPlusIconsVue.Refresh /></el-icon>
          </button>
          <button>
            <el-icon><ElementPlusIconsVue.Grid /></el-icon>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import * as ElementPlusIconsVue from '@element-plus/icons-vue'
  import { ref, defineEmits } from 'vue'
  const emits = defineEmits()
  const user = ref<string>('')
  const date = ref<string>('')
  const formInline = ref({
    user: '',
    date: ''
  })
  /**角色新增 */
  const add = () => {
    emits('add')
  }
  /**角色搜索 */
  const sear = () => {
      console.log(11111);
    emits('sear', user.value)
  }
  /**角色导出 */
  const xlelx = ()=>{
    emits('xleex')
  }
  /**角色删除 */
  const Delapi =()=>{
      emits('Delall')
  }
  /**角色重置 */
  const rolecz = ()=>{
    emits('rolecz')
  }
  </script>
  
  <style lang="scss" scoped>
  .el-form-item {
    margin-right: 10px;
  }
  .bun {
    display: flex;
    justify-content: space-between;
    .rigth {
      button {
        height: 32px;
        text-align: center;
        box-sizing: border-box;
        background-color: var(--el-button-bg-color);
        padding: 8px 15px;
        border: 1px solid #ccc;
        border-radius: 2px;
        color: #979696;
      }
    }
  }
  .top{
      display: flex;
      margin-bottom: 20px;
      .el-input{
          width: 200px;
      }
      .rihiz{
          margin: 0px 10px;
      }
  }
  </style>
  