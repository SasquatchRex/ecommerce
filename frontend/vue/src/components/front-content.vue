<template>
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <RouterLink v-bind:to="'/products/' + product.id" class="container ">
            <a class="block h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                    v-bind:src="product.imageUrl">
            </a>
            <div class="mt-4">
                <h3 class="text-gray-white text-xs tracking-widest title-font mb-1">From <b> {{ product.categorie }}</b> Categorie </h3>
                <h2 class="text-white title-font text-lg font-medium">{{ product.name }}</h2>
                <p class="mt-1">${{ product.price }}</p>
            </div>
        </RouterLink>
    </div>


    <!-- <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block  h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/421x261">
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-white title-font text-lg font-medium">Shooting Stars</h2>
                            <p class="mt-1">$21.15</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block  h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/422x262">
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-white title-font text-lg font-medium">Neptune</h2>
                            <p class="mt-1">$12.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/423x263">
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-white title-font text-lg font-medium">The 400 Blows</h2>
                            <p class="mt-1">$18.40</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block  h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/424x264">
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-white title-font text-lg font-medium">The Catalyzer</h2>
                            <p class="mt-1">$16.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block  h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/425x265">
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-white title-font text-lg font-medium">Shooting Stars</h2>
                            <p class="mt-1">$21.15</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block  h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/427x267">
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-white title-font text-lg font-medium">Neptune</h2>
                            <p class="mt-1">$12.00</p>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a class="block  h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                src="https://dummyimage.com/428x268">
                        </a>
                        <div class="mt-4">
                            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 class="text-white title-font text-lg font-medium">The 400 Blows</h2>
                            <p class="mt-1">$18.40</p>
                        </div>
                    </div> -->
</template>
<script>
export default {
    name: "App-FrontContent",
    props: ['product']

}
</script>