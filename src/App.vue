<template>
  <div id="app">
    <layout-header />
    <!-- Begin page content -->
    <main role="main" class="container">
      <home/>
    </main>
    <layout-footer />
  </div>
</template>

<script>
  import LayoutHeader from './components/layout/LayoutHeader'
  import LayoutFooter from './components/layout/LayoutFooter'

  import Home from './components/Home'

  export default {
    name: 'app',
    data() {
      return {
        msg : 'Hello111'
      }
    },
    components : {
      'layout-header': LayoutHeader,
      'layout-footer': LayoutFooter,
      'home': Home
    }
  };
</script>
