<template>
	<v-card class="justify-center" style="display:flex; min-height:500px; position: relative; background-color: #f5f5f5;">
		<kinesis-container event="scroll" class="parent d-none d-lg-block d-xl-block" style="position: absolute;">
			<kinesis-element
				class="child-pc"
				type="scale"
				transformOrigin="50% 150%"
				:strength="-8"
			/>
		</kinesis-container>
		
		<kinesis-container event="scroll" class="parent d-none d-lg-block d-xl-block" style="position: absolute;">
			<kinesis-element
				class="child1-pc"
				type="scale"
				transformOrigin="50% 500%"
				:strength="-10"
			/>
		</kinesis-container>

		<kinesis-container event="scroll" class="parent d-none d-lg-block d-xl-block" style="position: absolute;">
			<kinesis-element
				class="child2-pc"
				type="scale"
				transformOrigin="50% 500%"
				:strength="-15"
			/>
		</kinesis-container>

		<!-- mobile -->

		<kinesis-container event="scroll" class="parent d-block d-sm-block d-md-block d-lg-none" style="position: absolute;">
			<kinesis-element
				class="child"
				type="scale"
				transformOrigin="50% 150%"
				:strength="-8"
			/>
		</kinesis-container>
		
		<kinesis-container event="scroll" class="parent d-block d-sm-block d-md-block d-lg-none" style="position: absolute;">
			<kinesis-element
				class="child1"
				type="scale"
				transformOrigin="50% 500%"
				:strength="-10"
			/>
		</kinesis-container>

		<kinesis-container event="scroll" class="parent d-block d-sm-block d-md-block d-lg-none" style="position: absolute;">
			<kinesis-element
				class="child2"
				type="scale"
				transformOrigin="50% 500%"
				:strength="-15"
			/>
		</kinesis-container>

		<!-- 
			\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
			// 				CONTENT
			\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		-->

		<!-- pc -->

		<div class=" d-none d-lg-block d-xl-block " style="width: 60%; padding-bottom: 100px; background-color: #f5f5f5;" >
			<div id="info" class="section" style="height: 100px;"></div>
			<div class="d-flex">
				<v-card class="parentBg mr-10" width="50%" elevation="0" color="#f5f5f5" style="border-radius: 50px">
					<div>
						<h2 class="text-infos my-3 ml-2" style="color: #343a40;">Eveything You Need To Know</h2>
					</div>
						
					<v-card class="parentBg" height="100%" elevation="0" color="#f5f5f5">
						<div class="pl-16">
							<v-img draggable="false" src="https://avatars.githubusercontent.com/u/96514740?v=4" width="300px" style="border-radius: 100%;  opacity: 1 !important;"></v-img>
						</div>
					</v-card>
				</v-card>

				<v-divider vertical/>
				
				<v-card class="parentBg ml-10 text-center" width="50%" style="border-radius: 50px; padding-top: 80px;" color="#f5f5f5" elevation="0">
					<h1 class="text-infos shadow-in" style="font-size: 70px;">
						<b>2+</b>
					</h1>
					<p class="text-infos shadow-in" style="font-size: 50px; margin-top: -35px">years</p>
					&nbsp;
					<p class="text-infos shadow-in">of experience with</p>
					&nbsp;
					<p class="mx-5 text-infos shadow-in" style="font-size: 15px;">
						<b>Vuejs2, Vuetify2 & Laravel8</b>
					</p>
				</v-card>
			</div>

			<v-card class="parentBg pt-12" color="#f5f5f5" elevation="0">
				<h3 class="text-infos" style="color: #343a40;">Hello! im,</h3>
				<h1 class="title-infos" style="color: #343a40;">Joshua Tania</h1>

				<p class="pb-5 text-infos" style="text-overflow: wrap; color: #343a40;">
					A Passionate Front-end Developer and an aspiring
					full-stack developer focusing on Web App Development
					Currently Using <u>Vuejs3</u>, <u>Pinia</u>, <u>Vite</u> & <u>Vuetify3</u> as well as some 
					<u>Laravel 9</u>. 
					<br>
					<br>
					Graduated with Bachelor of Science in Information Technology at Cavite State University - Indang Main Campus, Philippines.

				</p>
				
				<v-btn class="text-infos" variant="outlined" color="#343a40">My Portfolio</v-btn>
			</v-card>
		</div>

		<!-- mobile -->

		<div id="info-canvas-mobile" class="d-block d-sm-block d-md-block d-lg-none" style="padding-top: 100px; padding-bottom: 100px;">

			<v-card class="parentBg"  elevation="0" color="#f5f5f5" style="border-radius: 30px">
				<div>
					<h2 class="text-infos my-3 ml-2" style="color: #343a40;">Everything You Need To Know</h2>
				</div>
					
				<v-card class="parentBg" height="100%" elevation="0" color="#f5f5f5">
					<div>
						<v-img draggable="false" src="https://avatars.githubusercontent.com/u/96514740?v=4" width="300px" style="border-radius: 100%; opacity: 1 !important;"></v-img>
					</div>
					
					<v-card color="#f5f5f5" class="pt-12 text-center" elevation="0">
						<h3 class="text-infos" style="color: #343a40;">Hello! im,</h3>
						<h1 class="title-infos" style="color: #343a40;">Joshua Tania</h1>

						<p class="pb-5 text-infos" style="text-overflow: wrap; color: #343a40;">
							A Passionate Front-end Developer and an aspiring
							full-stack developer focusing on Web App Development
							Currently Using <u>Vuejs3</u>, <u>Pinia</u>, <u>Vite</u> & <u>Vuetify3</u> as well as some 
							<u>Laravel 9</u>. 
							<br>
							<br>
							Graduated with Bachelor of Science in Information Technology at Cavite State University - Indang Main Campus, Philippines.
						</p>
						
						<v-btn class="text-infos" variant="outlined" color="#343a40">My Portfolio</v-btn>
					</v-card>
					
				</v-card>
			</v-card>

			<v-divider vertical/>
			
			<v-card class="parentBg text-center" style="border-radius: 50px; padding-top: 80px;" color="#f5f5f5" elevation="0">
				<h1 class="text-infos shadow-in" style="font-size: 70px;">
					<b>2+</b>
				</h1>
				<p class="text-infos shadow-in" style="font-size: 50px; margin-top: -35px">years</p>
				&nbsp;
				<p class="text-infos shadow-in">of experience with</p>
				&nbsp;
				<p class="mx-5 text-infos shadow-in" style="font-size: 15px;">
					<b>Vuejs2, Vuetify2 & Laravel8</b>
				</p>
			</v-card>
		</div>

	</v-card>
