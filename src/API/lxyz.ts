/**登录类型验证 */
export interface loginParams {
  username: string
  password: string
  uuid: string
  code: string
}

/**在线用户 */
/**用户列表类型验证 */
export interface Userparams {
  page: number
  size: number
  username: string
}
/**用户列表删除 */
export interface Del {
  key: string
}

/**用户管理*/
/**搜索表格验证 */
export interface Ntable {
  name: string
  page: number
  size: number
}
/**获取岗位验证 */
export interface Colume {
  page: number
  size: number
  enabled: boolean
}
export interface Key {
  id: number
}

export interface Gwlb {
  page: 0
  size: 10
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
  export interface rolekey{
    id:number,
  }
  
  export interface users{
    page:number,
    size:number
  }
  export interface rolesAPI {
    page:number,
    size:number,
    sort:string,
    blurry:string,
  }

  export interface Dept{
    page:0,
    size:10
  }



  /**字典管理 */
  export interface IDictList {
    page: number
    size: number
    sort: string
  }
  

  /**部门列表验证 */
  export interface cs{
    page:number,
    size:number,
    name:string
  }

  /**菜单管理 */
  export interface List{
    page:number,
    size:number,
    sort:string
  }

  export interface Banner{
  pid:number
  }
  