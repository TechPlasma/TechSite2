<template>
	<div id="About">
		<div class="md-layout md-alignment-center-center">
			<md-card>
				<md-card-media-cover md-text-scrim>
					<md-card-media md-ratio="16:9">
						<img src="../assets/20170622_150742.jpg" alt="People">
					</md-card-media>
				</md-card-media-cover>
				
				<md-card-area>
					<md-header>
						<div class="md-title"><h3>Saul Torres</h3></div>
					</md-header>
					<md-card-expand>
						<md-card-actions md-alignment="space-between">
							<div>
								<md-button class="md-icon-button">
									<md-icon class="fab fa-github"></md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon class="fab fa-discord"></md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon class="fab fa-youtube"></md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon class="fab fa-twitter"></md-icon>
								</md-button>	

								<md-button class="md-icon-button">
									<md-icon class="fab fa-instagram"></md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon class="fab fa-steam"></md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon class="fab fa-slack"></md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon class="fab fa-tumblr"></md-icon>
								</md-button>	
							</div>

							<md-card-expand-trigger>
								<md-button class="md-icon-button">
									<md-icon>keyboard_arrow_down</md-icon>
								</md-button>
							</md-card-expand-trigger>
						</md-card-actions>

						<md-card-expand-content>
							<md-content>
								<h3>Saul Torres</h3>
								<h4>Hobbies</h4>
								<p>Lorem Ipsum dlakfnlknsaklfn lksajnlfi jasl jsadlkfnlasi alsknn falknaslf kas fliklan lakf alk ajfskn</p>
								<h4>Interests</h4>
								<p>Lorem Ipsum dlakfnlknsaklfn lksajnlfi jasl jsadlkfnlasi alsknn falknaslf kas fliklan lakf alk ajfskn</p>
								<br>
								<br>
								<br>
							</md-content>
						</md-card-expand-content>
					</md-card-expand>

				</md-card-area>
			</md-card>
		</div>
		

	</div>
</template>


<script>
	export default{
		name: 'About',
		components: {}
	}
</script>

<style type="text/css" scoped>
	#About{
		height:100%;
	}
	.md-card{
		padding: 10px;
		border-radius: 10px;
	}
</style>