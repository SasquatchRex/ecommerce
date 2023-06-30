<template>
    <div class="fixed  left-0 top-0 w-screen bg-black text-neutral-300 py-2 px-3 ">
        <div class="flex justify-between px-2">
            <button class=" rounded-2xl py-2 bg-black text-xl ">
                <RouterLink to="/">Rex Store</RouterLink>
            </button>
            
            <div class="">
                <input type="text" placeholder="Teddy Bear" class="w-[45vw] rounded-2xl  bg-neutral-800 px-2 py-2">
                <button class="bg-none px-2 py-2 rounded-full ">
                    <i class="fa-sharp fa-solid fa-magnifying-glass fa-xl"></i>
                </button>
            </div>
            
            
            <div class="space-x-3 hidden lg:flex lg:block">
                
                <button class="px-3 py-2  hidden lg:block">

                    <a href="#">
                        <RouterLink to="/cart">
                            <i class="fa-solid fa-cart-shopping fa-xl"></i>
                        </RouterLink>
                    </a>


                </button>
                <button class="px-3 py-2 hidden lg:block">
                        <a href="#">
                            <i class="fa-solid fa-message fa-xl"></i>
                        </a>
                    </button>
                    <button class="px-3 py-2 hidden lg:block">
                        <a href="#">
                            <i class="fa-solid fa-user fa-xl"></i>
                        </a>
                    </button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: "App-TopHeader",
}
</script>