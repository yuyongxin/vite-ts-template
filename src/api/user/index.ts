// 接口统一管理
import request from '@/utils/request'
import type { loginForm, loginResponse } from './types'
enum API {
  LOGIN_URL = '/user/login',
}
export const login = async (data: loginForm): Promise<any> => {
  return await request.post<any, loginResponse>(API.LOGIN_URL, data)
}
