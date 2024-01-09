<template>
  <div>
    <Top @add="add" @sear="sear" @Delall="Delall" @xleex="xleex" @rolecz="rolecz"></Top>
    <div class="centre">
      <ListRol class="Listleft" :list="list" @Roledek="Roledek" @xzdelall="xzdelall"></ListRol>
      <Rigth class="Rigth" :text="text"></Rigth>
    </div>
    <Addandmodify
      v-if="dialogVisible"
      @confirm="confirm"
      @cancel="cancel"
      :dialogVisible="dialogVisible"
    ></Addandmodify>
  </div>
</template>

<script setup lang="ts">
import { xlsx } from '@/utils/xlsx'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ElNotification } from 'element-plus'
import Rigth from '@/components/system/roleuser/Rigth.vue'
import Top from '@/layout/components/TopButton/Button.vue'
import * as API from '@/API/http'
import ListRol from '@/components/system/roleuser/ListRol.vue'
import { reactive, ref } from 'vue'
import Addandmodify from '@/components/system/roleuser/Addandmodify.vue'
const inof = reactive({
  page: 0,
  size: 10,
  sort: 'level,asc',
  blurry: ''
})
/**xlsl表头 */
const rolexlsl = {
  name: '名称',
  dataScope:'数据权限',
  level: '角色级别',
  description: '描述',
  createTime: '创建日期'
}
/**用来存放角色的id值 */
const KeyId = ref([])
/**无用 */
const Tablist = ref([])

const dialogVisible = ref<boolean>(false)
const pida = ref({
  pid: 0
})
const text = ref([])
const list = ref([])



const getrolesAPI = async () => {
  let res = await API.rolesAPI(inof)
  console.log(res,'ressssssss');
  list.value = res.content
}
/**搜索 */
const sear = (user: string) => {
  inof.blurry = user
console.log(inof.blurry,'user');
  getrolesAPI()
}
const getlazyAPI = async () => {
  let res = await API.lazyAPI(pida.value)
  // console.log(res,'lazyAPI');
  text.value = res
}
getlazyAPI()

const add = () => {
  dialogVisible.value = true
}
const confirm = () => {
  dialogVisible.value = false
}
const cancel = () => {
  dialogVisible.value = false
}
/**角色删除事件 */
const Roledek = (key: number) => {
  const keys = ref([])
  if (key instanceof Array) {
    key.forEach((val) => {
      keys.value.push(val.key)
    })
  } else keys.value.push(key)
  API.rolesdel(keys.value).then((res) => {
    ElNotification({
      title: '演示数据，禁止删除',
      type: 'error'
    })
    getrolesAPI()
  })
}
/**角色选中删除节点 */
const xzdelall = (val) => {
  Tablist.value = val
  val.forEach((i) => {
    const index = KeyId.value.find((item) => {
      return item == i.id
    })
    if (!index) {
      KeyId.value.push(i.id)
    }
  })
}
/**选中删除事件 */
const Delall = () => {
  ElMessageBox.confirm(`确认强退选中的${KeyId.value.length}个用户?`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    API.rolesdel(KeyId.value).then((res) => {
      ElNotification({
        title: '演示数据，禁止删除',
        type: 'error'
      })
      getrolesAPI()
    })
  })
}

/**导出事件 */
const xleex = () => {
	xlsx(list.value,rolexlsl,'角色')
getrolesAPI()
}
/**角色重置事件 */
const  rolecz = ()=>{
	inof.blurry.value = ''
	
}
getrolesAPI()
</script>

<style lang="scss" scoped>
.centre {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  .Listleft {
    width: 69%;
  }
  .Rigth {
    width: 30%;
  }
}
</style>
