<template>
	<div id="Home"> <!-- class="md-layout md-alignment-center-center" -->
		<!-- <md-card>
			<img alt="Vue logo" src="../assets/logo.png">
			<HelloWorld msg="Welcome to Your Vue.js App"/>	
		</md-card> -->

		<img src="../assets/TPLogoInvis@16x.png">
		<br>

		<md-field>
			<label>Textarea</label>
			<md-textarea v-model="mData"></md-textarea>
		</md-field>


		<vue-markdown :source="mData"></vue-markdown>
		<br>
		<vue-markdown></vue-markdown>


		<vue-markdown>**Inline Math**: $\sqrt{3x-1}+(1+x)^2$</vue-markdown>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data: ()=> ({
			mData:"``` Java\npublic static void main(String [] args){\nSystem.out.println(\"Hello World!\");\n}\n```"
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