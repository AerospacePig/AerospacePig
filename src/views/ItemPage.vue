<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { marked } from 'marked';
  import axios from 'axios';
  import { useRoute, useRouter } from "vue-router";

  const itemContent = ref(null);
  const route = useRoute();
  const router  = useRouter();
  const currentRoute = () => {
    return router.currentRoute.value.name
  }

  function requestContent(id) {
    axios.get(`src/assets/markdowns/${id}.md`)
    .then(resultMarkdown => {
      const options = { 
        gfm: true, // github的Markdown风格
        breaks: true, // 换行显示为<hr/>
      }
      itemContent.value = marked(resultMarkdown.data, options);
    })
    .catch(error => {
      console.error(itemContent.value = error);
    })
  }

  onMounted(() => { // 总觉得这样搞很不聪明的样子...
    watch(() => route.params, (newParams) => {
      if (Object.keys(route.params).length !== 0) {
        requestContent(newParams.id);
      }
    });
    watch(currentRoute, () => { // 这里使用onBeforeRouteLeave不起作用, 不知道为啥
      itemContent.value = null;
    })
  });
</script>

<template>
  <div class="item-container">
    <div class="item-content" v-show="itemContent" v-html="itemContent"></div>
  </div>
</template>

<style scoped lang="scss">
  .item-container {
    .item-header {
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgba(0, 90, 170, 1);
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
    }
    .item-content {
      white-space: normal;
    }
  }
</style>