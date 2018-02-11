<template>
  <div id="app">
    <layout-header />
    <!-- Begin page content -->
    <main role="main" class="container">
      <!--<default-home/>-->
      <router-view></router-view>
    </main>
    <layout-footer />
  </div>
</template>

<script>
  import LayoutHeader from './components/layout/LayoutHeader'
  import LayoutFooter from './components/layout/LayoutFooter'

  export default {
    name: 'app',
    data() {
      return {
      }
    },
    components : {
      'layout-header': LayoutHeader,
      'layout-footer': LayoutFooter
    }
  };
</script>
