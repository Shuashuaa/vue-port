<template>
	<div id="contact" class="justify-center d-flex" style="background-color: #343a40; padding-top: 50px; padding-bottom: 50px;">

		<!-- mobile -->

		<div id="canvas" class="d-block d-sm-block d-md-none">
			<div class="mb-16 text-center" style="display: flex; flex-direction: column; align-items: center;">
				<v-img draggable="false" src="/logooo.png" width="100" class="mb-2"/>
				<p class="text-infos" style="color: #f5f5f5;">@2023 | Made with <v-icon>mdi-heart</v-icon> and <v-icon>mdi-coffee</v-icon> by <br>
					<b>
						<a style="color: #01b4d2;" href="https://github.com/Shuashuaa/">Jovi Joshua Tania</a>
					</b>.
				</p>
			</div>

			<div class="d-flex justify-center">

				<div>
					<h3 class="title-infos mb-5" style="color: white;">Social Links</h3>
					<div class="link" v-for="(social_link, i) in footerData.social_links" :key="i">
						<a class="text-infos" style="color: white; text-decoration: none; margin-bottom: 5px;" :href="social_link.link">
							{{social_link.name}}
						</a>
					</div>
				</div>

				<div class="ml-15">
					<h3 class="title-infos mb-5" style="color: white;">Made by Yours Truly</h3>
					<div class="link" v-for="(important_link, i) in footerData.important_links" :key="i">
						<a class="text-infos" style="color: white; text-decoration: none;" :href="important_link.link">
							{{important_link.name}}
						</a>
					</div>

					<h3 class="title-infos my-5" style="color: white;">Others</h3>
					<div class="link" v-for="(other, i) in footerData.others" :key="i">
						<a class="text-infos link" style="color: white; text-decoration: none;" :href="other.link">
							{{other.name}}
						</a>
					</div>
				</div>

				<!-- <div class="ml-15">
					<h3 class="title-infos mb-5" style="color: white;">Others</h3>
					<div class="link" v-for="(other, i) in footerData.others" :key="i">
						<a class="text-infos link" style="color: white; text-decoration: none;" :href="other.link">
							{{other.name}}
						</a>
					</div>
				</div> -->
			</div>

			
		</div>

		<!-- pc -->

		<div id="canvas" class="d-none d-md-flex d-lg-flex d-xl-flex">
			<div>
				<v-img draggable="false" src="/logooo.png" width="100" class="mb-2"/>
				<p class="text-infos" style="color: #f5f5f5;">@2023 | Made with <v-icon>mdi-heart</v-icon> and <v-icon>mdi-coffee</v-icon> by 
					<b>
						<a style="color: #01b4d2;" href="https://github.com/Shuashuaa/">Jovi Joshua Tania</a>
					</b>.
				</p>
			</div>

			<v-spacer/>

			<div >
				<h3 class="title-infos mb-5" style="color: white;">Made by Yours Truly</h3>
				<div class="link" v-for="(important_links, i) in footerData.important_links" :key="i">
					<a class="text-infos" style="color: white; text-decoration: none;" :href="important_links.link">
						{{important_links.name}}
					</a>
				</div>
			</div>

			<div class="ml-15">
				<h3 class="title-infos mb-5" style="color: white;">Nav Links</h3>
				<div class="link" v-for="(nav_link, i) in footerData.nav_links" :key="i">
					<a class="text-infos" style="color: white; text-decoration: none;" :href="nav_link.link">
						{{nav_link.name}}
					</a>
				</div>
			</div>

			<div class="ml-15">
				<h3 class="title-infos mb-5" style="color: white;">Social Links</h3>
				<div class="link" v-for="(social_link, i) in footerData.social_links" :key="i">
					<a class="text-infos" style="color: white; text-decoration: none;" :href="social_link.link">
						{{social_link.name}}
					</a>
				</div>
			</div>

			<div class="ml-15">
				<h3 class="title-infos mb-5" style="color: white;">Others</h3>
				<div class="link" v-for="(other, i) in footerData.others" :key="i">
					<a class="text-infos link" style="color: white; text-decoration: none;" :href="other.link">
						{{other.name}}
					</a>
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const footerData = ref({
			nav_links: [
				{id: 1, name: 'Home', link: '#'},
				{id: 2, name: 'Info', link: '#info'},
				{id: 3, name: 'Projects', link: '#projects'},
			],
			important_links: [
				{id: 1, name: 'Am I Responsive?', link: 'https://amiresponsive.netlify.app', icon: ''},
				
			],
			social_links: [
				{id: 1, name: 'Linkedin', link: 'https://www.linkedin.com/in/jovi-joshua-tania-b6586622a/', icon: ''},
				{id: 2, name: 'Github', link: 'https://github.com/Shuashuaa', icon: ''},
				{id: 3, name: 'X', link: '#', icon: ''},
				{id: 4, name: 'E-mail', link: 'jovijoshuatania027@gmail.com', icon: ''},
			],
			
			others: [
				{id: 1, name: 'Stacks', link: '#stacks', icon: ''},
			]
		})

		return { footerData }
	}
}
</script>

<style>
	.link:hover{
		text-decoration: underline;
		color: #01b4d2;
	}
</style>yar
