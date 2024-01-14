import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
})
request.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'token'
    return config
  },
  async (err) => {
    return await Promise.reject(err)
  },
)
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    // return Promise.reject(error)
    let msg = ''
    const status = error.response.status
    switch (status) {
      case 401:
        msg = 'Token过期'
        break
      case 403:
        msg = '无权访问'
        break
      case 404:
        msg = '请求地址错误'
        break
      case 500:
        msg = '服务器出现问题'
        break
      default:
        msg = '网络出现问题'
    }

    ElMessage({
      type: 'error',
      message: msg,
    })
    return await Promise.reject(error)
  },
)

export default request
