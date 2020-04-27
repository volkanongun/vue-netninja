<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ title }}</p>
    <p>{{ greeting() }}</p>
    <Ninjas></Ninjas>
    <samurais></samurais>
  </div>
</template>

<script>
import Ninjas from './components/Ninjas.vue'

export default {
  name: 'App',
  data(){
    return {
      title: 'Ninja App',
    }
  },
  components:{
    Ninjas
  },
  methods:{
    greeting(){
      return "Greetings!"
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
