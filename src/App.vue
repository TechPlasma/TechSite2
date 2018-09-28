<template>
	<div id="app">
		<Home msg="TechPlasma"/>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	import Home from './components/Home.vue'
	import PersistentMini from './components/PersistentMini.vue'

	export default {
		name: 'app',
		components: {
			HelloWorld,
			Home,
			PersistentMini
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 0px;
		width:100%;
		height: 100%;
		background-color: black;
	}
</style>
