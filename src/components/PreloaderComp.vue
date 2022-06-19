<template>
<div class="preloader">
  <div class="preloader__arrow"></div>
</div>  
</template>

<script>
export default {
  name: 'PreloaderComp',
}
</script>

<style lang="scss" scoped>
.preloader{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__arrow{
  width: 100%;
  height: 100%;
  background:url("../assets/preloader.png") no-repeat 50%/100px;
  animation: rotation 1s linear infinite;
  opacity: 0.5;
}
}

@keyframes rotation { to{ transform: rotate(360deg)}}

</style>