<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>

<script lang="ts" setup>
import { reactive, h, ref } from 'vue'
import { HomeOutlined, RiseOutlined, FallOutlined, HeatMapOutlined } from '@ant-design/icons-vue'
// import { MenuProps } from 'ant-design-vue'

const current = ref<string[]>(['rabbit'])
const items = reactive([
  {
    key: 'rabbit',
    icon: () => h(HomeOutlined),
    label: h('a', { href: './#rabbit', target: '_self' }, '兔子股票'),
    title: '兔子股票',
    paddingInline: 0
  },
  {
    key: 'buy',
    icon: () => h(RiseOutlined),
    label: h('a', { href: './#buy', target: '_self' }, '买入点'),
    title: '买入点',
    paddingInline: 0
  },
  {
    key: 'sell',
    icon: () => h(FallOutlined),
    label: h('a', { href: './#sell', target: '_self' }, '卖出点'),
    title: '卖出点',
    paddingInline: 0
  },
  {
    key: 'warn',
    icon: () => h(HeatMapOutlined),
    label: h('a', { href: './#warn', target: '_self' }, '注意事项'),
    title: '注意事项',
    paddingInline: 0
  }

  // {
  //   key: 'sub1',
  //   icon: () => h(SettingOutlined),
  //   label: 'Navigation Three - Submenu',
  //   title: 'Navigation Three - Submenu',
  //   children: [
  //     {
  //       type: 'group',
  //       label: 'Item 1',
  //       children: [
  //         {
  //           label: 'Option 1',
  //           key: 'setting:1'
  //         },
  //         {
  //           label: 'Option 2',
  //           key: 'setting:2'
  //         }
  //       ]
  //     },
  //     {
  //       type: 'group',
  //       label: 'Item 2',
  //       children: [
  //         {
  //           label: 'Option 3',
  //           key: 'setting:3'
  //         },
  //         {
  //           label: 'Option 4',
  //           key: 'setting:4'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   key: 'alipay',
  //   label: h('a', { href: 'https://antdv.com', target: '_blank' }, 'Navigation Four - Link'),
  //   title: 'Navigation Four - Link'
  // }
])
</script>

<style scoped>

</style>
