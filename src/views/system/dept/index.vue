<template>
  <div>
    <div class="top">
      <el-input v-model="ppp.name" placeholder="输入部门名称搜索" clearable />
      <Mentime style="margin-right: 10px"></Mentime>
      <el-select v-model="value" class="m-2" placeholder="状态">
        <el-option style="width: 100px" key="item.value" label="label" value="value" />
      </el-select>
      <el-button type="success" @click="sea">
        <el-icon>
          <Search />
        </el-icon>
        搜索
      </el-button>
      <el-button type="warning">
        <el-icon>
          <RefreshLeft />
        </el-icon>
        重置
      </el-button>
    </div>
    <div class="top1">
      <el-button type="primary">
        <el-icon>
          <Plus />
        </el-icon>
        新增
      </el-button>
      <el-button type="success">
        <el-icon>
          <EditPen />
        </el-icon>
        修改
      </el-button>
      <el-button type="danger" @click="delall">
        <el-icon>
          <DeleteFilled />
        </el-icon>
        删除
      </el-button>
      <el-button @click="xlssl" type="warning">
        <el-icon>
          <Download />
        </el-icon>
        导出
      </el-button>
    </div>
    <div class="tab">
      <cdtable :tableData="tableData" @del="del" @xzsc="xzsc"></cdtable>
    </div>
  </div>
</template>
<script setup lang="ts">
import { xlsx } from '@/utils/xlsx'
import { queryErtree, queryTree, querysearchdata } from '@/API/http'
import { useRouter, useRoute } from 'vue-router'
import { ref, reactive } from 'vue'
import { Delete, EditPen } from '@element-plus/icons-vue'
import Mentime from '../../../components/system/cduser/cdMentime.vue'
import cdtable from '../../../components/system/cduser/cdtable.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ElNotification } from 'element-plus'
import { bmdel } from '../../../API/http'

const bmxlsl = {
  name: '名称',
  deptSort: '排序',
  enabled: '状态',
  createTime: '创建日期'
}

const value = ref('')
const tableData = ref([])

/**存放选中删除的key */
const iqd = ref([])
/**可以说没有用 */
const dels = ref([])

/**列表参数 */
const ppp = reactive({
  page: 0,
  size: 10,
  name: ''
})

/**搜索 */
const sea = () => {
  console.log(1)

  getbm()
}
/**列表 */
const getbm = () => {
  queryTree(ppp).then((res) => {
    console.log(res, 'qweqw')
    tableData.value = res.content
  })
}
/**列表删除 */
const del = () => {
  getbm()
}

/**选中删除节点 */
const xzsc = (val) => {
  dels.value = val
  val.forEach((i) => {
    const index = iqd.value.find((item) => {
      return item == i.id
    })
    if (!index) {
      iqd.value.push(i.id)
    }
  })
}
/**选中删除事件 */
const delall = () => {
  ElMessageBox.confirm(`确认强退选中的${iqd.value.length}个用户?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      bmdel(iqd.value).then((res) => {
        // console.log(res)
        ElNotification({
          title: '演示数据，禁止删除',
          type: 'error'
        })
        getbm()
      })
    })
    .catch(() => {})
}
/**部门导出事件 */
const xlssl = () => {
  xlsx(tableData.value, bmxlsl, '部门用户')
  getbm()
}
getbm()
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  // width: 60%;

  .el-input {
    margin-right: 10px;
    width: 200px;
  }
}

.top1 {
  margin-top: 10px;
}
</style>
