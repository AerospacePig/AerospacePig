<script setup>    
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const objArray = ref([]);
  const pitchIndex = ref(0);
  const pageArray = ref([]); // 拆分好的页面数组
  const currentPageArray = ref([]); // 当前页面
  const currentPageIndex = ref(0); // 当前页面索引
  const router  = useRouter();
  const currentRoute = () => {
    return router.currentRoute.value.name
  }

  const toItemPage = (index) => {
    pitchIndex.value = index;
    router.push({
      name: 'itemPage',
      params: {
        id: index+1,
      },
    })
  }

  const splitObjArrayIntoPage = () => {
    const eachPageItemCount = 10; // 默认为10
    let pageCount = eachPageItemCount;

    for (let i = 0; i < objArray.value.length; i += eachPageItemCount) {
      pageArray.value.push(objArray.value.slice(i, pageCount)); // slice的拆分结果返回一个新数组
      pageCount += eachPageItemCount;
    }
  }

  const getBasicInf = () => {
    axios.get('assets/jsons/db_1.json')
    .then(retultJson => {
      objArray.value = Object.values(retultJson.data);
      splitObjArrayIntoPage();
      currentPageArray.value = pageArray.value[currentPageIndex.value];
      buttonDisplay();
    })
  }

  const upPage = () => {
    if (currentPageIndex.value > 0) {
      currentPageIndex.value -= 1;
      currentPageArray.value = pageArray.value[currentPageIndex.value];
    }
    buttonDisplay();
  }

  const downPage = () => {
    if (currentPageIndex.value < pageArray.value.length - 1) {
      currentPageIndex.value += 1;
      currentPageArray.value = pageArray.value[currentPageIndex.value];
    }
    buttonDisplay();
  }

  const pageSkip = (pageIndex) => {
    if (pageIndex || pageIndex === 0) {
      currentPageIndex.value = pageIndex;
      currentPageArray.value = pageArray.value[pageIndex];
    }
    buttonDisplay();
  }

  // 以下是分页的所有情况(4种):

  // 1 2 3 4 总页数 <= 4
  // 1 2 3 4
  // 1 2 3 4
  // 1 2 3 4

  // 1 2 3 ... 5 总页数 == 5
  // 1 2 3 ... 5
  // 1 2 3 4 5
  // 1 ... 3 4 5
  // 1 ... 3 4 5

  // 1 2 3 ... 6 总页数 == 6
  // 1 2 3 ... 6
  // 1 2 3 4 ... 6
  // 1 ... 3 4 5 6
  // 1 ... 4 5 6
  // 1 ... 4 5 6

  // 1 2 3 ... 7 总页数 >= 7
  // 1 2 3 ... 7
  // 1 2 3 4 ... 7
  // 1 ... 3 4 5 ... 7 *
  // 1 ... 4 5 6 7
  // 1 ... 5 6 7
  // 1 ... 5 6 7

  const button_1_display = ref(false);
  const button_2_display = ref(false);
  const button_3_display = ref(false);
  const button_4_display = ref(false);
  const buttonArray = ref([]);

  const buttonDisplay = () => {
    buttonArray.value = []; // 清空
    if (pageArray.value.length >= 5) {
      button_1_display.value = true;
      button_2_display.value = currentPageIndex.value - 1 > 1 ? true : false;
      button_3_display.value = pageArray.value.length - 1 > currentPageIndex.value + 2 ? true : false;
      button_4_display.value = true;

      if (currentPageIndex.value <= 1) {
        buttonArray.value.push(2, 3)
      } else if (pageArray.value.length - 2 <= currentPageIndex.value) {
        buttonArray.value.push(pageArray.value.length - 2, pageArray.value.length - 1)
      } else {
        buttonArray.value.push(currentPageIndex.value, currentPageIndex.value + 1, currentPageIndex.value + 2)
      }
    } else {
      for (let i = 1; i <= pageArray.value.length; i++) {
        buttonArray.value.push(i);
      }
    }
  }

  const handlePitch = (index) => {
    if (currentRoute() === 'home') {
      pitchIndex.value = 0;
      return true;
    } else if (pitchIndex.value === index) {
      return true;
    } else {
      return false;
    }
  }

  const backgoundChange = (pageCount) => {
    return currentPageIndex.value + 1 === pageCount ? true : false;
  }

  onMounted(() => {
    getBasicInf();
  })
