<template>
  <div class="container">
    <div class="item">
      <a-card hoverable>
        <template #cover>
          <img10074 />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
    </div>
    <div class="item">
      <a-card hoverable>
        <template #cover>
          <img16239 />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
    </div>
    <div class="item">
      <a-card hoverable>
        <template #cover>
          <img18424 />
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
          <img22052 />
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
          <img32890 />
        </template>
        <a-card-meta title="Europe Street beat">
          <template #description>www.instagram.com</template>
        </a-card-meta>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import img10074 from './images/img10074.vue'
import img16239 from './images/img16239.vue'
import img18424 from './images/img18424.vue'
import img22052 from './images/img22052.vue'
import img32890 from './images/img32890.vue'
import img37714 from './images/img37714.vue'
import img38169 from './images/img38169.vue'
import img44037 from './images/img44037.vue'
import img44590 from './images/img44590.vue'
import img49126 from './images/img49126.vue'
import img56227 from './images/img56227.vue'
import img58296 from './images/img58296.vue'
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
