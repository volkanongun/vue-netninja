<template>
	<div>
		<h1>Ninjas</h1>
		<ul>
			<li v-for="ninja in ninjas" v-bind:key="ninja">{{ninja}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return { 
				ninjas: ['yoshi', 'hattori', 'hanzo']
			}
		}
	}
</script>

<style scoped>
h1{
	color:purple;
}
</style>