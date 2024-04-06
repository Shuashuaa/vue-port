<template>
  <div id="stacks" class="justify-center d-flex overflow-hidden" style="background-color: #f5f5f5; min-height:800px; padding-top: 100px; padding-bottom: 100px; position: relative;">

    <v-img style="position: absolute; top: 200px; left: 200px;" width="250px" src="/dotGrid2502503.png"/>
    <v-img style="position: absolute; top: 200px; right: 200px;" width="500px" src="/dotGrid.png"/>

    <div id="stack-canvas">
        <!-- <h1 style="">This is Stacks</h1>
        <a href="#goToProducts">??????????ZZZZZ</a> -->

        <!-- <h1 class="title text-center">Current Stacks</h1> -->
        <h2 class="text-infos my-3" style="color: #343a40; z-index: 2; margin-top: 20px;">Technologies & Web Tools I Use</h2>

        <div class="justify-center" style=" display: flex; flex-wrap: wrap;">
            <v-card v-for="(stack, i) in stacks" :key="i" class="pa-5 mr-1 mt-1 text-center stack" width="200" color="#f5f5f5" 
            style="border: 1px solid rgba(52, 58, 64, 0.62); border-radius: 1px; flex-grow: 4;" elevation="1"
            >
                <v-img draggable="false" :src="stack.image" style="height: 80px;"/>
                &nbsp;
                <p class="text-stack">{{stack.name}}</p>
            </v-card>
        </div>

        <!-- <h1 class="title text-center mt-10">Other Stacks</h1> -->

        <div class="justify-center" style="margin-top: 20px; display: flex; flex-wrap: wrap;">
            <v-card v-for="(stack1, i) in otherStacks" :key="i" class="pa-5 mr-1 mt-1 d-flex stack1" width="200" color="#f5f5f5" 
            style="border: 1px solid rgba(52, 58, 64, 0.62); border-radius: 1px; flex-grow: 1; " elevation="1"
            >
                <img draggable="false" :src="stack1.image" style="height: 30px;"/>
                <v-spacer/>
                <p class="pt-2 text-stack">{{stack1.name}}</p>
            </v-card>
        </div>
        <p class="mt-3 text-stack" style="font-size: 15px;">and more..</p>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const stacks = ref([
            { name: 'VUEJS', image: 'https://vuejs.org/images/logo.png' },
            { name: 'VITE', image: 'https://vitejs.dev/logo-with-shadow.png' },
            { name: 'VUETIFY', image: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg' },
            { name: 'TAILWINDCSS', image: 'https://www.svgrepo.com/show/374118/tailwind.svg' },
            { name: 'LARAVEL', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png' }
        ])

        const otherStacks = ref([
            { name: 'HTML', image: 'https://cdn-icons-png.flaticon.com/512/174/174854.png' },
            { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' },
            { name: 'JAVASCRIPT', image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png' },
            { name: 'PHP', image: 'https://pngimg.com/d/php_PNG27.png' },
            { name: 'MYSQL', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/MySQL_Dolphin.jpg' },
            { name: 'NODEJS', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
            { name: 'BOOTSTRAP', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png' },
            { name: 'FIGMA', image: 'https://w7.pngwing.com/pngs/431/965/png-transparent-figma-designer-computer-icons-material-design-design-rectangle-poster-logo.png' },
            { name: 'GIT', image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
            { name: 'GITHUB', image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
            { name: 'GITLAB', image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/gitlab_original_logo_icon_146503.png' },
            { name: 'POSTMAN', image: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
            { name: 'PINIA', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/1200px-Pinialogo.svg.png' },
            { name: 'AXIOS', image: 'https://avatars.githubusercontent.com/u/32372333?s=280&v=4' },
            { name: 'VSCODE', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' },
            { name: 'NPMJS', image: 'https://static-00.iconduck.com/assets.00/npm-icon-512x512-qtfdrf37.png' },
            { name: 'YARNPKG', image: 'https://avatars.githubusercontent.com/u/22247014?s=280&v=4' },
            { name: 'SWEETALERT2', image: 'https://sgo.pm.ce.gov.br/_lib/libraries/grp/sweetalert/sweetalert2-9.7.2/assets/swal2-logo-square.png' }
        ])

        return { stacks, otherStacks }
    }
}
</script>

<style scoped>
    .overflow-hidden {
        overflow: hidden !important;
    }
</style>
