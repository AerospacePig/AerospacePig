<script setup>
  import { ref, onMounted, watch, defineEmits, defineProps } from 'vue';
  import { marked } from 'marked';
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
</style>