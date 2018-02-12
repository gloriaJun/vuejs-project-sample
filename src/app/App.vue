<template>
  <div id="app">
    <app-header />
    <!-- Begin page content -->
    <main role="main" class="container">
      <router-view></router-view>
    </main>
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './layout/AppHeader'
  import AppFooter from './layout/AppFooter'

  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components : {
      'app-header': AppHeader,
      'app-footer': AppFooter
    }
  };
</script>

<style lang="scss">
</style>
