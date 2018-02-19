<template>
  <div id="app">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <!-- Begin page content -->
    <!--<main role="main" class="container">-->
      <!--<router-view></router-view>-->
    <!--</main>-->
    <!--<app-footer />-->
  </div>
</template>

<script>
  import AppHeader from './layout/AppHeader'
  import AppSidebar from './layout/AppSidebar'
  import AppFooter from './layout/AppFooter'

  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components : {
      AppHeader,
      AppSidebar,
      AppFooter
    }
  };
</script>

<style lang="scss">
</style>
