import { ref, reactive } from 'vue'
import * as API from '@/API/http'
export function Menu() {
  const menuTableData = ref([])
  const paramss = reactive({
    page: 0,
    size: 10,
    sort:'id,desc'
  })
  const getMenuList = async () => {
    let res = await API.cdlist(paramss)
    console.log(res, '菜单管理')
    // @ts-ignore
    menuTableData.value = res.content
  }
  // 渲染子级
  interface User {
    id: number
    title: string
    icon: string
    menuSort: number
    iFrame: boolean
    hidden: boolean
    leaf: boolean
    createTime: string
    hasChildren?: boolean
    children?: User[]
  }
  const load = async(
    row: User,
    treeNode: unknown,
    resolve: (date: User[]) => void
  ) => {
		console.log(row,'row');
		let res = await API.cdpid({pid:row.id})
		console.log(res,'res');
		// @ts-ignore
		const data:User[] = res.content
		resolve(data)

	}

  return { menuTableData, getMenuList, load }
}
