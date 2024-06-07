<script setup>

import Popup from "@/views/index/popup.vue";
</script>

<template>
  <div class="charts">
    <span class="font-semibold">排行榜</span>
    <Popup/>
  </div>
</template>

<style scoped>
.charts {
  width: 100%;
  @apply flex justify-between py-2 px-4
}
</style>