<template>
    <HomeComp />
    <InfoComp />
    <Stacks />
    <ProductsComp />
    <ContactComp />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HomeComp from '../components/main/HomeComp.vue';
import InfoComp from '../components/main/InfoComp.vue';
import Stacks from '../components/main/Stacks.vue';
import ProductsComp from '../components/main/ProductsComp.vue';
import ContactComp from '../components/main/ContactComp.vue';

export default defineComponent({
    components: {
        HomeComp,
        InfoComp,
        Stacks,
        ProductsComp,
        ContactComp
    },
});
</script>

<style>
    html {
        scroll-behavior: smooth;
    }
</style>