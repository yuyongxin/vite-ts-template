import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style.css'
import '@/styles/index.scss'
import App from './App.vue'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import {createPinia} from 'pinia'
import router from './router'
const pinia = createPinia()
const app= createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus,{size:'small',zIndex:3000,locale:zhCn})
for (const [key,component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component)
}
//@ts-ignore
console.log(import.meta.env);

app.mount('#app')
