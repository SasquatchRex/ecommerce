<template>
    
    <div class="bg-black fixed bottom-0  w-screen flex justify-between text-neutral-300 px-10 py-2 rounded-xl xl:px-96 lg:hidden">
        <button class="px-3 py-2 ">
            <a href="#">
                <RouterLink to="/">
                <i class="fa-solid fa-house fa-xl"></i>
            </RouterLink>
            </a>
        </button>
        <button class="px-3 py-2">
            
                <a href="#">
                    <RouterLink to="/cart">
                <i class="fa-solid fa-cart-shopping fa-xl"></i>
            </RouterLink>
            </a>
            
            
        </button>
        <button class="px-3 py-2">
            <a href="#">
                <i class="fa-solid fa-message fa-xl"></i>
            </a>
        </button>
        <button class="px-3 py-2">
            <a href="#">
                <i class="fa-solid fa-user fa-xl"></i>
            </a>
        </button>
    </div>
</template>
<script>
    export default{
        name:"App-BottomHeader"
    }
</script>