<template>
  <div id="app">
    <layout-header />
    <div class="container">
      <!--<router-view />-->
    </div>
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
        msg : 'Hello'
      }
    },
    components : {
      'layout-header': LayoutHeader,
      'layout-footer': LayoutFooter
    }
  };
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import 'assets/style/custom-bootstrap.scss';
</style>
