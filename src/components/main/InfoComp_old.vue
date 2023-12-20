<template>
	<div id="goToInfo" class="justify-center d-flex" style="background-color: #f5f5f5; min-height:500px; padding-top: 100px; padding-bottom: 100px; position: relative">
		<kinesis-container event="scroll" class="parent" style="position: absolute;">
			<kinesis-element
				class="child"
				type="scale"
				transformOrigin="200% 50%"
				:strength="-20"
			/>
		</kinesis-container>

		<div id="info-canvas" class="d-none d-md-flex d-lg-flex d-xl-flex">

			<v-card width="80%" style="border-radius: 1px; border-bottom: 1px solid #343A40;" elevation="0" color="#f5f5f5">
				<div>
					<h2 class="my-3" style="color: #343a40;">EVERYTHING YOU NEED TO KNOW</h2>
				</div>
					
				<v-card class="d-flex" height="100%" style="border-radius: 1px; border-top: 1px solid #343A40; border-left: 1px solid #343A40; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
					<div>
						<v-img src="https://avatars.githubusercontent.com/u/96514740?v=4" width="300px" style="border-radius: 100%; margin: 50px 50px 50px 50px"></v-img>
					</div>
					
					<div class="pt-12">
						<h3 class="text-infos">Hello! im,</h3>
						<h1 class="title-infos">Your name</h1>

						<p class="text-infos" style="text-overflow: wrap;">a SADADJWDJWAKDWAdkajwdlkalkdwja;ldkw;lakd;l awkdaasdasdsadasdada1da31d35a1dw5a1 d53wa1d35a1511551533333</p>
						
						<v-btn class="text-infos" color="#D9D9D9">download someone's port</v-btn>
					</div>
					
				</v-card>
			</v-card>
			
			<v-card class="text-center" width="20%" style="border-radius: 1px; padding-top: 80px; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;" color="#343A40">
				<h1 class="text-infos" style="font-size: 70px; color: #BDDCFC;">
					<b>2+</b>
				</h1>
				<p class="text-infos" style="font-size: 50px; color: #BDDCFC; margin-top: -35px">years</p>
				&nbsp;
				<p class="text-infos" style="color: #BDDCFC;">of asdasdsada with</p>
				&nbsp;
				<p class="mx-5 text-infos" style="font-size: 15px; color: #BDDCFC;">
					<b>ASDAASD, ASDASDA & ASDADADS</b>
				</p>
			</v-card>
		</div>

		<!-- mobile -->

		<div style="width: 70%;" class="d-block d-sm-block d-md-none">
			<v-card style="border-radius: 1px; border-bottom: 1px solid #343A40;" elevation="0" color="#f5f5f5">
				<div>
					<h2 class="" style="color: #343a40;">EVERYTHING YOU NEED TO KNOW</h2>
				</div>
					
				<v-card class="d-block text-center" height="100%" style="padding: 50px 50px 50px 50px; border-radius: 1px; border-top: 1px solid #343A40; border-right: 1px solid #343A40; border-left: 1px solid #343A40; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
					<div class="d-flex text-center">
						<v-img src="https://avatars.githubusercontent.com/u/96514740?v=4" width="300px" style="border-radius: 100%; "></v-img>
					</div>
					
					<div>
						<h3 class="text-infos">Hello! im,</h3>
						<h1 class="text-infos">Your name</h1>

						<p class="text-infos" style="text-overflow: wrap;">a SADADJWDJWAKDWAdkajwdlkalkdwja;ldkw;lakd;l awkdaasdasdsadasdada1da31d35a1dw5a1</p>
						
						<v-btn class="text-infos" color="#D9D9D9">Portfolio</v-btn>
					</div>
					
				</v-card>
			</v-card>
			
			<v-card class="text-center" style="border-radius: 1px; padding: 20px; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;" color="#343A40">
				<h1 class="text-infos" style="font-size: 70px; color: #BDDCFC;">
					<b>2+</b>
				</h1>
				<p class="text-infos" style="font-size: 50px; color: #BDDCFC; margin-top: -35px">years</p>
				&nbsp;
				<p class="text-infos" style="color: #BDDCFC;">of asdasdsada with</p>
				&nbsp;
				<p class="mb-5 text-infos" style="font-size: 15px; color: #BDDCFC;">
					<b>ASDAASD, ASDASDA & ASDADADS</b>
				</p>
			</v-card>
		</div>

		<!-- <kinesis-container event="scroll" class="parent" style="position: absolute;">
			<kinesis-element
				class="child1"
				type="scale"
				originX="51"
				originY="52"
				:strength="20"
				cycle="0"
			/>
		</kinesis-container> -->

	</div>
</template>

<style>
	.parent {
		width: 100vw;
		height: 100vh;
		
	}.child {
		margin-left: 80%;
		margin-top: 10%;
		border-radius: 50vh;
		width: 400px;
		height: 400px;
		background-color: rgba(149, 149, 149, 0.205);

	}.child1{
		margin-top: 20%;
		border-radius: 50vh;
		width: 150px;
		height: 150px;
		background-color: rgba(95, 95, 95, 0.632);
	}
</style>