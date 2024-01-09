import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken } from './auth'
import router from '@/router/index'
import * as TS from './defind'
import { ElMessageBox } from 'element-plus'
import { ElLoading } from 'element-plus'
import { Loading } from 'element-plus/es/components/loading/src/service'

const config = {
  // 配置请求的基准URL地址
  baseURL: '/',
  setTimeout: 3000 * 10
}

class RequestHttp {
  // 定义成员变量并指定类型
  service: AxiosInstance
  public constructor() {
    this.service = axios.create(config)
    /**
     * 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex本地储存当中
     */
    this.service.interceptors.request.use(
      
      (config) => {
      /**Loading动画开始*/
        ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        config.headers['Authorization'] = getToken()
        return config
      },
      (error: AxiosError) => {
        // 请求报错
        Promise.reject(error)
      }
    )

    /**
     * 响应拦截器
     * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)',
        }).close()
        // console.log(response, 'response')
        const { data, status } = response// 解构
        if (status === TS.RequestEnums.UNAUTHORIZED) {
          // 登录信息失效，应跳转到登录页面，并清空本地的token
          sessionStorage.clear()

          router.replace({ path: '/login' })
          return Promise.reject(data)
        } // 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        return data
      },
      
      (error: AxiosError) => {
        const { response } = error
        let title: string = ''
        let message: string = ''

        if (error && response) {
          message = response.statusText
          // 401, token失效
          if (response.status === TS.RequestEnums.UNAUTHORIZED) {
            router.replace({
              name: 'login'
            })
          }
          switch (
            response.status // 跨域存在获取不到状态码的情况
          ) {
            case TS.RequestEnums.BADREQUEST:
              title = '错误请求'
              break
            case TS.RequestEnums.UNAUTHORIZED:
              title = '资源未授权'
              break
            case TS.RequestEnums.NOTFOUND:
              title = '未找到所请求的资源'
              break
            case TS.RequestEnums.ERROR:
              title = '内部服务器错误'
              break
            default:
              title = response.status.toString()
          }
          return 
        } else {
          // 跨域获取不到状态码或者其他状态进行的处理
          return ElMessageBox.alert('未知错误,请联系管理员', '提示', {
            confirmButtonText: 'OK',
            type: 'error'
          })
        }
      }
    )
  }

  public adUrl(url: string) {
    console.log(process.env.VUE_APP_URL, 'process')
    return !process.env.VUE_APP_URL ? url : process.env.VUE_APP_URL + url
  }

  // 常用方法封装
  get<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.get(this.adUrl(url), { params })
  }
  post<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.post(this.adUrl(url), params)
  }
  put<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.put(this.adUrl(url), params)
  }
  delete<T>(url: string, params?: object): Promise<TS.ResultData<T>> {
    return this.service.delete(this.adUrl(url), { data:params })
  }
}
//

const http = new RequestHttp()
export default http
