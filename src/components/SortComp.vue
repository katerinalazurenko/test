<template>
<div class="sort">
  <select name="" id="" @change="sort($event)">
    <option value="default">По умолчанию</option>
    <option value="min">По цене min</option>
    <option value="max">По цене max</option>
    <option value="name">По наименованию</option>
  </select>
</div>  
</template>

<script>
export default {
  name: 'SortComp',
  methods: {
    sort(event) {
      switch(event.target.value){
        case "min":
          this.$store.commit('sortDataByMinPrice');
          break;
        case "max":
          this.$store.commit('sortDataByMaxPrice');
          break;
        case "name":
          this.$store.commit('sortDataByName');
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sort{
  width: 122px;
}

select{
  border: none;
  background: #FFFEFB url('../assets/arrow.svg') no-repeat 92% 48%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
  padding: 10px 0 11px 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

</style>