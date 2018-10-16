<template>
	<div id="Nav">
		<md-app style="min-height: 100vh;" class="page-container md-layout-column">
			<md-app-toolbar class="semi-transparent md-dense tbspace" md-elevation="2">
				<span class="md-title">{{title}}</span>
			</md-app-toolbar>

			<md-app-drawer :md-active.sync="menuVisible" md-permanent="full" md-persistent="mini" 
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

					<md-list-item to="/">
						<md-icon :class="{activeLink:$route.path == '/'}">
							home
						</md-icon>
						<span class="md-list-item-text">Home</span>
						<md-tooltip md-direction="left">Home</md-tooltip>
					</md-list-item>

					<md-list-item to="/about">
						<md-icon :class="{activeLink:$route.path == '/about'}">
							face
						</md-icon>
						<span class="md-list-item-text">About Me</span>
						<md-tooltip md-direction="left">About Me</md-tooltip>
					</md-list-item>

					<md-list-item to="/work">
						<md-icon :class="{activeLink:$route.path == '/work'}">
							work
						</md-icon>
						<span class="md-list-item-text">Work</span>
						<md-tooltip md-direction="left">Work</md-tooltip>
					</md-list-item>

					<md-list-item to="/resume">
						<md-icon :class="{activeLink:$route.path == '/resume'}">
							description
						</md-icon>
						<span class="md-list-item-text">Resume</span>
						<md-tooltip md-direction="left">Resume</md-tooltip>
					</md-list-item>

					<md-list-item to="/projects">
						<md-icon :class="{activeLink:$route.path == '/projects'}">
							class
						</md-icon>
						<span class="md-list-item-text">Projects</span>
						<md-tooltip md-direction="left">Projects</md-tooltip>
					</md-list-item>

					<md-list-item to="/fun">
						<md-icon :class="{activeLink:$route.path == '/fun'}">
							weekend
						</md-icon>
						<span class="md-list-item-text">Fun</span>
						<md-tooltip md-direction="left">Fun</md-tooltip>
					</md-list-item>
				</md-list>
			</md-app-drawer>

			<md-app-content class="" ><!-- style="padding:0px;" -->

				<router-view/>
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
	.activeLink{
		color:grey!important;
	}
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
		background-image: url('./assets/20170622_150742.jpg');
		background-position:  50% 70%;
		background-size: cover;
	}
</style>