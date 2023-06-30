<template>
    <div class="bg-black h-screen">
        <TopHeader />
        <CartContent />
        <CartBottom />
        <BottomHeader />
    </div>
</template>

<script>
    import CartContent from '../components/cart.vue'
import BottomHeader from '@/components/bottom-header.vue';
import TopHeader from '@/components/top-header.vue';
import CartBottom from '@/components/cart-bottom.vue';
    export default{
        name:"App-ProductCartPageView",
        components : {
            CartContent,
            BottomHeader,
            TopHeader,
            CartBottom
        }
    }
</script>