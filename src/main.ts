import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const fun = (): void => {
  console.log('x')
}

fun()
