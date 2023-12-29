<template>
    <div>
        <v-app>
            <center>
                <v-container  
                fluid
                class="loginComponent"
                style="padding-top: 300px; position: relative;"
                >
                    <h1 class="gomenMobile d-block d-sm-none bold-pop">`Gomen'nasai'</h1>

                    <h1 class="gomenPC d-none d-sm-block bold-pop">`Gomen'nasai'</h1>

                    <h3 class="med-pop">
                        <span style="font-weight: bold;">404 | Page Not Found</span>, 
                        <!-- <span style="text-decoration: underline;">This is not an Error</span>, Go back to home by clicking the button below. -->
                    </h3>
                    <p class="mb-6">The page you are looking for might have been removed, had it's name changed or is temporarily unavailable.</p> 
                    
                    <v-btn large class="med-pop" href="/home/" rounded outlined style="color: white; background-color: #343a40;">
                        <v-icon>mdi-arrow-left</v-icon>
                        Go to homepage
                    </v-btn>
                </v-container>
            </center>
        </v-app>
    </div> 
</template>

<script>
export default {
    setup() {
        
    },
}
</script>