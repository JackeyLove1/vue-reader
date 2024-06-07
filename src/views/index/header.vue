<script setup>

</script>

<template>
  <div class="bg-[#F8D447] p-[10px]">
    <div class="search-list">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="请输入书名、作者">
    </div>
  </div>
  <van-sticky>
    <ul class="header-list">
      <li>推荐</li>
      <li>女生</li>
      <li>男生</li>
      <li>图书</li>
      <li>听书</li>
      <li>最新上架</li>
    </ul>
  </van-sticky>
  <img src="@/assets/images/header.jpg">
</template>

<style scoped>
.search-list{
  background-color:rgba(255, 255, 255, .5);
  @apply p-[8px] rounded-lg
}

.search-list input{
  background-color: transparent;
  color: #999;
  font-size: 16px;
  @apply ml-3
}

.search-list i {
  color: #999;
}

.header-list{
  font-weight: 700;
  color: #6F601B;
  padding: 3px;
  @apply flex justify-between font-normal bg-[#F8D447] px-2
}

.box{
  height: 1800px;
}
</style>