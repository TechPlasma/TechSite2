<template>
	<div id="Home" class="md-layout md-alignment-bottom-right">
		<md-card>
			<img alt="Vue logo" src="../assets/logo.png">
			<HelloWorld msg="Welcome to Your Vue.js App"/>	
		</md-card>
		<br>
		
	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'Home',
		components: {
			HelloWorld
		}
	}
</script>

<style type="text/css">
	#Home{
		height:100%;
		margin:0px;
		padding:0px;
	}
	.md-card{
		margin:10px;
		padding:0px;
	}
</style>