import './assets/main.css'

import { createApp } from 'vue'

import { Space, Layout,Divider, Menu, Watermark, QRCode,Image,Card,Upload  } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'

const app = createApp(App)

app.use(Space)
.use(Layout)
.use(Divider)
.use(Menu)
.use(QRCode)
.use(Image)
.use(Card)
.use(Watermark)
.use(Upload)

app.mount('#app')
