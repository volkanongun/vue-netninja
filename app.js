var app = new Vue({
	el:"#vue-app",
	template:`
		<div>
			<h1></h1>
			<input type="text" name="" id="" ref="input">
			<button v-on:click="readRefs">Submit</button>
			<p>Your fav food: {{ output }}</p>
			<div ref="test"></div>
		</div>
	`,
	data:{
		output: ""
	},
	methods:{
		readRefs(){
			console.log(this.$refs)
			this.output = this.$refs.input.value
		}
	}
});