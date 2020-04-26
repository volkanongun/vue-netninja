const app = new Vue({
	el:"#vue-app",
	data:{
		name : "Volkan",
	},
	template:`
		<div>
			<h1>Keyboard Events</h1>
			<label>Name:</label>
			<input type="text" name="" id="" v-on:keyup.enter="logName" />
			<label>Age:</label>
			<input type="text" name="" id="" v-on:keyup.enter="logAge" />
		</div>
	`,
	methods:{
		logName(){
			console.log('entered name')
			
		},
		logAge(){
			console.log('entered age')
		}
	}
});