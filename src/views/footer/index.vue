<script setup lang="ts">

interface Tag {
  title: string
  icon: string
  path: string
}

const tags : Tag[] = [
  {
    title: '书城',
    icon: 'icon-ziliaoku',
    path: '/index',
  },
  {
    title: '福利',
    icon: 'icon-fuli',
    path: "/welfare",
  },
  {
    title: '社区',
    icon: 'icon-shequ-active',
    path: "community",
  },
  {
    title: '我的',
    icon: 'icon-wode',
    path: "/my",
  }
]
</script>

<template>
  <div class="footer">
    <div class="footer-seat">
      <ul class="footer-list">
        <li v-for="(tag, index) in tags"  :key="index">
          <router-link :to="tag.path">
            <i :class="'iconfont ' + tag.icon"></i>
            <p>{{ tag.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.footer {
  height: 60px;
}

.footer-seat {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 60px;
}

.footer-list {
  @apply flex justify-around items-center text-center;
  border-top: 1px solid #f5f5f5;
}


.footer-seat ul li i {
  font-size: 20px;
}


</style>