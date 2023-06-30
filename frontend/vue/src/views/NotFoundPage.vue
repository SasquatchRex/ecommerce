<template>
    <TopHeader />
    <div class="h-screen">
        <h1 class="text-2xl text-slate-500 mt-32 text-center">Oops How did you get here ?</h1>
    <h1 class="text-white mt-32 text-center text-3xl">Go back to HomePage! That's an order</h1>
    </div>
    
</template>
<script>
import TopHeader from '@/components/top-header.vue';
    export default{
        name:"App-NotFoundPage",
        components:{
            TopHeader
        }
    }
</script>