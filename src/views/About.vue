<template>
	<div id="About">
		<div class="md-layout md-alignment-center-center">
			<md-card>
				<md-card-media-cover>
					<md-card-media md-ratio="16:9" >
						<img src="../assets/20170628_193706_16_9.jpg" alt="People">
					</md-card-media>
				</md-card-media-cover>
				
				<md-card-area>
					<!-- <md-card-header>
						<div class="md-title"><h3>Saul Torres</h3></div>
					</md-card-header> -->

					<md-card-expand>
						<md-card-actions md-alignment="space-between">
							<div>
								<h1>About Me</h1>
							</div>

							<div>
								<md-button class="md-icon-button" href="https://github.com/TechPlasma" target="_blank">
									<md-icon class="fab fa-github"></md-icon>
									<md-tooltip md-direction="bottom">Github</md-tooltip>
								</md-button>

								<md-button class="md-icon-button" href="https://www.linkedin.com/in/techplasma/" target="_blank">
									<md-icon class="fab fa-linkedin"></md-icon>
									<md-tooltip md-direction="bottom">Linkedin</md-tooltip>
								</md-button>

								<md-button class="md-icon-button" @click="copyTC('Discord ID: TechPlasma#7708')">
									<md-icon class="fab fa-discord"></md-icon>
									<md-tooltip md-direction="bottom">Discord</md-tooltip>
								</md-button>

								<md-button class="md-icon-button" href="https://twitter.com/TechPlasma" target="_blank">
									<md-icon class="fab fa-twitter"></md-icon>
									<md-tooltip md-direction="bottom">Twitter</md-tooltip>
								</md-button>

								<md-button class="md-icon-button" href="https://steamcommunity.com/id/TechPlasma/" target="_blank">
									<md-icon class="fab fa-steam"></md-icon>
									<md-tooltip md-direction="bottom">Steam</md-tooltip>
								</md-button>	

								<md-button class="md-icon-button" href="https://www.instagram.com/tech_plasma/" target="_blank">
									<md-icon class="fab fa-instagram"></md-icon>
									<md-tooltip md-direction="bottom">Instagram</md-tooltip>
								</md-button>

								<md-button class="md-icon-button" href="https://www.youtube.com/channel/UCu_sD-evTi57XFjpFL1CfYg" target="_blank">
									<md-icon class="fab fa-youtube"></md-icon>
									<md-tooltip md-direction="bottom">Youtube</md-tooltip>
								</md-button>

								<md-button class="md-icon-button" href="https://techplasma.tumblr.com/" target="_blank">
									<md-icon class="fab fa-tumblr"></md-icon>
									<md-tooltip md-direction="bottom">Tumblr</md-tooltip>
								</md-button>

								<md-button class="md-icon-button" @click="copyTC('Slack ID: TechPlasma')">
									<md-icon class="fab fa-slack"></md-icon>
									<md-tooltip md-direction="bottom">Slack</md-tooltip>
								</md-button>

								<md-button class="md-icon-button" href="https://docs.google.com/document/d/1-DvEIh7YXVAJi6xwy5qTCJPIi9gV3xS6rtIeXthc5yY/export?format=pdf">
									<md-icon class="fas fa-file-pdf"></md-icon>
									<md-tooltip md-direction="bottom">Resume</md-tooltip>
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
								<vue-markdown>
# Saul Adrian Torres
### Context
I was born in San Antonio and have lived here for most of my life. When I was three my family moved for 2 years to Chicago where we had family. I attended kindergarten there but we moved back before I began 1st grade. The background for my website is possibly my favorite photo I have ever taken. Looking towards downtown Chicago from the Shedd Aquarium. Up through my entire education my family always managed to try and make a trip out of state at least once every two years with many trips to visit my cousins in El Paso. This lead to me having a love for visiting different cities and especially for the city I've spent the most time in other than San Antonio. Chicago itself.

### My Hobbies
Most of my free time is spent watching TV shows, Let's Plays or Reading Books. I tend to stick mostly to the Sci-Fi/ Fantasy genres though I'm finding myself increasingly interested in Documentaries about engineering feats. When I'm not doing that I'm actively exploring my interests in all manners of programming. Mostly JavaScript since that's fairly easy to get into. But I've spent just as much time exploring Flash, 3DS Max, drawing and writing. I'm not particularly good at the arts but I find that in one manner or another being familiar with the tools that artist use can often glean a perspective you wouldn't normally get when writing programs without the domain knowledge.


								</vue-markdown>
							</md-content>
						</md-card-expand-content>
					</md-card-expand>

				</md-card-area>
			</md-card>
		</div>
		
		<md-snackbar md-position="center" :md-duration="10000" :md-active.sync="showSnackbar" md-persistent align="center">
		<span >{{copyText}}</span>
			<md-button class="md-primary" @click="showSnackbar = false">
				<md-icon>close</md-icon>
			</md-button>
		</md-snackbar>
	</div>
</template>


<script>
	export default{
		name: 'About',
		components: {},
		data() {
			return {
				aboutData:"System data",
				getData:()=>{
					this.aboutData = FileReader.read("../assets/test.txt")
				},
				copyText: "default text",
				showSnackbar: false
			}		
		},
		methods:{
			copyTC: function (text){
				this.copyText = text;
				
				this.showSnackbar = true;
			}
		}
	}
</script>

<style type="text/css" scoped>
	#About{
		height:100%;
	}
	.md-card{
		padding: 10px;
		border-radius: 10px;
		width:1000px;
		max-width:75%;
	}
	h1{
		color:white;
		text-shadow:none;
	}
</style>