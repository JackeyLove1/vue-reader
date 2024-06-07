<script setup lang="ts">

import {ref} from 'vue'

const active = ref(0)

interface Tab {
  title: string,
  content: string
}

const tabs = ref<Tab[]>([
  {title: '推荐榜', content: '内容 1'},
  {title: '巅峰榜', content: '内容 2'},
  {title: '完本榜', content: '内容 3'},
  {title: '口碑榜', content: '内容 4'},
  {title: '标签 5', content: '内容 5'},
  {title: '标签 6', content: '内容 6'},
  {title: '标签 7', content: '内容 7'},
  {title: '标签 8', content: '内容 8'},

])

interface Book {
  name: string
  desc: string
  image: string
}

const bookList = ref<Book[]>([
  {
    name: '十日终焉',
    desc: '（不后宫，不套路，不无敌，不系统，不无脑，不爽文，介意者慎入。） 当我以为这只是寻常的一天时，却发现自己被捉到了终焉之地。 当我以为只需要不断的参加死亡游戏就可以逃脱时，却发现众人开始觉醒超自然之力。 当我以为这里是「造神之地」时，一切却又奔着湮灭走去。',
    image: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/4900f950c7af7f82fdc14cf528e0e288~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1718378139&x-signature=PTV9%2Fk6jWiY15UaJmbUQGJcLzfQ%3D'
  },
  {
    name: '我在精神病院学斩神',
    desc: '你是否想过，在霓虹璀璨的都市之下，潜藏着来自古老神话的怪物？ 你是否想过，在那高悬于世人头顶的月亮之上，伫立着守望人间的神明？ 你是否想过，在人潮汹涌的现代城市之中，存在代替神明行走人间的超凡之人？ 人类统治的社会中，潜伏着无数诡异； 在那些无人问津的生命禁区，居住着古老的神明。 炽天使米迦勒，冥王哈迪斯，海神波塞冬…… 而属于大夏的神明，究竟去了何处？ 在这属于“人”的世界，“神秘”需要被肃清！',
    image: 'https://p9-reading-sign.fqnovelpic.com/novel-pic/c5397e4a514736bb1c6754663dbee3db~tplv-resize:200:260.image?lk3s=8c91f0b0&x-expires=1720365307&x-signature=NSjzGdhAtgxEE2bX0GYFrRpM0to%3D'
  },
  {
    name: '召唤最弱？开局恶魔契约天赋拉满',
    desc: '【无限流】+【爽文】+【轻松】+【搞笑】 （无女主）（副本剧情流） 转职下水道职业召唤师，却觉醒恶魔契约强化符文，消耗生命值上限，换取召唤兽天赋。 召唤师弱？我直接天赋拉满，阁下如何应对？',
    image: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o6b08471b5d1c22410ae0830c60f219b0~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1718378521&x-signature=N3BeEllpqZi3F0j6OXOkcCR4ntU%3D'
  },
  {
    name: '我靠摆烂拯救了全宗门',
    desc: '叶翘一觉睡醒穿成了万人迷小说里的工具人二师姐。 小说里小师妹有难二师姐上，小师妹想要神器，二师姐去拿，小师妹没有灵根，要挖她的灵根。 叶翘心态崩了，连夜下山，撂担子不干了。 这工具人谁爱当谁当。 …… 新宗门的师兄们一切都好，手拿剧本的叶翘却知道这些人都是万人迷女主的鱼。 丧气厌世的大师兄是爱而不得的舔狗，最终为女主牺牲。 自打叶翘来了后，他也不不丧了，也不想着去死了，而是整日追着叶翘咆哮：“以后再敢逃课试',
    image: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o314c1e4a3fbe104be7c6257a3acf8511~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1718378523&x-signature=YgOJivOmS7cP6oN2gy4016JfOio%3D'
  },
  {
    name: '十日终焉',
    desc: '（不后宫，不套路，不无敌，不系统，不无脑，不爽文，介意者慎入。） 当我以为这只是寻常的一天时，却发现自己被捉到了终焉之地。 当我以为只需要不断的参加死亡游戏就可以逃脱时，却发现众人开始觉醒超自然之力。 当我以为这里是「造神之地」时，一切却又奔着湮灭走去。',
    image: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/4900f950c7af7f82fdc14cf528e0e288~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1718378139&x-signature=PTV9%2Fk6jWiY15UaJmbUQGJcLzfQ%3D'
  },
  {
    name: '我在精神病院学斩神',
    desc: '你是否想过，在霓虹璀璨的都市之下，潜藏着来自古老神话的怪物？ 你是否想过，在那高悬于世人头顶的月亮之上，伫立着守望人间的神明？ 你是否想过，在人潮汹涌的现代城市之中，存在代替神明行走人间的超凡之人？ 人类统治的社会中，潜伏着无数诡异； 在那些无人问津的生命禁区，居住着古老的神明。 炽天使米迦勒，冥王哈迪斯，海神波塞冬…… 而属于大夏的神明，究竟去了何处？ 在这属于“人”的世界，“神秘”需要被肃清！',
    image: 'https://p9-reading-sign.fqnovelpic.com/novel-pic/c5397e4a514736bb1c6754663dbee3db~tplv-resize:200:260.image?lk3s=8c91f0b0&x-expires=1720365307&x-signature=NSjzGdhAtgxEE2bX0GYFrRpM0to%3D'
  },
  {
    name: '召唤最弱？开局恶魔契约天赋拉满',
    desc: '【无限流】+【爽文】+【轻松】+【搞笑】 （无女主）（副本剧情流） 转职下水道职业召唤师，却觉醒恶魔契约强化符文，消耗生命值上限，换取召唤兽天赋。 召唤师弱？我直接天赋拉满，阁下如何应对？',
    image: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o6b08471b5d1c22410ae0830c60f219b0~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1718378521&x-signature=N3BeEllpqZi3F0j6OXOkcCR4ntU%3D'
  },
  {
    name: '我靠摆烂拯救了全宗门',
    desc: '叶翘一觉睡醒穿成了万人迷小说里的工具人二师姐。 小说里小师妹有难二师姐上，小师妹想要神器，二师姐去拿，小师妹没有灵根，要挖她的灵根。 叶翘心态崩了，连夜下山，撂担子不干了。 这工具人谁爱当谁当。 …… 新宗门的师兄们一切都好，手拿剧本的叶翘却知道这些人都是万人迷女主的鱼。 丧气厌世的大师兄是爱而不得的舔狗，最终为女主牺牲。 自打叶翘来了后，他也不不丧了，也不想着去死了，而是整日追着叶翘咆哮：“以后再敢逃课试',
    image: 'https://p3-reading-sign.fqnovelpic.com/novel-pic/p2o314c1e4a3fbe104be7c6257a3acf8511~tplv-resize:225:0.image?lk3s=5b7047ff&x-expires=1718378523&x-signature=YgOJivOmS7cP6oN2gy4016JfOio%3D'
  },
])


