<template>
    <div id="app">
        <div class="container mx-auto mt-10">
            <div class="mt-5 flex flex-wrap">
                <div class="w-full lg:w-1/4">
                    <div class="text-center">
                        <h1 class="uppercase text-blue-lightest">Phil<span class="text-blue">Cross</span></h1>

                        <img src="./assets/phil_brody.jpg" class="rounded-full w-1/5 lg:w-1/2 border-2 border-solid border-blue-darker shadow-lg mt-5">
                    </div>

                    <ul class="list-reset leading-loose text-center mt-5">
                        <li class="py-2"><router-link to="/" class="text-blue-lightest hover:text-blue-light no-underline">Home</router-link></li>
                        <li class="py-2"><router-link to="/about" class="text-blue-lightest hover:text-blue-light no-underline">About me</router-link></li>
                        <li class="py-2"><router-link to="/blogs" class="text-blue-lightest hover:text-blue-light no-underline">Blogs</router-link></li>
                        <li class="py-2"><router-link to="/gallery" class="text-blue-lightest hover:text-blue-light no-underline">Gallery</router-link></li>
                        <li class="py-2"><router-link to="/contact" class="text-blue-lightest hover:text-blue-light no-underline">Contact</router-link></li>
                    </ul>

                    <hr />

                    <ul class="list-reset leading-loose text-center mt-5">
                        <li class="py-2"><a href="/" class="text-blue-lightest hover:text-blue-light no-underline">Twitter</a></li>
                        <li class="py-2"><a href="/" class="text-blue-lightest hover:text-blue-light no-underline">Linkedin</a></li>
                    </ul>
                </div>

                <div class="w-full lg:w-3/4 mt-4 lg:mt-0 rounded mb-10">
                    <div class="bg-grey-lighter border-2 border-solid border-blue-darker rounded shadow-lg px-10 pt-10">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
