<template>
	<div id="app">
		<Nav title="TechPlasma"/>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	import Nav from './components/Nav.vue'

	export default {
		name: 'app',
		components: {
			HelloWorld,
			Nav
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
	}
</style>
