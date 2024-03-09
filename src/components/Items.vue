<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const objArray = ref([]);
  const router  = useRouter();
  const toItemPage = (id, title, author, date) => {
    router.push({
      name: 'itemPage',
      params: {
        id: id,
        title: title,
        author: author,
        date: date
      },
    })
  }

  const getBasicInf = async () => {
    const retultJson = await axios.get('src/assets/jsons/db_1.json');
    objArray.value = Object.values(retultJson.data);
  }

  onMounted(() => {
    getBasicInf();
  })
</script>

<template>
  <div class="item" v-for="(obj, index) in objArray" :key="index">
    <h2 @click="toItemPage(index+1, obj.titel, obj.author, obj.date)">{{ obj.titel }}</h2>
    <div>
      <span>{{ obj.author }}</span>
      <span>{{ obj.date }}</span>
      <span>{{ obj.classify }}</span>
    </div>
    <div>{{ obj.describe }}</div>
  </div>
</template>

<style scoped lang="scss">

</style>