<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
  export default {
    props:{
      title:{
        type: String
      }
    },
    data(){
      return {
        titleeee: "Vue Ninjas"
      }
    },
    methods:{
      changeTitle(){
        this.$emit('changeTitle', 'Vue wizards')
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