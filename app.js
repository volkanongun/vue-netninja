const app = new Vue({
	el:"#vue-app",
	data:{
		available: false,
		nearby: false
	},
	template:`
		<div>
			<h1>Dynamic CSS</h1>
			<h2>Example 1</h2>
			<!-- <div v-on:click="available = !available" v-bind:class="{ available: available }">
			 	<span>Ryu</span>
			 </div> -->
			<h2>Example 2</h2>
			<button v-on:click="available = !available">Toggle available</button>
			<button v-on:click="nearby = !nearby">Toggle nearby</button>

			<div v-bind:class="computedClasses">
				<span>Ryu</span>
			</div>
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