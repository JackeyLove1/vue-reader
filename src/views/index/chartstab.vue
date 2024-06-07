<script setup lang="ts">

import {ref} from 'vue'

const active = ref(0)

interface Tab {
  title: string,
  content: string
}

const tabs = ref<Tab[]>([
  {title: '标签 1', content: '内容 1'},
  {title: '标签 2', content: '内容 2'},
  {title: '标签 3', content: '内容 3'},
  {title: '标签 4', content: '内容 4'},
  {title: '标签 5', content: '内容 5'},
  {title: '标签 6', content: '内容 6'},
  {title: '标签 7', content: '内容 7'},
  {title: '标签 8', content: '内容 8'},

])
</script>

<template>
  <div class="tabs">
    <van-tabs v-model:active="active">
      <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab.title">
        {{ tab.content }}
      </van-tab>
    </van-tabs>
  </div>

</template>

<style>
/*.tabs .van-tabs {
  -webkit-mask: -webkit-linear-gradient(90deg,#000 80%,transparent);
}*/
.tabs .van-tabs__nav {
  @apply flex space-x-3 px-4
}

.tabs .van-tab {
  @apply rounded-full bg-gray-200 h-6
}

.tabs .van-tab__text {
  @apply text-sm
}

.tabs .van-tab--active {
  background-color: var(--imgcolor);
}

.tabs .van-tab--grow {
  @apply py-4
}

.tabs .van-tabs__line {
  background-color: transparent;
}
</style>