<template>
	<div id="app">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">

		<Nav title="TechPlasma"/>
	</div>
</template>

<script>
	import Nav from './Nav.vue'

	export default{
		name: 'app',
		components: {
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
		/*margin: 0px;*/
		/*width:100%;
		height: 100%;*/
	}
</style>
