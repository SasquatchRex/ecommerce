<template>
    <TopHeader />
    <ProductDetails />
    <BottomHeader/>
</template>

<script>
import BottomHeader from '@/components/bottom-header.vue';
// import FrontContent from '@/components/front-content.vue';
import ProductDetails from '../components/product.vue';
import TopHeader from '@/components/top-header.vue';
    export default{
        name:"App-ProductDetailView",
        components:{
            BottomHeader,
            ProductDetails,
            TopHeader
        }
    }
</script>