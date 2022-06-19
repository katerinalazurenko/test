<template>
<div class="wrapper">
  <header class="header">
    <h1>Добавление товара</h1>
    <SortComp />
  </header>
  <div class="shop">
    <ProductAddingForm />
    <PreloaderComp v-if="loadingStatus"/>
    <CatalogProducts :items="catalogList" />
  </div> 
</div>
</template>

<script>
import CatalogProducts from '../components/CatalogProducts.vue'
import ProductAddingForm from '../components/ProductAddingForm.vue'
import SortComp from '../components/SortComp.vue'
import PreloaderComp from '../components/PreloaderComp.vue'

export default {
  name: 'ShopView',
  components: {
    CatalogProducts,
    ProductAddingForm,
    SortComp,
    PreloaderComp
  },
  computed:{
    catalogList(){
      return this.$store.getters.getCatalogList
    },
    loadingStatus(){
      return this.$store.getters.getLoadindStatus
    }
  },
  created() {
    this.$store.dispatch('fetchData')
  }
}
</script>

<style lang="scss" scoped>

h1{
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}
.wrapper{
  display: flex;
  flex-direction: column;
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
}
.shop{
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 2fr;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

</style>