<template>
	<v-card
		:height="scHeight"
		id="goToHome"
		class="justify-center d-flex bg section"
		style="background-color: #f5f5f5"
		elevation="0"
	>
		<!-- contents -->
	</v-card>
</template>

<script>
// import { ref, onMounted } from "vue";=
export default {
	setup() {

		// this will fix the page's height depends on the users screen height
		const scHeight = innerHeight;

		onMounted(() => {
			console.log(innerHeight);
		});

		return { scHeight };
	},
};
</script>

<style>

/*  */

</style>
