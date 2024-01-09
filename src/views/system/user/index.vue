<template>
  <div class="use">
    <div class="buttom">
      <el-row :gutter="23" justify="space-between">
        <el-col :span="5">
          <div class="grid-content ep-bg-purple">
            <!-- 树形结构 -->
            <usertree @djtree="djtree"></usertree>
          </div>
        </el-col>

        <el-col :span="18">
          <div class="grid-content ep-bg-purple">
            <userseach @namesearch="namesearch"></userseach>
            <div class="btn">
              <el-button type="primary" :icon="Plus" @click="add">新增</el-button>
              <el-button type="success" :icon="EditPen" @click="edit">修改</el-button>
              <el-button type="danger" :icon="Delete" @click="delall">删除</el-button>
              <el-button type="warning" :icon="Download" @click="xlsxss">导出</el-button>
              <el-button type="primary" :icon="RefreshLeft" @click="Apassword">重置密码</el-button>
            </div>
            <!-- 表格 -->
            <usertabel :tableData="tableData" @del="del" @qqqq="qqqq"></usertabel>
            <!-- 分页 -->
            <div class="paging">
              <userpage
                :totalElements="totalElements"
                :params="params"
                @handleCurrentChange="handleCurrentChange"
                @handleSizeChange="handleSizeChange"
              >
              </userpage>
            </div>
          </div>
        </el-col>
      </el-row>
      <userdialog :dialogFormVisible="dialogFormVisible" @qd="qd" @qx="qx"></userdialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, reactive } from 'vue'
import { Plus, Delete, EditPen, RefreshLeft, Download } from '@element-plus/icons-vue'
import { querynametable, querydel } from '@/API/http'
import { xlsx } from '@/utils/xlsx'
import usertree from '@/components/system/yhuser/usertree.vue'
import userseach from '@/components/system/yhuser/userseach.vue'
import usertabel from '@/components/system/yhuser/usertabel.vue'
import userdialog from '@/components/system/yhuser/userdialog.vue'

// 右侧表格
const dialogFormVisible = ref(false)
/**表格数据 */
const tableData = ref([])
/**存放选中删除的id */
const idsq = ref([])
/**可以说没有用 */
const dels = ref([])
const totalElements = ref(0)
const params = reactive({
  page: 0,
  size: 10,
  blurry: '',
  enabled: true,
  createTime: [],
  deptId: ''
})

/**导出数据列表 */
const listt = {
  userName: '用户名',
  nickName: '用户昵称',
  gender: '性别',
  phone: '电话',
  email: '邮箱',
  dept: '部门',
  enabled: '状态',
  createTime: '创建日期',
}



/**选中删除的节点 */
const qqqq = (val)=>{
  dels.value = val
  val.forEach((i)=>{
    const index = idsq.value.find((item)=>{
      return item==i.id
    })
    if(!index){
      idsq.value.push(i.id)
    }
  })
}
/**修改显示模态框事件 */
const edit = () => {}
/**选中删除事件 */
const delall = () => {
  ElMessageBox.confirm(
    `确认强退选中的${idsq.value.length}个用户?`,
   '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
  .then(() => {  
  console.log(idsq.value,'1232312312');
  
    querydel(idsq.value).then((res) => {
    settable()
    }) 
   })
}
/**导出事件 */  
const xlsxss = () => {
  xlsx(tableData.value, listt, '用户')
  settable()
}
/**重置密码事件 */
const Apassword = () => {}
/**新增显示模态框 */
const add = () => {
  dialogFormVisible.value = true
}
/**列表删除事件 */
const del = (id: number) => {
  const ids = ref([])
  if (id instanceof Array) {
    id.forEach((val) => {
      ids.value.push(val.id)
    })
  } else ids.value.push(id)
  querydel(ids.value).then((res) => {
    // console.log(res)
  })
  settable()
}
const djtree = (val: number) => {
  params.deptId = val
  //   querynametable(params).then((res) => {
  //     tableData.value = res.content
  //     totalElements.value = res.totalElements
  //   })
  settable(params)
}
//右侧表格接口
const settable = () => {
  querynametable(params).then((res) => {
    console.log(res, 'tabkkkkk')
    tableData.value = res.content
    totalElements.value = res.totalElements
  })
}
const handleCurrentChange = (val: number) => {
  params.page = val
  settable()
}
const handleSizeChange = (val: number) => {
  params.size = val
  settable()
}
// 表格搜索
const namesearch = (val) => {
  params.blurry = val.blurry
  params.enabled = val.enabled
  params.createTime = val.createTime
  settable(params)
  // querynametable(params).then((res) => {
  //   console.log(res, '55555')
  //   tableData.value = res.content
  //   totalElements.value = res.totalElements
  // })
}
/**关闭模态框事件 */
const qx = () => {
  dialogFormVisible.value = false
}
const qd = () => {
  dialogFormVisible.value = false
}
settable()

</script>
<style lang="scss" scoped>
.use {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px;
}
.btn {
  margin-bottom: 10px;
}
</style>
