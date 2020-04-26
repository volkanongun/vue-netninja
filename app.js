const app = new Vue({
	el:"#vue-app",
	data:{
		error: false,
        success: false
	},
	template:`
		<div>
			<h1>Conditionals</h1>
			<button v-on:click="error = !error">Toggle Error</button>
			<button v-on:click="success = !success">Toggle Success</button>
			<!--
			<p v-if="error">There has been an error</p>
			<p v-else-if="success">Woo! success</p>
			-->
			<p v-show="error">There has been an error</p>
			<p v-show="success">Whoo, success!</p>
		</div>
	`,
	methods:{
		
	},
	computed:{
		computedClasses(){
			return {
				available: this.available,
				nearby: this.nearby
			}
		}
	}
});