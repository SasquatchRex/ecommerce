<template>
    
    <TopHeader />
    <div class="text-neutral-400 bg-neutral-950 body-font ">
        <RecCategories/>
        <section class="">
            <div class=" px-5 pt-12 pb-24 mx-auto">
                <div class="flex flex-wrap -m-4 " v-for=" product in products " v-bind:key=" product.id ">
                    <FrontContent 
                        v-for="product in products"
                        v-bind:key="product.id"
                        :product="product"
                    />
                </div>
            </div>
        </section>

    </div>
    
    <BottomHeader/>
</template>

<script>
document.title="Homepage | Rex Store"
import { products } from '@/fake-data';

import BottomHeader from '@/components/bottom-header.vue';
import FrontContent from '@/components/front-content.vue';
import RecCategories from '@/components/rec-categories.vue';
// import ProductDetails from '@components/product.vue';
import TopHeader from '@/components/top-header.vue';
    export default{
        name:"App-ProductsPageView",
        
        components:{
            BottomHeader,
            FrontContent,
            // ProductDetails,
            TopHeader,
            RecCategories
        },
        data(){
            return{
                products,
            }
        }
    }
</script>