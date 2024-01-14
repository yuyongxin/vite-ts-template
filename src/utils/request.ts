import axios from 'axios'
import { ElMessage } from 'element-plus';
let request= axios.create({
    //@ts-ignore
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:10000
});
request.interceptors.request.use((config)=>{
    config.headers.Authorization="token"
    return config;
},(err)=>{
    return Promise.reject(err)
})
request.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    // return Promise.reject(error)
    let msg = '';
    let status = error.response.status;
    switch(status){
        case 401:
            msg="Token过期"
            break;
        case 403:
            msg="无权访问"
            break;
        case 404:
            msg="请求地址错误"
            break;
        case 500:
            msg="服务器出现问题"
            break;
        default:
            msg="网络出现问题"
    }
    
    ElMessage({
        type:'errpr',
        //@ts-ignore
        message:msg
    })
    return Promise.reject(error)
})

export default request;