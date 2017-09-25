<template>
  <div>
      Hello Vue
      <hr>
      {{name}}

      <router-view></router-view>
  </div>
</template>



<script>
export default {
  data(){
      return {
          name: "易俊雄"
      }
  }
}
</script>

<style>

</style>

