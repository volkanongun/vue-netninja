const app = new Vue({
	el:"#vue-app",
	data:{
		characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
            { name: 'Ryu', age: 25 },
            { name: 'Yoshi', age: 35 },
            { name: 'Ken', age: 55 }
        ]
	},
	template:`
		<div>
			<h1>V-For</h1>
			<ul>
				<li v-for="character in characters">{{character}}</li>
			</ul>

			<ul>
				<li v-for="(ninja, index) in ninjas">{{ninja.name}} - {{ninja.age}}</li>
			</ul>

			<div v-for="(ninja, index) in ninjas">
				<h3>{{index}} . {{ninja.name}}</h3>
				<p>{{ninja.age}}</p>
			</div>

			<template v-for="(ninja, index) in ninjas">
				<h3>{{index}} . {{ninja.name}}</h3>
				<p>{{ninja.age}}</p>
			</template>

			<template v-for="ninja in ninjas">
				<div v-for="(val,key) in ninja">
					<p>{{ key }} - {{ val }}</p>
				</div>
			</template>
		</div>
	`,
	methods:{
		
	},
	computed:{
		computedClasses(){

		}
	}
});