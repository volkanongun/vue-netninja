Vue.component('greeting', {
	template:'<p>Hey, I\'m a reusable component! {{name}}<button v-on:click="changeName">Change name</button></p>',
	data(){
		return {
			name: 'Yoshi'
		}
	},
	methods:{
		changeName(){
			this.name = 'mario'
		}
	}
})

new Vue({
	el:"#vue-app-one",
	
});

const two = new Vue({
	el:"#vue-app-two",

});