</template>

<style>
	.parent {
		width: 100vw;
		height: 100vh;
		
	}.child {
		margin-left: 3%;
		margin-top: 1%;
		border-radius: 50vh;
		width: 400px;
		height: 400px;
		background-color: #f5f5f5;
		border: 3px solid #6172849f;

	}.child1{
		margin-left: 78%;
		margin-top: 20%;
		border-radius: 50vh;
		width: 75px;
		height: 75px;
		background-color: #16304ba8;

	}.child2{
		margin-left: 87%;
		margin-top: 20%;
		border-radius: 50vh;
		width: 25px;
		height: 25px;
		background-color: #16304ba8;

	}.child-pc {
		margin-left: 10%;
		margin-top: 1%;
		border-radius: 50vh;
		width: 400px;
		height: 400px;
		background-color: #f5f5f5;
		border: 3px solid #6172849f;

	}.child1-pc{
		margin-left: 68%;
		margin-top: 16%;
		border-radius: 50vh;
		width: 75px;
		height: 75px;
		background-color: #16304ba8;

	}.child2-pc{
		margin-left: 77%;
		margin-top: 15%;
		border-radius: 50vh;
		width: 25px;
		height: 25px;
		background-color: #16304ba8;
	}
	.shadow-in{
		background-color: #343a40;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		color: transparent;
		text-shadow: rgba(210, 210, 210, 0.5) 0px 3px 3px;
	}

	.parentBg {
		background:#f5f5f578 !important;
	}

</style>