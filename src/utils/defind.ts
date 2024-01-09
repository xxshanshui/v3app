/**定义返回状态码 */
export enum RequestEnums {
  /**超时时间 */
  TIMEOUT = 3000,
  SUCCESS = 200, // 请求成功
  CREATE = 201, // 创建成功
  DELETED = 204, // 删除成功
  BADREQUEST = 400, // 请求的地址不存在或者包含不支持的参数
  UNAUTHORIZED = 401, // 未授权
  NOTFOUND = 404, // 请求的资源不存在
  UNPROSE = 422, // 验证错误
  ERROR = 500 // 内部错误
}

// 数据返回的接口
/**定义接口数据返回值 */
/**去了公司中看一下公司接口文档的返回类型修改 */
/**
 * 实际需求: {
 *   data: {
 *    },
 * msg: '',
 * code: 0
 *
 *  }
 */
interface Result {
  meta: {
    status: number
    msg: string
  }
}

/**加上data */
/**根据公司实际情况去修改 */
export interface ResultData<T> extends Result {
  data: T
}


/**登录验证 */
export interface  RuleForm {
  username:string,
  password:string,
  uuid:string,
  code:string
}

/**在线用户 */
/**在线用户列表验证 */
export interface Userr {
  page:number,
  size:number,
  username:string
}

/**在线用户列表删除验证 */
export interface Del {
  key:string
  }


  //系统管理角色管理总数据
export interface roleslist {
	createTime:string,
	dataScope:string,
	name:string,
	description:string
}
export interface pid{
	pid:number
}

export interface Tree{
	name:string,
	leaf?:boolean
}
// 系统管理角色管理的数据范围
export interface dept{
	pid?:number,
}

export interface users{
	page:number,
	size:number
}
