const app = new Vue({
	el:"#vue-app",
	data:{
		name : "Volkan",
		job: "Ninja",
		website: "http://volkanongun.com",
		websiteTag: '<a href="http://volkanongun.com">Link</a>'
	},
	template:`
		<div>
			<h1>Name: {{name}}</h1>
			<h2>Job: {{job}}</h2>
			<p>{{greet('afternoon')}}</p>
			<p><a :href="website" target="_blank">volkan's website</a></p>
			<p v-html="websiteTag"></p>
		</div>
	`,
	methods:{
		greet(time){
			return `Good ${time}` + ' ' + this.name
		}
	}
});