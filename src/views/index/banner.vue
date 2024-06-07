<script setup lang="ts">

import {ref} from 'vue'

const images = ref([
  "https://p6-novel.byteimg.com/origin/novel-static/1ae29ac0a71a752bab51d090b942c3c4",
  "https://p3-novel.byteimg.com/origin/novel-static/ae0069b001ddee9d6b113a9b4750c7b9",
  "https://p3-novel.byteimg.com/origin/novel-static/7a71f97704014165b1d43aef70d05df6",
])

</script>

<template>
  <van-swipe :autoplay="3000" :width="800" lazy-render class="-mt-4">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image"/>
    </van-swipe-item>
  </van-swipe>

</template>

<style scoped>

</style>