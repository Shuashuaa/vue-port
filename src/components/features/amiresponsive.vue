<template>
    <center>

        <!-- pc -->

        <v-card style="padding-top: 50px; width: 80%;" class="d-none d-lg-none d-xl-flex justify-center" elevation="0">
            <v-card width="500" style="padding-top: 130px;" elevation="0">
                <h1 class="text-infos">Am I Responsive?</h1>
                <p class="text-infos">`Am I Responsive?` is a tool for developers, especially front-end developers to check the responsiveness of their websites without using an actual gadgets. bu.. but not in prod!.</p>
                <v-text-field @keyup.enter="getAddress()" hide-details class="mt-10" v-model="searchedSource" placeholder="ex. https://sample.com"></v-text-field>
                <p class="text-infos mb-5 mt-2" style="font-size: 13px; color: gray;"><u>http://sample.com</u> or <u>http://127.0.0.1:8000/</u> or simply paste your development url for local development.</p>
                <v-btn @click="getAddress()" variant="block" block style="background-color: #01b4d2; color:#f5f5f5;" elevation="2">Go Flex!</v-btn>
                <p class="text-infos mt-16 mb-8" style="font-size: 13px;">@2023 | Made with <v-icon>mdi-heart</v-icon> and <v-icon>mdi-coffee</v-icon> by <br><b class="ghublink" style="color: #01b4d2;">
                   <a style="text-decoration: none; color: #01b4d2;" href="https://github.com/shuashuaa">Jovi Joshua Tania</a></b>.
                </p>
                
                <v-divider/>
                
                <v-btn class="text-infos mt-8" href="#" size="small" style="background-color: #ffffff; color: black; border: 1px solid #6e7175; text-transform: capitalized; letter-spacing: 1px;" variant="outlined">
                    <v-icon class="mr-1">mdi-github</v-icon>
                    Source Code
                </v-btn>

            </v-card>

            <v-card class="justify-center d-flex" style="position: relative;" width="1200" height="800" elevation="0">
                <div>
                    <iframe :src="defaultSource" class="iframe-pc" frameborder="0" width="1600" height="900" style="position: absolute; z-index: 2; right: -205px; bottom: 78px; "></iframe>
                    <v-img src="/amIResponsive/desktop.webp" width="860" style="position: absolute; right: 170px; top: 0;"></v-img>
                </div>
                
                <iframe :src="defaultSource" class="iframe-laptop" frameborder="0" width="1280" height="802" style="position: absolute; z-index: 3; right: -365px; top: 225px;"></iframe>
                <iframe :src="defaultSource" class="iframe-tablet" frameborder="0" width="768" height="1024" style="position: absolute; z-index: 3; left: -164px; top: 70px;"></iframe>
                <iframe :src="defaultSource" class="iframe-mobile" frameborder="0" width="310" height="500" style="position: absolute; z-index: 4; left: 226px; bottom: -140px;"></iframe>
                
                <v-img src="/amIResponsive/phone.png" width="250" height="240" style="position: absolute; absolute; left: 255px; bottom: -10px; z-index: 3;"></v-img>
                <v-img src="/amIResponsive/laptop.png" width="550" style="position: absolute; right: 0; bottom: 0; z-index: 2;"></v-img>
                <v-img src="/amIResponsive/tablet.png" width="440" style="position: absolute; absolute; left: 0; bottom: 0; z-index: 2;"></v-img>
                
            </v-card>
                
        </v-card>
        
        <!-- laptop  big -->

        <v-card style="width: 90%;" class="d-none d-lg-flex d-xl-none justify-center" elevation="0">
            <v-card style="margin-top: 90px" width="500" elevation="0">
                <h1 class="text-infos">Am I Responsive?</h1>
                <p class="text-infos">`Am I Responsive?` is a tool for developers, especially front-end developers to check the responsiveness of their websites without using an actual gadgets. bu.. but not in prod!.</p>
                
                <v-text-field hide-details class="mt-10" v-model="searchedSource" placeholder="ex. https://sample.com"></v-text-field>
                <p class="text-infos mb-5 mt-2" style="font-size: 13px; color: gray;"><u>http://sample.com</u> or <u>http://127.0.0.1:8000/</u> or simply paste your development url for local development.</p>
                <v-btn @click="getAddress()" variant="block" block style="background-color: #01b4d2; color:#f5f5f5;" elevation="2">Go Flex!</v-btn>
                <p class="text-infos mt-16 mb-5" style="font-size: 13px;">@2023 | Made with <v-icon>mdi-heart</v-icon> and <v-icon>mdi-coffee</v-icon> by <br><b class="ghublink" style="color: #01b4d2;">
                   <a style="text-decoration: none; color: #01b4d2;" href="https://github.com/shuashuaa">Jovi Joshua Tania</a></b>.
                </p>
                
                <v-divider/>

                <v-btn class="text-infos mt-8" href="#" size="small" style="background-color: #ffffff; color: black; border: 1px solid #6e7175; text-transform: capitalized; letter-spacing: 1px;" variant="outlined">
                    <v-icon class="mr-1">mdi-github</v-icon>
                    Source Code
                </v-btn>

            </v-card>

            <v-card class="justify-center d-flex mt-3" style="position: relative;" width="1200" height="700" elevation="0">
                <div>
                    <iframe :src="defaultSource" class="iframe-pc" frameborder="0" width="1600" height="900" style="position: absolute; z-index: 2; right: -305px; bottom: -20px; "></iframe>
                    <v-img src="/amIResponsive/desktop.webp" width="860" style="position: absolute; right: 70px; top: 0;"></v-img>
                </div>
                
                <iframe :src="defaultSource" class="iframe-laptop" frameborder="0" width="1280" height="802" style="position: absolute; z-index: 3; right: -415px; bottom: -205px;"></iframe>
                <iframe :src="defaultSource" class="iframe-tablet" frameborder="0" width="610" height="800" style="position: absolute; z-index: 3; left: -130px; bottom: -205px;"></iframe>
                <iframe :src="defaultSource" class="iframe-mobile" frameborder="0" width="300" height="500" style="position: absolute; z-index: 4; left: 175px; bottom: -80px;"></iframe>
                
                <v-img src="/amIResponsive/phone.png" width="250" height="240" style="position: absolute; left: 200px; bottom: 50px; z-index: 3;"></v-img>
                <v-img src="/amIResponsive/laptop.png" width="550" style="position: absolute; right: -50px; bottom: 20px; z-index: 2;"></v-img>
                <v-img src="/amIResponsive/tablet.png" width="350" style="position: absolute; left: 0; bottom: 20px; z-index: 2;"></v-img>
                
            </v-card>
                
        </v-card>

        <!-- laptop / screen  smol -->

        <v-card style=" padding-bottom: 50px; width: 80%;" class="d-none sm-none d-md-block d-lg-none d-xl-none justify-center" elevation="0">

            <v-card class="justify-center d-flex" style="position: relative;" width="1200" height="800" elevation="0">
                <div>
                    <iframe :src="defaultSource" class="iframe-pc" frameborder="0" width="1600" height="900" style="position: absolute; z-index: 2; right: -205px; bottom: 78px; "></iframe>
                    <v-img src="/amIResponsive/desktop.webp" width="860" style="position: absolute; right: 170px; top: 0;"></v-img>
                </div>
                
                <iframe :src="defaultSource" class="iframe-laptop" frameborder="0" width="1280" height="802" style="position: absolute; z-index: 3; right: -185px; top: 140px;"></iframe>
                <iframe :src="defaultSource" class="iframe-tablet" frameborder="0" width="768" height="1024" style="position: absolute; z-index: 3; left: -164px; top: 0;"></iframe>
                <iframe :src="defaultSource" class="iframe-mobile" frameborder="0" width="310" height="500" style="position: absolute; z-index: 4; left: 226px; bottom: -30px;"></iframe>
                
                <v-img src="/amIResponsive/phone.png" width="250" height="240" style="position: absolute; left: 255px; bottom: 100px; z-index: 3;"></v-img>
                <v-img src="/amIResponsive/laptop.png" width="550" style="position: absolute; right: 180px; bottom: 80px; z-index: 2;"></v-img>
                <v-img src="/amIResponsive/tablet.png" width="440" style="position: absolute; left: 0; bottom: 65px; z-index: 2;"></v-img>
                
            </v-card>

            <v-card width="500" style="padding-top: 30px;" elevation="0">
                <h1 class="text-infos">Am I Responsive?</h1>
                <p class="text-infos">`Am I Responsive?` is a tool for developers, especially front-end developers to check the responsiveness of their websites without using an actual gadgets. bu.. but not in prod!.</p>
                <v-text-field class="mt-16" v-model="searchedSource" placeholder="ex. https://sample.com or http://sample.com"></v-text-field>
                <v-btn @click="getAddress()" variant="block" block style="background-color: #01b4d2; color:#f5f5f5;" elevation="2">Go Flex!</v-btn>
                <p class="text-infos mt-16 mb-5" style="font-size: 13px;">@2023 | Made with <v-icon>mdi-heart</v-icon> and <v-icon>mdi-coffee</v-icon> by <br><b class="ghublink" style="color: #01b4d2;">
                   <a style="text-decoration: none; color: #01b4d2;" href="https://github.com/shuashuaa">Jovi Joshua Tania</a></b>.
                </p>
                
                <v-divider/>

                <v-btn class="text-infos mt-8" href="#" size="small" style="background-color: #ffffff; color: black; border: 1px solid #6e7175; text-transform: capitalized; letter-spacing: 1px;" variant="outlined">
                    <v-icon class="mr-1">mdi-github</v-icon>
                    Source Code
                </v-btn>

            </v-card>
                
        </v-card>

        <!-- tablet & below -->

        <v-card style="margin-top: 250px; width: 50%;" class="d-block d-sm-block d-md-none d-lg-none d-xl-none justify-center" elevation="0">
            <v-img src="/logooo.png" width="100"></v-img>
            <h3 class="text-infos mb-5">gomenaa.. uhmm. but it is not advisable to check responsiveness of a website with tablet or smaller devices.</h3>
            <v-btn variant="outlined" href="https://github.com/shuashuaa">isekai me bacc</v-btn>

        </v-card>

    </center>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        
        const defaultSource = ref('http://10.169.141.201:5173/Home')

        const searchedSource = ref('')

        const getAddress = () => {
            if(searchedSource.value != '' && searchedSource.value != 'http://localhost:5173/amiresponsive/'){
                defaultSource.value = searchedSource.value;

            }else if(searchedSource.value == 'http://localhost:5173/amiresponsive/'){
                alert('what do you mean :D')
                searchedSource.value = ''

            }else{
                alert("You can't flex an empty link :D")
            
            }
        }

        return { getAddress, searchedSource, defaultSource } 
    }
}
</script>

<style> 
.iframe-pc{
    transform: scale(0.4150);
    -webkit-transform: scale(0.4150);
    -o-transform: scale(0.4150);
    -ms-transform: scale(0.4150);
    -moz-transform: scale(0.4150);
}
.iframe-laptop{
    transform: scale(0.277);
    -webkit-transform: scale(0.320);
    -o-transform: scale(0.320);
    -ms-transform: scale(0.320);
    -moz-transform: scale(0.320);
}
.iframe-tablet, .iframe-mobile{
    transform: scale(0.4181);
    -webkit-transform: scale(0.3181);
    -o-transform: scale(0.3181);
    -ms-transform: scale(0.3181);
    -moz-transform: scale(0.3181);
}
.ghublink:hover{
    text-decoration: underline;
}
</style>