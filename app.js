const app = new Vue({
	el:"#vue-app",
	data:{
		name : "Volkan",
		age : 39
	},
	template:`
		<div>
			<h1>Keyboard Events</h1>
			<p><label>Name:</label>
						<input type="text" v-model="name" />
						<span>{{ name }}</span></p>
			<p><label>Age:</label>
						<input type="text" v-model="age" />
						<span>{{ age }}</span></p>
		</div>
	`,
	methods:{
		logName(){

			
		},
		logAge(){
			console.log('entered age')
		}
	}
});