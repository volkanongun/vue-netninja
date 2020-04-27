<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>  
</template>

<script>
  import { bus } from '../main.js'

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
    },
    created(){
      bus.$on('changeTitle', (data)=>{
        console.log(data, " <<<")
        this.title = data
      })
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