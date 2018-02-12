<template>
  <div id="app">
    <app-header />
    <!-- Begin page content -->
    <main role="main" class="container">
      <!--<default-home/>-->
      <router-view></router-view>
    </main>
    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './components/layout/AppHeader'
  import AppFooter from './components/layout/AppFooter'

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
