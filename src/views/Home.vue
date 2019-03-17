<template>
    <div>
        <div class="bg-white -m-10 p-10 rounded">
            <p class="font-light text-xl text-blue-dark leading-normal tracking-normal">I'm Phil, a senior PHP software engineer from Torquay</p>
            <p class="leading-normal mt-4 text-grey-darker">Bacon ipsum dolor amet jerky prosciutto corned beef buffalo, boudin biltong ham hock short ribs tongue leberkas. Picanha shankle corned beef capicola cow. Swine shoulder salami, pig chicken cow ground round pork chop beef ribs ball tip tri-tip kevin beef. Turducken salami biltong, short loin pig ham jerky spare ribs meatloaf hamburger.</p>
        </div>

        <blog-list display="2">
            <div class="text-right mt-10" slot="buttons">
                <router-link to="/blogs" class="bg-blue hover:bg-blue-dark text-white font-bold p-3 border-l-4 border-blue-dark hover:border-blue-darker rounded shadow-lg no-underline">View all blogs</router-link>
            </div>
        </blog-list>
    </div>
</template>

<script>
    import BlogList from '@/components/blogs/BlogList';

    export default {
        name: 'home',
        components: {
            BlogList,
        }
    }
</script>
