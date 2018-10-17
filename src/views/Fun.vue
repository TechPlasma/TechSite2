<template>
	<div id="Fun">
		
		<md-card>
			<md-card-header>
				<div class="md-title">A Place Where I Test Stuff</div>
			</md-card-header>
			<md-card-content>
					
			</md-card-content>
		</md-card>
		<div class="md-layout md-alignment-top-left">
			<div class="md-layout-item">
				<md-card>
					<md-card-header>
						<div class="md-title">Markdown Input</div>
					</md-card-header>
					<md-card-content>
						<md-field>
							<label>Textarea</label>
							<md-textarea v-model="mData"></md-textarea>
						</md-field>	
					</md-card-content>
				</md-card>
			</div>
			<div class="md-layout-item">
				<md-card>
					<md-card-header>
						<div class="md-title">Markdown Output</div>
					</md-card-header>
					<md-card-content>
						<vue-markdown :source="mData"></vue-markdown>	
					</md-card-content>
				</md-card>
			</div>
		</div>		
	</div>
</template>

<script>
	export default{
		name: 'Fun',
		components: {
			
		},
		data: ()=> ({
			mData:"```JS\nlet i = null;\n```\n$E=mc^2$"
		})
	}
</script>

<style type="text/css" scoped>
	#Fun{
	}
	.md-card{
		border-radius: 10px;
	}
</style>