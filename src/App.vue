<template>
	<v-app id="inspire">
		<v-navigation-drawer 
		disable-resize-watcher
		v-model="drawer" 
		class="mobile-drawer d-flex d-sm-flex d-md-none"
		app>

		<v-list style="height: 92%;">
			<div style="text-align: right;">
				<v-icon size="large" class="d-lg-none mr-5 mt-1" id="drawer" @click="drawer = !drawer">mdi-close</v-icon>
			</div>

			<div class="btn" v-for="(item, index) in items" :key="index" :to="item.to" style="text-align: center;">
				<a :href="item.to" style="text-decoration: none; display: block;">

					<p class="mobile-items text">
						<!-- <v-icon>{{ item.icon }}</v-icon>   -->
						&nbsp;
						{{ item.text }}
					</p>
				</a>
			</div>

			<div style="text-align: center;">
				<a href="#goToContact" class="title">
					<v-btn outlined class="mt-1" color="black" elevation="0">
					Contact
					</v-btn>
				</a>
			</div>

		</v-list>
			
		</v-navigation-drawer>

		<!-- Mobile -->

		<v-app-bar
        v-if="currentPath == 'home'"
		app
		elevation="0"
		color="#f5f5f5"
		style="display: flex: !important; justify-content: space-between !important;"
		class="d-flex d-sm-flex d-md-none"
		density="compact"
		> 
			<v-toolbar-title style="color: white;">
                <b class="title">JOSHUA TANIA</b>
            </v-toolbar-title>
			<v-spacer/>
			<v-app-bar-nav-icon class="d-lg-none" id="drawer" @click="drawer = !drawer"></v-app-bar-nav-icon> 
					
		</v-app-bar>

		<!-- PC -->

		<v-app-bar
        v-if="currentPath == 'home'"
        density="compact"
        elevation="0"
        color="#f5f5f5"
        class="pt-2 pl-5 pr-5 d-none d-md-block d-lg-block d-xl-block"
		height="100"
        style="opacity: 0.95"
        >
            
            <!-- <v-app-bar-nav-icon style="color: white;" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
            <v-toolbar-title style="color: white;" class="pb-2">
                <!-- <b class="title">TEMPLATE</b> -->
                <v-img src="/logooo.png" width="40" class="ml-10"></v-img>
            </v-toolbar-title>

            <v-spacer/>

			<div
            class="mr-10"
			v-for="(item, index) in items" :key="index" :to="item.to"
			>
                <!-- for changing nav button design onScroll -->
                <!-- if Home -->
                <v-btn v-if="routerPath == '#goToHome'" :href="item.to" style="background-color: #6e7175; color: black; border: 1px solid #6e7175" :style="{ backgroundColor: item.to == routerPath ? '#6e7175' : '' }" class="mb-2 text-infos" size="small">
                    <p :style="{ color: item.to === routerPath ? 'white' : '#6e7175' }" >{{ item.text }}</p>
                </v-btn>
                <!-- the rest -->
                <v-btn v-else :href="item.to" style="background-color: #6e7175; color: black; border: 1px solid #6e7175" :style="{ backgroundColor: item.to == `#${routerPath}` ? '#6e7175' : '' }" class="mb-2 text-infos" size="small">
                    <p :style="{ color: item.to === `#` + routerPath ? 'white' : '#6e7175' }" >{{ item.text }}</p>
                </v-btn>
               
			</div>    

			<v-divider vertical/>

            <v-btn href="https://www.github.com/shuashuaa" icon class="mx-10 mb-2">
                <v-icon>mdi-github</v-icon>
            </v-btn>
    
        </v-app-bar>

		<v-main>
			<router-view/>
		</v-main>

	</v-app>
</template>

<script>
import router from './router/index.js'
import { useRoute } from 'vue-router'
import { ref, reactive, watch } from 'vue';
export default {
    setup() {

        const drawer = ref(false);
        const items = reactive([
            {text:'Home', icon:'mdi-home', to:'#goToHome'},
            // {text:'Home', icon:'mdi-home', to:'/'},
            {text:'Info', icon:'mdi-archive-outline', to:'#goToInfo'},
            {text:'Projects', icon:'mdi-tools', to:'#goToProjects'},
            // {text:'Contact', icon:'mdi-information-outline', to:'#goToContact'},
        ])

        const route = useRoute();
        const currentPath = ref('');

        // Watch for changes in the route
        watch(
            () => route.name,
            (newPath) => {
                currentPath.value = newPath;
                console.log('Current path:', currentPath.value);
            }
        );

        const routerPath = ref('');
        routerPath.value = '#goToHome';
        
        document.addEventListener('scroll', function() {
            
            const sections = document.querySelectorAll('.section');

            sections.forEach(section => {
                const bounding = section.getBoundingClientRect();

                // Check if the section is in the viewport
                if ( bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                // The section is fully visible in the viewport
                    console.log(section.id, '?!');

                    //this is the dynamically route appear when scrolling
                    // if(section.id !== 'goToHome'){
                        router.push({ hash: `#${section.id}` }); 
                        routerPath.value = section.id
                    // }else{
                        // router.push({ hash: `` });
                    //     router.push({ hash: `#goToHome` }); 
                        
                    // }
                    
                }
            });
        });

        console.log(routerPath.value, 'hash')

        return {
            currentPath,
            routerPath,

            drawer,
            items
        };
    },
};
</script>

<style>
	#app{
        background-color: #f8f8f8;
    }
    .title{
        color: #343a40;
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        font-size: 20px;
    }
    .text{
        color: #343a40;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 15px;
    }
    .nav-items:hover{
        text-decoration: underline;
    }

    .v-application .ma-2{
        margin: 0 !important;
    }
    .v-navigation-drawer{
        /* top: 48px !important; */
        height: 100% !important;
    }
    .v-toolbar{
        top: 0 !important;
    }
    /* padding && margin errors are here */
    .v-main{ 
        padding: 0px !important;
    }

    .mobile-drawer{
        width: 100% !important;
    }
    .mobile-items{
        padding-top: 20px; 
        padding-bottom: 20px;
        margin: 0 !important;
        color: black;
    }
    .mobile-items:hover{
        background-color: #afe2ff;
    }
    .contact{
        background-color: black;
        color: white;
    }

    /* @media screen 
    and (min-device-width: 1200px) 
    and (max-device-width: 1600px) {  */
        /*  */
        
    /* } */

    /* @media (-webkit-device-pixel-ratio: 1.25) {
        
    } */
</style>