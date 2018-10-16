<template>
	<div id="Home" class="md-layout md-alignment-center-center">		<!-- <md-card>
			<img alt="Vue logo" src="../assets/logo.png">
			<HelloWorld msg="Welcome to Your Vue.js App"/>	
		</md-card> -->

		<img src="@/assets/TPLogoInvis@16x.png">
		
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data: ()=> ({
			mData:"``` Java\npublic static void main(String [] args){\nSystem.out.println(\"Hello World!\");\n}\n```\n\n<md-card>Hello World</md-card>"
		})
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
	img{
		width:300px;
	}
</style>