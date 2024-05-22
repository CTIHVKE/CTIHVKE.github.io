
<template>
  <a-space direction="vertical" :size="[0, 48]" style="width: 100%;">
    <a-watermark v-bind="model">
      <a-layout>
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', maxWidth:'1280px',backgroundColor:'#fff',paddingInline:'0' }">
          <!-- <Menu /> -->
          <TopMenu />
        </a-layout-header>
        <a-layout-content :style="{ padding: '0', marginTop: '64px' }">
          <div>
            <a name="rabbit" style="position: relative;top: -70px;"></a>
            <TextH msg="一.兔子股票" />
            <Rabbit />
          </div>
          <div>
            <a-divider style="border-color: #7cb305" dashed />
            <a name="buy" style="position: relative;top: -70px;"></a>
            <TextH msg="二.买入点" />
            <Buy1 />
          </div>
          <div>
            <a-divider style="border-color: #7cb305" dashed />
            <a name="sell" style="position: relative;top: -70px;"></a>
            <TextH msg="三.卖出点" />
            <Sell1 />
          </div>
          <div>
            <a-divider style="border-color: #7cb305" dashed />
            <a name="warn" style="position: relative;top: -70px;"></a>
            <TextH msg="四.注意事项" />
            <Warn />
          </div>
        </a-layout-content>

        <a-layout-footer :style="footerStyle">

          <!-- 图片数据处理 -->
          <Upload1 />
        </a-layout-footer>
      </a-layout>
    </a-watermark>
  </a-space>
</template>

<script setup>
import Upload1 from './components/Upload1.vue'
import Menu from './components/Menu.vue'
import TextH from './components/TextH.vue'
import TopMenu from './components/TopMenu.vue'
import Buy1 from './components/Buy1.vue'
import Sell1 from './components/Sell1.vue'
import Rabbit from './components/Rabbit.vue'
import Warn from './components/Warn.vue'

import { reactive, ref } from 'vue'

const model = reactive({
  content: '股票兔子',
  gap: [40, 60]
});

const headerStyle = {
  position: 'fixed',
  zIndex: 1,
  textAlign: 'center',
  color: '#000',
  height: 64,
  lineHeight: '64px',
  paddingInline: 0,
  backgroundColor: '#fff'
};
const contentStyle = {
  marginTop: '64px',
  textAlign: 'left',
  minHeight: 120,
  color: '#000',
  backgroundColor: '#fff'
};
const footerStyle = {
  textAlign: 'center',
  color: '#000',
  size: '25px',
  backgroundColor: '#7dbcea'
};

</script>

<style scoped>
main{
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
}
</style>
