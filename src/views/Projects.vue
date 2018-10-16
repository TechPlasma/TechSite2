<template>
	<div id="Projects" class="about md-layout md-alignment-bottom-left">
		<div class="md-layout-item">
			<md-field>
				<label>Textarea</label>
				<md-textarea v-model="mData"></md-textarea>
			</md-field>
		</div>
		<div class="md-layout-item">
			
		</div>
		<div class="md-layout-item">
			<vue-markdown :source="mData"></vue-markdown>
		</div>

		
		
	</div>
</template>

<script>
	export default{
		name: 'Projects',
		components: {},
		data: ()=> ({
			mData:"```JS\nlet i = null;\n```"
		})
	}
</script>

<style type="text/css" scoped>
	#Projects{
		height:100%;
		width:100%;
	}
</style>