<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>  
</template>

<script>
  export default {
    data(){
      return {
        copyright: "® 2020 Vue Ninjas"
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