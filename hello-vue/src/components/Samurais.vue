<template>
	<div>
		<h1>Samurais</h1>
		<ul>
			<li v-for="ninja in ninjas" v-bind:key="ninja">{{ninja}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return { 
				ninjas: ['Ogami Ittō', 'Yagyū Retsudō', 'Haohmaru']
			}
		}
	}
</script>

<style scoped>
h1{
	color:green;
}
</style>