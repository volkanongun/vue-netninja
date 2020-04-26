const app = new Vue({
	el:"#vue-app",
	data:{
		health: 100,
		ended: false
	},
	template:`
		<div>
			<h1>Punchbag Game</h1>
			<!-- punchbag image -->
			<div id="bag" v-bind:class="{ burst: ended }"></div>

			<!-- punchbag health -->
			<div id="bag-health">
				<div v-bind:style="{width: health + '%'}"></div>
			</div>

			<!-- game controls -->
			<div id="controls">
				<button v-on:click="punch" v-show="!ended">Punch</button>
				<button v-on:click="restart">Restart</button>
			</div>
		</div>
	`,
	methods:{
		punch(){
			this.health -= 10
			if(this.health <= 0){
				this.ended = true;
			}
		},
		restart(){
			this.health = 100
			this.ended = false
		}
	},
	computed:{
		
	}
});