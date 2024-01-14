// 接口统一管理
import request from "@/utils/request";
import type {loginForm,loginResponse} from "./types"
enum API{
    LOGIN_URL="/user/login",
}
export const login=(data:loginForm)=>{
    request.post<any,loginResponse>(API.LOGIN_URL,data);
}