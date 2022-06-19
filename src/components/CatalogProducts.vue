<template>
<transition-group name="card-animation" tag="div" class="shop__catalog">
  <div class="card" v-for="item in items" :key="item.id">
    <img class="card__img" :src="item.img" alt="photo">
    <div class="card__description">
      <h3 class="card__name">{{item.name}}</h3>
      <p class="card__text">{{item.text}}</p>
      <div class="card__price">{{item.price}} руб.</div>
    </div>
    <button class="card__delete" @click="deleteItem(item.id)"></button>
  </div> 
</transition-group>  
</template>

<script>
export default {
  name: 'CatalogProducts',
  props: {
    items: {
      type: Array,
      default: ()=>[]
    }
  },
  methods: {
    deleteItem(id){
      this.$store.commit('deleteDataFromCatalogList', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.shop__catalog{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
}
.card{
  display: flex;
  flex-direction: column;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;

  &__img{
    width: 100%;
    border-radius: 4px 4px 0 0;
  }

  &__description{
    padding: 16px 16px 24px 16px;
  }

  &__name{
    font-weight: 600;
    font-size: 20px;
    margin: 0 0 16px 0;
  }

  &__text{
    font-size: 16px;
    margin: 0 0 32px 0;
  }

  &__price{
    font-weight: 600;
    font-size: 24px;
  }

  &__delete{
    opacity: 0;
    position: absolute;
    background-image: url("../assets/delete.svg");
    width: 32px;
    height: 32px;
    border: none;
    top: -8px;
    right: -8px;
    border-radius: 10px;

    @media (max-width: 1024px) {
      opacity: 1;
    }

    &:hover{
      opacity: 1;
    }
  }
}
.card{
  transition: all 1s;
}
.card-animation-enter-active, .card-animation-leave-active {
  transition: all 1s;
}
.card-animation-enter, .card-animation-leave-to{
  opacity: 0;
  transform: scale(0.5);
}
</style>