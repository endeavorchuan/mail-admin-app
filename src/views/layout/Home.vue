<template>
  <div class="home">
    <LeftMenu />
    <div :class="{'main-app': true, 'menu-unfold': $store.state.collapsed}">
      <SliderNav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/views/layout/components/menu.vue';
import SliderNav from '@/views/layout/components/sliderNav.vue';

export default {
  components: {
    LeftMenu,
    SliderNav,
  },

  data() {
    return {
    };
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");

</style>
