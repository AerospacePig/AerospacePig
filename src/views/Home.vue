<script setup>
  import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue';
  import { useRouter } from 'vue-router';
  import PageHeader from '../components/PageHeader.vue';
  import Items from '../components/Items.vue';
  import Sidebar from '../components/Sidebar.vue';
  import PageFoot from '../components/PageFoot.vue';
  import ItemPage from './ItemPage.vue';
  import Loading from '../components/Loading.vue'

  const loading = ref(false);
  const classify = ref('');
  const screenSize = ref('');
  const router  = useRouter();
  const currentRoute = () => {
    return router.currentRoute.value.name
  }
  const emit = defineEmits(['screen-size'])

  const transferClassify = (value) => {
    classify.value = value;
  }
  const startLoading = (value) => {
    loading.value = value;
  }

  const checkScreenSize = () => {
    screenSize.value = window.innerWidth > 600 ? 'large' : 'small';
    emit('screen-size', screenSize.value);
  };
  onMounted(() => {
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
  });
</script>

<template>
  <div class="page-header" :class="{ 'small-header': screenSize === 'small' }">
    <PageHeader :screenSize="screenSize"></PageHeader>
  </div>

  <div class="page-content">
    <div class="main" :style="{ width: screenSize === 'large' ? '65%' : '100%'}">
      <div v-show="!loading">
        <Items :classify="classify" :screenSize="screenSize"></Items>
      </div>
      <div v-show="currentRoute() === 'itemPage'">
        <ItemPage @loading="startLoading" :screenSize="screenSize"></ItemPage>
      </div>
    </div>

    <div class="sidebar" v-if="screenSize === 'large'">
      <Sidebar @transitive-classify="transferClassify"></Sidebar>
    </div>
  </div>

  <div class="page-foot" v-if="screenSize === 'large'">
    <PageFoot></PageFoot>
  </div>

  <div class="loading" v-if="loading">
    <Loading></Loading>
  </div>
</template>

<style scoped lang="scss">
  .page-header {
    width: 100%;
    height: 170px;
    padding-top: 40px;
  }
  .small-header {
    height: 120px;
    padding-top: 20px;
    margin-bottom: 30px;
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
  .loading {
    transform: translate(275px, -750px);
    width: 40px;
    height: 40px;
  }
</style>