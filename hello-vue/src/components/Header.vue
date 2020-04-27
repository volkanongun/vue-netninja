<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
  export default {
    data(){
      return {
        title: "Vue Ninjas"
      }
    }
  }
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header{
  background:lightgreen;
  padding: 1rem;
}
h1{
  color:#222;
  text-align: center;
}
</style>