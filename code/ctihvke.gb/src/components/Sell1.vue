<template>
  <div class="container">
    <div class="item">
      <a-card hoverable>
        <template #cover>
          <img73591 />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
    </div>
    <div class="item">
      <a-card hoverable>
        <template #cover>
          <img73627 />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
    </div>
    <div class="item">
      <a-card hoverable>
        <template #cover>
          <img83947 />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>
    <div class="item">
      <a-card hoverable>
        <template #cover>
          <img85967 />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>
    <div class="item">
      <a-card hoverable>
        <template #cover>
          <img94241 />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.comwww.i</template>
        </a-card-meta>
      </a-card>
    </div>
  </div>

</template>

<script setup>
import img73591 from './images/img73591.vue'
import img73627 from './images/img73627.vue'
import img83947 from './images/img83947.vue'
import img85967 from './images/img85967.vue'
import img94241 from './images/img94241.vue'

</script>

<style scoped>

.container {
  display: grid; /* 指定为Flexbox布局 */
  grid-template-columns: repeat(4,1fr); /* 一列210-290px */
  grid-template-rows:min-content;
  grid-gap: 10px;
}
 
.item {
  display: block;
  padding: 1rem; /* 项目间距 */
  width: 100%;
}

@media (max-width: 960px) {
  .container {
    grid-template-columns: repeat(3,1fr);
  }
}
@media (max-width: 730px) {
  .container {
    grid-template-columns: repeat(2,1fr);
  }
}
@media (max-width: 500px) {
  .container {
    grid-template-columns: repeat(1,1fr);
  }
}
</style>
