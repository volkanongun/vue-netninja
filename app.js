const one = new Vue({
	el:"#vue-app-one",
	data:{
		title: "Vue app one"
	},
	template:`
		<div>
			<h2>{{title}}</h2>
			<p>{{greet}}</p>
		</div>
	`,
	methods:{
	},
	computed:{
		greet(){
			return 'Hello from app one :)';
		}
	}
});


const two = new Vue({
	el:"#vue-app-two",
	data:{
		title: "Vue app two"
	},
	template:`
		<div>
			<h2>{{title}}</h2>
			<p>{{greet}}</p>
			<button v-on:click="changeTitle">Change app one title</button>
		</div>
	`,
	methods:{
		changeTitle(){
			one.title = "Title changed"
		}
	},
	computed:{
		greet(){
			return 'Hello from app two :)';
		}	
	}
});