</script>

<template>
  <div class="tabs">
    <van-tabs v-model:active="active">
      <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab.title">
        <div class="chartstab-content">
          <div class="chartstab-item">
            <div class="chartstab-list" v-for="(item,index) in bookList" :key="index">
              <img :src="item.image" alt="">
              <div class="chartsta-title">
                <h4>{{ item.name }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
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
  @apply rounded-lg bg-gray-200 h-6
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

.chartstab-content::-webkit-scrollbar {
  display: none;
}

.chartstab-content {
  height: 310px;
  margin-top: 10px;
  @apply flex overflow-x-auto px-4
}

.chartstab-item {
  counter-reset: count;
  @apply flex flex-col flex-wrap
}

.chartstab-list {
  width: 200px;
  height: 65px;
  @apply flex flex-row space-x-6 mb-8
}


.chartstab-list img {
  width: 60px;
  height: 80px;
  object-fit: cover;
  @apply rounded
}

.chartsta-title {
  height: 100%;
  @apply flex flex-col space-y-1
}


.chartsta-title p,
.chartsta-title h4 {
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chartsta-title h4 {
  font-weight: 550;
  font-size: 16px;
}

.chartsta-title p {
  font-size: 12px;
}

.chartsta-title {
  position: relative;
}

.chartsta-title::before{
  counter-increment: count;
  content: counter(count);
  position: absolute;
  left: -15px;
}

.chartstab-list:nth-child(-n+3) .chartsta-title::before {
  color: red;
}

</style>