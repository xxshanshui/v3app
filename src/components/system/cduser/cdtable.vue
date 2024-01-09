<template>
  <div>
    <div class="tab">
      <el-table
      @selection-change="xzsc" 
        :data="pro.tableData"
        style="width: 100%"
        row-key="id"
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="deptSort" label="排序"></el-table-column>
        <el-table-column prop="enabled" label="状态">
          <template #default="scope">
            <el-switch v-model="value1" />
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建日期" />
        <el-table-column  label="操作">
          <template #default="scope">
            <el-button type="primary" :icon="EditPen" @click="edit(scope.row.id)"></el-button>
          <el-button type="danger"  :icon="Delete" @click="dell(scope.row.id)"></el-button>
          </template>

        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Delete, EditPen, RefreshLeft, Download } from '@element-plus/icons-vue'
import { queryErtree, queryTree, querysearchdata } from '@/API/http'
import type Node from 'element-plus/es/components/tree/src/model/node'
import { ref, reactive,defineProps,defineCustomElement } from 'vue'
import { bmdel } from '../../../API/http'
const value1 =ref('')
const pro = defineProps({
  tableData:Array
})
const emit= defineEmits()
interface Tree {
  name: string
  leaf?: boolean
}

const load = (node: Node, resolve: (data: Tree[]) => void) => {
	console.log(node.id ,'node.level ');
	// 第二层
	if(node.id){
		queryErtree(node.id).then((res)=>{
     console.log(res,'err');
		 const data: Tree[]=res.content
		 resolve(data)
	})
	}
}


/**编辑 */
const edit =()=>{

}
/**删除 */
const dell = (id:number)=>{
  const ids = ref([])
  if (id instanceof Array) {
    id.forEach((val) => {
      ids.value.push(val.id)
    })
  } else ids.value.push(id)
  bmdel(ids.value).then((res) => {
    // console.log(res)
  })  
  emit('del')
}
/**选中节点 */
const xzsc = (val)=>{

  emit('xzsc',val)

}
</script>
