<template>
	<div id="Nav">
		<md-app style="min-height: 100vh;" class="page-container md-layout-column">
			<md-app-toolbar class="semi-transparent md-dense tbspace" md-elevation="2">
				<span class="md-title">{{title}}</span>
			</md-app-toolbar>

			<md-app-drawer :md-active.sync="menuVisible" md-permanent="clipped" md-persistent="mini" 
			class="semi-transparent">
				<md-list class="transparent">
					<md-list-item @click="toggleMenu" v-if="!menuVisible">
						<md-icon>keyboard_arrow_right</md-icon>
						<span class="md-list-item-text">Navigation</span>
					</md-list-item>
					<md-list-item @click="toggleMenu" v-if="menuVisible">
						<md-icon>keyboard_arrow_left</md-icon>
						<span class="md-list-item-text">Navigation</span>
					</md-list-item>
					<md-list-item @click="toggleMenu">
						<md-icon>home</md-icon>
						<span class="md-list-item-text">Home</span>
					</md-list-item>
					<md-list-item @click="toggleMenu">
						<md-icon>face</md-icon>
						<span class="md-list-item-text">About Me</span>
					</md-list-item>
					<md-list-item @click="toggleMenu">
						<md-icon>work</md-icon>
						<span class="md-list-item-text">Work</span>
					</md-list-item>
					<md-list-item @click="toggleMenu">
						<md-icon>description</md-icon>
						<span class="md-list-item-text">Resume</span>
					</md-list-item>
					<md-list-item @click="toggleMenu">
						<md-icon>class</md-icon>
						<span class="md-list-item-text">Projects</span>
					</md-list-item>
					<md-list-item @click="toggleMenu">
						<md-icon>weekend</md-icon>
						<span class="md-list-item-text">Home</span>
					</md-list-item>
				</md-list>
			</md-app-drawer>

			<md-app-content class="transparent" style="padding:0;" align="center">


				<!-- <md-card class="transparent" md-elevation="5">
					<img src="../assets/TPLogoInvis@16x.png" style="width:20vw;">
				</md-card> -->

				
				
			</md-app-content>
		</md-app>
	</div>
</template>

<script>
	export default {
		name: 'Nav',
		props: {
			title: String
		},
		data: () => ({
			menuVisible:false
		}),
		methods: {
			toggleMenu() {
				this.menuVisible = !this.menuVisible
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.md-card{
		width:20vw;
	}
	.transparent{
		background-color: transparent !important;
	}
	.semi-transparent{
		background-color: rgba(0,0,0,0.5)!important;
	}
	.tbspace{
		display:flex;
		justify-content: center;
	}
	#Nav{
		text-align: center;
	}
	.md-drawer {
		width:50%;
		max-width: 200px;
	}
	.md-app{
		background-image: url('../assets/20170622_150742.jpg');
		background-position:  50% 70%;
		background-size: cover;
	}
</style>