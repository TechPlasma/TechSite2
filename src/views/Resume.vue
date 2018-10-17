<template>
	<div id="Resume" class="about md-layout md-alignment-center-center">
		<!-- <h1>Resume</h1> -->
		<div class="md-layout-item div1">
			<embed src="https://drive.google.com/viewerng/
viewer?embedded=true&url=https://docs.google.com/document/d/1-DvEIh7YXVAJi6xwy5qTCJPIi9gV3xS6rtIeXthc5yY/export?format=pdf">
		</div>
		<div class="md-layout-item">
			<md-button class="md-raised md-primary" href="https://docs.google.com/document/d/1-DvEIh7YXVAJi6xwy5qTCJPIi9gV3xS6rtIeXthc5yY/export?format=pdf">Download</md-button>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Resume',
		components: {
			
		}
	}
</script>

<style type="text/css" scoped>
	#Resume{
		height:100%;
	}
	.div1{
		height:100%;
	}
	embed{
		height:100%;
		width:900px;
		max-width: 100%;
	}
</style>