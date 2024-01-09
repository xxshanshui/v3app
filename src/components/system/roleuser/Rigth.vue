<template>
	<div>
		<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
  </div>
	<el-tree :data="text" :props="props" :load="loadNode" lazy show-checkbox />
</el-card>
	</div>
</template>

<script setup lang="ts">
import * as api from '@/API/http'
import * as TS from '@/utils/defind'
import { defineProps } from 'vue';
import { ref } from 'vue';
import type Node from 'element-plus/es/components/tree/src/model/node'
const props = {
  label: 'title',
  children: 'zones',
  isLeaf: 'leaf',
}
// const pida=ref({
	const pid=ref<number>(0)
// })
const proprs=defineProps({
	text:{
		type:Array,
	}
})




const loadNode = async (node: Node, resolve: (data: TS.Tree[]) => void) => {
  if (node.data.id !== undefined) {
		console.log(node.data.id,'idididi');

		let res = await api.lazygetAPI({pid:node.data.id})
			console.log(res,'lazyAPI');
			const data:TS.Tree[]=res.data
			resolve(data)
  }
}


</script>

<style lang="scss" scoped>

</style>