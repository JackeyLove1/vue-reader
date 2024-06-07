<script setup lang="ts">

import {ref} from 'vue'

const show = ref(false)

const showPopup = () => {
  show.value = true
}

interface Category {
  name: string
}

const categoryList = ref<Category[]>([
  {name: '都市'},
  {name: '悬疑'},
  {name: '科幻'},
  {name: '历史'},
  {name: '科技'},
  {name: '文学'},
])

const getCategoryList = () => {
  console.log('getCategoryList')
}

const selectedIndex = ref(0)

</script>

<template>
  <div class="popup">
    <van-cell title="热门分类" is-link @click="showPopup"/>
    <van-popup
        v-model:show="show"
        position="right"
        :style="{ width: '70%', height: '100%' }"
        closeable
        close-icon-position="top-left"
        @close="show = false"
    >
      <div class="poplist">
        <h4 class="title"> 热门分类 </h4>
        <ul>
          <li
              v-for="(item, index) in categoryList"
              :key="index"
              @click="selectedIndex = index"
              :class="selectedIndex === index ? 'selected' : 'unseleced'">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </van-popup>
  </div>

</template>

<style scoped>
.popup {
  width: 25%;
  @apply items-center
}

.popup .van-cell {
  padding: 0;
}

.popup .van-cell__title {
}

.popup .poplist {
  @apply flex flex-col items-center
}

.poplist .title {
  @apply text-base font-semibold mt-4
}

.poplist ul {
  width: 100%;
  @apply grid grid-cols-2 gap-4 mt-4 px-2
}

.poplist ul li {
  @apply text-center p-2 rounded-lg
}

.selected {
  @apply bg-yellow-400 text-white
}

.unseleced {
  @apply bg-gray-200 text-black
}
</style>