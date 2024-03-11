<script setup>
  import { useRouter } from 'vue-router';
  import PageHeader from '../components/PageHeader.vue';
  import Items from '../components/Items.vue';
  import Sidebar from '../components/Sidebar.vue';
  import PageFoot from '../components/PageFoot.vue';
  import ItemPage from './ItemPage.vue';

  const router  = useRouter();
  const currentRoute = () => {
    return router.currentRoute.value.name
  }
</script>

<template>
  <div class="page-header">
    <PageHeader></PageHeader>
  </div>

  <div class="page-content">
    <div class="main">
      <div class="items">
        <Items></Items>
      </div>
      <div class="item-page" v-show="currentRoute() === 'itemPage'">
        <ItemPage></ItemPage>
      </div>
    </div>

    <div class="sidebar">
      <Sidebar></Sidebar>
    </div>
  </div>

  <div class="page-foot">
    <PageFoot></PageFoot>
  </div>
</template>

<style scoped lang="scss">
  .page-header {
    width: 100%;
    height: 170px;
    padding-top: 40px;
  }
  .page-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    .main {
      width: 65%;
    }
    .sidebar {
      width: 25%;
      height: auto;
    }
  }
  .page-foot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
  }
</style>