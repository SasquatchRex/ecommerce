<template>
    <div class="bg-black text-white h-full">
        <div class="text-3xl py-3 text-left mx-8 -mt-6">My Cart</div>
        <div class="my-3 " v-for="product in cartItems" v-bind:key="product.id">
            <div class="mx-3 py-3 px-2  border-b-2  flex justify-between ">
                <div class="flex">
                    <img :src="product.imageUrl" class="w-[20vw] xl:w-[10vw]">
                    <div class=" text-left px-3 ">
                        <div class="text-xl overflow-hidden whitespace-nowrap overflow-ellipsis w-[40vw] xl:w-full">{{product.name}}</div>
                        <div class="text-xs text-neutral-400">{{product.categorie}}</div>
                    </div>

                </div>
                
                <div class="px-3">
                    <div class="text-xl text-right">${{product.price}}</div>
                    <div class="text-lg text-neutral-400 flex bg-neutral-80000 rounded-full">
                        
                        <input type="number" min="0" max="25" value="01" name="Quantity"  class="w-9 text-center py-1 num text-neutral-400  rounded-xl placeholder:text-neutral-300 bg-black">
                        
                        <button class="border-2 px-3 rounded-2xl bg-neutral-800 ml-2 text-neutral-50">Buy</button>
                    </div>
                    
                </div>
            </div>
            <!-- <div class="mx-3 py-3 px-2  border-b-2  flex justify-between ">
                <div class="flex">
                    <img src="https://dummyimage.com/421x261" class="w-[20vw] xl:w-[10vw]">
                    <div class=" text-left px-3 ">
                        <div class="text-xl overflow-hidden whitespace-nowrap overflow-ellipsis w-[40vw] xl:w-full">New Summer V-Neck T-shirt for Women</div>
                        <div class="text-xs text-neutral-400">Company name</div>
                    </div>

                </div>
                
                <div class="px-3">
                    <div class="text-xl text-right">$599</div>
                    <div class="text-lg text-neutral-400 flex bg-neutral-80000 rounded-full">
                        
                        <input type="number" min="0" max="25" value="01" name="Quantity"  class="w-9 text-center py-1 num text-neutral-400  rounded-xl placeholder:text-neutral-300 bg-black">
                        
                        <button class="border-2 px-3 rounded-2xl bg-neutral-800 ml-2 text-neutral-50">Buy</button>
                    </div>
                    
                </div>
            </div>
            <div class="mx-3 py-3 px-2  border-b-2  flex justify-between ">
                <div class="flex">
                    <img src="https://dummyimage.com/421x261" class="w-[20vw] xl:w-[10vw]">
                    <div class=" text-left px-3 ">
                        <div class="text-xl overflow-hidden whitespace-nowrap overflow-ellipsis w-[40vw] xl:w-full">New Summer V-Neck T-shirt for Women</div>
                        <div class="text-xs text-neutral-400">Company name</div>
                    </div>

                </div>
                
                <div class="px-3">
                    <div class="text-xl text-right">$599</div>
                    <div class="text-lg text-neutral-400 flex bg-neutral-80000 rounded-full">
                        
                        <input type="number" min="0" max="25" value="01" name="Quantity"  class="w-9 text-center py-1 num text-neutral-400  rounded-xl placeholder:text-neutral-300 bg-black">
                        
                        <button class="border-2 px-3 rounded-2xl bg-neutral-800 ml-2 text-neutral-50">Buy</button>
                    </div>
                    
                </div>
            </div> -->
            
            
        </div>
    </div>
</template>
<script>
    
    import { cartItems } from '@/fake-data';
    
    export default{
        name:"App-CartContent",
        data(){
            return{
                cartItems
            }
        }
    }
</script>