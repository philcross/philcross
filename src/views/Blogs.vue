<template>
    <div>
        <div class="bg-white -m-10 p-10">
            <p class="font-light text-xl text-blue-dark leading-normal tracking-normal">I'm Phil, a senior PHP software engineer from Torquay</p>
            <p class="leading-normal mt-4 text-grey-darker">Bacon ipsum dolor amet jerky prosciutto corned beef buffalo, boudin biltong ham hock short ribs tongue leberkas. Picanha shankle corned beef capicola cow. Swine shoulder salami, pig chicken cow ground round pork chop beef ribs ball tip tri-tip kevin beef. Turducken salami biltong, short loin pig ham jerky spare ribs meatloaf hamburger.</p>
        </div>

        <blog-list>
            <div class="w-full text-center" slot="buttons">
                <div class="inline-flex">
                    <router-link to="/" class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg">&lt;</router-link>
                    <router-link to="/" class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg">&gt;</router-link>
                </div>
            </div>
        </blog-list>
    </div>
</template>

<script>
    // @ is an alias to /src
    import BlogList from '@/components/blogs/BlogList';

    export default {
        name: 'home',
        components: {
            BlogList,
        }
    }
</script>
