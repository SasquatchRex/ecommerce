<template>
    <div class="fixed bottom-[10vh] lg:bottom-0 bg-neutral-900 text-white py-4 w-screen">
        <div class="flex justify-end pr-5">
            <div class="text-2xl  ">Gross Total : </div>
            <div class="text-xl ml-5">$</div>
            <div class="text-xl ml-3 font-extrabold">{{totalPrice}}</div>
        </div>
        <div class="flex justify-end pr-5">
            <div class="text-2xl ">VAT : </div>
            <div class="text-xl ml-5">$</div>
            <div class="text-xl ml-3 font-extrabold">{{totalPrice*0.13}}</div>
        </div>
        <div class="flex justify-end pr-5">
            <div class="text-2xl ">Total Amount : </div>
            <div class="text-xl ml-5">$</div>
            <div class="text-xl ml-3 font-extrabold">{{totalPrice + totalPrice*0.13}}</div>
        </div>
        <div class="text-right mr-5">
            <button class="border-2 px-3 py-1 rounded-2xl bg-lime-300 text-xl font-bold text-neutral-700">
                Buy Now
            </button>
        </div>

    </div>
</template>
<script>
import { cartItems } from '@/fake-data';
export default {
    name: "App-CartBottom",
    data() {
        return {
            cartItems
        }
    },
    computed:{
        totalPrice(){
            return this.cartItems.reduce(
                (sum,item) => sum+ Number(item.price),0,
            )
        }
    }
}
</script>