const app = new Vue({
	el:"#vue-app",
	data:{
		age : 39,
		a: 0,
		b: 0
	},
	template:`
		<div>
			<h1>Computed Properties</h1>
			<button v-on:click="a++"></button>
			<button v-on:click="b++"></button>
			<p>A - {{ a }}</p>
			<p>B - {{ b }}</p>
		</div>
	`,
	methods:{
		
	}
});