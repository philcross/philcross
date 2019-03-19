<template>
    <div id="app">
        <div class="container mx-auto mt-10">
            <div class="mt-5 flex flex-wrap">
                <div class="container-left-side">
                    <div class="text-center">
                        <h1 class="uppercase text-blue-lightest">Phil<span class="text-blue">Cross</span></h1>

                        <img src="./assets/phil_brody.jpg" class="nav-image">
                    </div>

                    <ul class="main-nav">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About me</router-link></li>
                        <li><router-link to="/blogs">Blogs</router-link></li>
                        <li><router-link to="/gallery">Gallery</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>

                    <hr />

                    <ul class="main-nav">
                        <li><a href="https://www.twitter.com/philcrossuk">Twitter</a></li>
                        <li><a href="https://www.github.com/philcross">Github</a></li>
                    </ul>
                </div>

                <div class="container-right-side bg-grey-lighter border-2 border-solid border-blue-darker rounded shadow-lg px-10 pt-10">
                    <router-view/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(38, 110, 146, 0.75), rgba(0, 0, 0, 0));
    }
</style>
