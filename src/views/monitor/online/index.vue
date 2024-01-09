<template>
  <div>
    <Userseach @seach="seach" :params="params" :show="show" />
    <Usertop @status="status" @Refreshpage="Refreshpage" @manage="manage" @delall="delall"  :qqwwe="qqwwe" :qwelist="qwelist" @xlsxs="xlsxs" />
    <Useritem :qwelist="qwelist" @del="del" @zn="zn" />
    <Userpage
      :total="total"
      :params="params"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    />
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload, Download, Refresh, Grid } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ElNotification } from 'element-plus'
import { ref, reactive } from 'vue'
import { Userr } from '@/utils/defind'
import * as API from '@/API/http'
import Userseach from '@/components/Userr/Userseach.vue'
import Usertop from '@/components/Userr/Usertop.vue'
import Useritem from '@/components/Userr/Useritem.vue'
import Userpage from '@/components/Userr/Userpage.vue'
/**搜索显示隐藏状态*/
const show = ref(false)
/**用户列表总数据 */
const qwelist = ref([])
/**用户列表数据的长度 */
const total = ref(0)
/**存放选中删除的key */
const isd =ref([])
/**可以说没有用 */
const dels = ref([])
/**用户接口参数 */
const params = reactive<Userr>({
  page: 1,
  size: 10,
  username: ''
})
const qqwwe = {
  userName: '用户名',
  nickName: '用户昵称',
  dept: '部门',
  ip: '登录IP',
  address: '登陆地点',
  browser: '浏览器',
  loginTime: '登陆时间'
}
/***用户列表数据 */
const getlist = () => {
  API.User({ page: params.page, size: params.size, username: params.username }).then((res) => {
    // console.log(res)
    qwelist.value = res.content
    total.value = res.totalElements
  })
}
/**导出xlsx */
// const xlsx = () => {
//   xlsx(qwelist.value, qwe, '用户')
// }
/**删除事件 */
const del = (key: string) => {
  const ids = ref([])
  if (key instanceof Array) {
    key.forEach((val) => {
      ids.value.push(val.key)
    })
  } else ids.value.push(key)
  API.Del(ids.value)
    .then((res) => {
      ElNotification({
        title: '演示数据，禁止删除',
        type: 'error'
      })
    })
    .catch((error) => {
      console.log(error)
    })
  getlist()
}
/**分页方法*/
const handleSizeChange = (val: number) => {
  params.size = val
  getlist()
}
const handleCurrentChange = (val: number) => {
  params.page = val
  getlist()
}
const status = () => {
  show.value = !show.value
}
/**用户列表数据刷新*/
const Refreshpage = () => {
  getlist()
}
/**显示table各种信息事件 */
const manage = () => {}
/**选中节点 */
const zn = (val)=>{
  dels.value = val
  val.forEach((i)=>{
    const index = isd.value.find((item)=>{
      return item==i.key
    })
    if(!index){
      isd.value.push(i.key)
    }
  })
}
/**选中强退事件 */
const delall = () => {
  
  ElMessageBox.confirm(
    `确认强退选中的${isd.value.length}个用户?`, 
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {  
      API.Del(isd.value).then((res) => {
      // console.log(res)
      ElNotification({
        title: '演示数据，禁止删除',
        type: 'error'
      })
  getlist()
    })
    })
    .catch(() => {
    })
}
/**查询事件 */
const seach = (username: string) => {
  console.log(username)
  getlist()
}

const xlsxs =()=>{
getlist()
}

getlist()
</script>
<style lang="scss">
a {
  color: aqua;
}
.top {
  display: flex;
}
.el-input {
  width: 200px;
  margin-right: 10px;
}
.topx {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.el-table {
  margin-top: 30px;
}
</style>
