<script setup>
  import { ref, onMounted, watch, defineEmits, defineProps } from 'vue';
  import { marked } from 'marked';
  import { hljs } from 'highlight.js';
  import axios from 'axios';
  import { useRoute, useRouter } from "vue-router";

  const loading = ref(false);
  const itemContent = ref(null);
  const route = useRoute();
  const router  = useRouter();
  const currentRoute = () => {
    return router.currentRoute.value.name
  }
  const props = defineProps({
    screenSize: String
  })
  const emit = defineEmits(['loading'])
  const handleLoading = () => {
    emit('loading', loading.value);
  }
  watch(loading, () => {
    handleLoading();
  })

  function requestContent(id) {
    loading.value = true;
    axios.get(`/markdowns/${id}.md`)
    .then(resultMarkdown => {
      loading.value = false;
      const options = { 
        gfm: true, // github的Markdown风格
        breaks: true, // 换行显示为<hr/>
        sanitize: false, // 启用html标签转义
        smartLists: false, // 智能列表
        smartypants: false, // 智能标点
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        }
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
  <div class="item-container" :style="{ fontSize: props.screenSize === 'small' ? '13px' : '15px'}">
    <div class="item-content" v-show="itemContent" v-html="itemContent"></div>
  </div>
</template>

<style scoped lang="scss">
  .item-container {
    .item-content {
      white-space: normal;
    }
  }
</style>
<style>
  .item-content > p {
    color: rgba(0, 0, 0, 0.55);
  }
  a:link, a:visited, a:active {
    color: rgba(0, 90, 170, 1);
  }
  a:hover {
    color: rgba(0, 0, 0, 1);
    opacity: 0.7;
  }
  pre {
    display: block;
    background-color:#f3f3f3;
    padding: .5rem;
    overflow-y: auto;
    font-weight: 300;
    font-family: Menlo, monospace;
    border-radius: .3rem;
  }
  pre {
    background-color: #283646;
  }
  pre > code{
    border: 0px;
    background-color: #283646;
    color: #FFF;
  }
  code {
    display: inline-block ;
    background-color:#f3f3f3;
    border:1px solid #fdb9cc;
    border-radius:3px;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    color:#4f4f4f;
    margin: 0px 3px;
  }
</style>