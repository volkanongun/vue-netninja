<template>
  <div>
    <app-header></app-header>
    <app-body v-bind:ninjas="ninjas"></app-body>
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
        ninjas: [
          {name: 'Ryu', speciality: 'Vue Components', show: false},
          {name: 'Hattori', speciality: 'HTML Wizardry', show: false},
          {name: 'Hitoshi', speciality: 'Click Events', show: false},
          {name: 'Hanzo', speciality: 'Conditionals', show: false},
          {name: 'Kami', speciality: 'Webpack', show: false},
          {name: 'Yoshi', speciality: 'Data Diggin', show: false}
        ]
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
