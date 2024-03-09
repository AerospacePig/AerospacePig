<script setup>
  import { ref, onBeforeMount, watch } from 'vue';
  import { marked } from 'marked';
  import axios from 'axios';
  import { useRoute } from "vue-router";

  const itemContent = ref(null);
  const route = useRoute();

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

  onBeforeMount(() => {
    watch(() => route.params, (newParams) => {
      if (Object.keys(route.params).length !== 0) {
        requestContent(newParams.id);
      }
    });
  });
</script>

<template>
  <!-- <div class="item-header">
    <h1>{{ props.titel }}</h1>
    <div>
      <span>{{ props.author }}</span>
      <span>{{ props.date }}</span>
    </div>
  </div> -->

  <div class="item-content" v-show="itemContent" v-html="itemContent"></div>
</template>

<style scoped lang="scss">

</style>