<template>
	<div id="Home" class="md-layout md-alignment-center-center">		<!-- <md-card>
			<img alt="Vue logo" src="../assets/logo.png">
			<HelloWorld msg="Welcome to Your Vue.js App"/>	
		</md-card> -->
		<table>
			<md-tooltip md-direction="above">About Me</md-tooltip>
			<tr>
				<router-link to="/about">
					<img src="../assets/TPLogoInvis@16x.png">

				</router-link>
			</tr>
			<tr>
				<h1>TechPlasma</h1>
			</tr>
		</table>

		<div class="floatingLU">
			Last Update:<br>
			2018-10-17
		</div>
		
		
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

<style type="text/css" scoped>
	#Home{
		height:100%;s
		margin:0px;
		padding:0px;
	}
	img{
		width:300px;
	}
	h1{
		color:grey;
		text-shadow: 1px 1px 10px #fff, 1px 1px 10px #fff;
	}
	.floatingLU{
		position: fixed;
		right: 0;
		top:0;
		margin: 10px 
	}
</style>