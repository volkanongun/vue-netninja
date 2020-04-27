<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>  
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
        copyright: "® 2020"
      }
    }
  }
</script>

<style scoped>
footer{
  background: #222;
  padding: .5rem;
}

p{
  color:lightgreen;
  text-align: center;
}
</style>