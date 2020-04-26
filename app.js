const app = new Vue({
	el:"#vue-app",
	data:{
		name : "Volkan",
		job: "Ninja",
		website: "http://volkanongun.com",
		websiteTag: '<a href="http://volkanongun.com">Link</a>',
		age : 25,
		x: 0,
		y: 0
	},
	template:`
		<div>
			<h1>Name: {{name}}</h1>
			<h2>Job: {{job}}</h2>
			<p>{{greet('afternoon')}}</p>
			<p><a :href="website" target="_blank">volkan's website</a></p>
			<p v-html="websiteTag"></p>
			<p>My age is {{ age }}</p>
			<p>
				<button @click.once='add'>Add a year</button>
				<button @click='subtract'>Subtract a year</button>
				<button @dblclick='addTenYears'>Add 10 years</button>
				<button @dblclick='subtractTenYears'>Subtract 10 years</button>
			</p>
			<div id="canvas" @mousemove="updateXY">{{x}}, {{y}}</div>
			<a @click.prevent="websiteclick" href="http://volkanongun.com">Volkan's website</a>
		</div>
	`,
	methods:{
		greet(time){
			return `Good ${time}` + ' ' + this.name
		},
		add(){
			this.age++
		},
		subtract(){
			this.age--
		},
		addTenYears(){
			this.age+=10
		},
		subtractTenYears(){
			this.age-=10
		},
		updateXY(e){
			// console.log(e)
			this.x = e.offsetX
			this.y = e.offsetY
		},
		websiteclick(){
			alert("clicked!")
		}
	}
});