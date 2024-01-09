import http from '@/utils/httpRequest'
import * as TS from './lxyz'



// 验证码
export const getImg = () => http.get('/auth/code')
// 登录
export const login = (params: TS.loginParams) => http.post('/auth/login', params)
// 路由
export const layout = () => http.get('/api/menus/build')

// 在线用户接口
// 用户列表
export const User = (params: TS.Userparams) => http.get('/auth/online', params)
// 用户删除
export const Del = (data: TS.Del) => http.delete('/auth/online', data)

//用户管理
// 左侧树一级菜单
export const queryTree = (params:TS.cs) => http.get('/api/dept?sort=id,desc',params)
// 左侧二级菜单
export const queryErtree = (id: number) => http.get(`/api/dept?sort=id,desc&pid=${id}`)
// 搜索左侧
export const querysearchdata = (name: string) => http.get(`/api/dept?sort=id,desc&name=${name}`)
// 获取搜索区域的状态
export const queryuserstatus = () => http.get('/api/dictDetail?dictName=user_status&page=0&size=9999')
// 搜索右侧表格
export const querynametable = (paramsn:TS.Ntable) => http.get('/api/users' + '?', paramsn)
// 获取岗位
export const queryvolume = (params:TS.Colume) => http.get('/api/job', params)
//获取角色
export const queryroles = () => http.get('/api/roles/all')
//删除角色
export const querydel = (params:TS.Key)=> http.delete('/api/users',params)


// 岗位管理
// 岗位列表
export const  gwgllb = (parmas:TS.Gwlb)=>http.get('/api/job',parmas)



/**角色管理 */
export const rolesAPI=(params:TS.rolesAPI)=>http.get(('/api/roles'),params)
/**角色删除 */
export const rolesdel=(params:TS.rolekey)=>http.delete('/api/roles',params)
//系统管理角色管理的
export const lazyAPI=(params:TS.pid)=>http.get((`/api/menus/lazy`),params)

export const lazygetAPI=(params:TS.pid)=>http.get((`/api/menus/lazy?pid=${params.pid}`))
// 系统管理角色管理的数据范围
export const deptAPI=()=>http.get((`/api/dept?enabled=true`))

export const deptidAPI=(params:TS.dept)=>http.get((`/api/dept?enabled=true&pid=${params.pid}`))

// 系统管理用户管理下拉框
export const sortAPI=()=>http.get((`/api/dept?sort=id,desc`))
// 系统管理用户管理下拉框2级
export const descAPI=(params:TS.pid)=>http.get((`/api/dept?sort=id,desc&pid=${params.pid}`))

export const usersAPI=(params:TS.users)=>http.get((`/api/users?page=${params.page}&size=${params.size}&sort=id%2Cdesc`))


/**任务调度 */
export const timingApi = (params:TS.Dept) => http.get(`/api/jobs?page=${params.page}&size=${params.size}&sort=id%2Cdesc`)

/**字典管理 */
export const getDictListApi = (params:TS.IDictList) => http.get("/api/dict",  params )

/**部门管理 */
export const bmdel = (params:TS.Key)=>http.delete("/api/dept",params)


/**菜单管理 */
/**菜单列表 */
export const cdlist = (params:TS.List)=>http.get('/api/menus',params)

export const cdpid = (params:TS.Banner)=>http.get(`/api/menus`,params)
