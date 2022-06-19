<template>
  <div id="app">
    <ShopView />
  </div>
</template>

<script>
import ShopView from './views/Shop.vue'

export default {
  name: 'App',
  components: {
    ShopView
  }
}
</script>

<style>
#app{
  margin: 32px;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
  color: #3F3F3F;
  font-weight: 400;
}
</style>