</script>

<template>
  <div class="container">
    <div class="item" v-for="(obj, index) in currentPageArray" :key="index">
      <div v-if="handlePitch(index)">
        <div class="header">
          <span v-show="obj.top">[置顶]</span>
          <h2 class="title" :class="{ 'title-1': currentRoute() === 'home' }" @click="toItemPage(index)">{{ obj.titel }}</h2>
        </div>
        <div class="basic-inf">
          <span>作者:&nbsp;{{ obj.author }}</span>
          <span>分类:&nbsp;{{ obj.classify }}</span>
          <span>日期:&nbsp;{{ obj.date }}</span>
        </div>
        <div class="describe">{{ obj.describe }}</div>
        <hr/>
      </div>
    </div>

    <div class="paging" v-show="currentRoute() === 'home'">
      <button v-show="currentPageIndex > 0" @click="upPage">&laquo;&nbsp;前一页</button>
      <button v-show="button_1_display" @click="pageSkip(0)" :style="{ backgroundColor: backgoundChange(1) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }" class="pageCount">1</button><!--第一页-->
      <button v-show="button_2_display" class="omit">...</button>
      <button v-for="(data, index) in buttonArray" :key="index" @click="pageSkip(data-1)" :style="{ backgroundColor: backgoundChange(data) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }" class="pageCount">{{ data }}</button><!--中间页-->
      <button v-show="button_3_display" class="omit">...</button>
      <button v-show="button_4_display" @click="pageSkip(pageArray.length-1)" :style="{ backgroundColor: backgoundChange(pageArray.length) ? 'rgba(0, 0, 0, 0.08)' : 'transparent' }" class="pageCount">{{ pageArray.length }}</button><!--最后一页-->
      <button v-show="currentPageIndex < pageArray.length - 1" @click="downPage">后一页&nbsp;&raquo;</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    .item {
      margin-top: 20px;
      height: auto;
      .header {
        display: flex;
        align-items: center;
        span {
          font-weight: 700;
          font-size: 20px;
          margin-right: 3px;
          color: rgb(255, 110, 110);
        }
        .title {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          color: rgba(0, 90, 170, 1);
        }
        .title-1 {
          cursor: pointer;
          &:hover {
            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
      .basic-inf {
        margin: 10px 0;
        span {
          font-weight: 500;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
          width: auto;
          padding: 5px 10px;
          margin: 0;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
        }
        span:nth-child(1) {
          padding-left: 0;
        }
      }
      .describe {
        height: auto;
        white-space: normal; // 正常换行
      }
      hr {
        margin: 15px 0;
        border-color: rgba(0, 0, 0, 0.07);
      }
    }
    .paging {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 35px 0 20px 0;
      button {
        width: 27px;
        height: 30px;
        margin: 0 5px;
        border: none;
        outline: none;
        font-size: 15px;
        color: rgba(0, 90, 170, 1);
        background-color: transparent;
        &:hover {
          background-color: rgba(0, 0, 0, 0.08);
        }
      }
      & > button:first-child,
      & > button:last-child {
        width: 70px;
        padding-bottom: 4px;
      }
      .pageCount {
        font-family: JetBrainsMono, sans-serif;
        &:hover {
          background-color: rgba(0, 0, 0, 0.08) !important;
        }
      }
      .omit {
        cursor: text;
        &:hover {
          background-color: transparent;
        }
      }
    } 
  }
</style>