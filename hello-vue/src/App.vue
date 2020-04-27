<template>
  <div>
    <app-header></app-header>
    <app-body></app-body>
    <app-footer></app-footer>
  </div>
</template>

<script>

  import Header from "./components/Header.vue";
  import Ninjas from "./components/Ninjas.vue";
  import Footer from "./components/Footer.vue";

  export default {
    components:{
      'app-header' : Header,
      'app-body' : Ninjas,
      'app-footer' : Footer
    },
    data(){
      return {

      }
    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
