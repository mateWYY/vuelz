import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
createApp(App).mount('#app')
