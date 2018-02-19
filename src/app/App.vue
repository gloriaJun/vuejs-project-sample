<template>
  <div id="app">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './layout/AppHeader'
  import AppSidebar from './layout/AppSidebar'
  import AppContent from './layout/AppContent'
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
      AppContent,
      AppFooter
    }
  };
</script>

<style lang="scss">
</style>
