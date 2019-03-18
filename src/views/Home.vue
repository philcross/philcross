<template>
    <div>
        <div class="content-section white-section">
            <p class="page-title">I'm Phil, a senior PHP software engineer from Torquay</p>
            <p>Bacon ipsum dolor amet jerky prosciutto corned beef buffalo, boudin biltong ham hock short ribs tongue leberkas. Picanha shankle corned beef capicola cow. Swine shoulder salami, pig chicken cow ground round pork chop beef ribs ball tip tri-tip kevin beef. Turducken salami biltong, short loin pig ham jerky spare ribs meatloaf hamburger.</p>
        </div>

        <blog-list :blogs="blogs">
            <div class="text-right mt-10" slot="buttons">
                <router-link to="/blogs" class="btn btn-blue">View all blogs</router-link>
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
        },
        data: function () {
            return {
                blogs: [],
            }
        },
        mounted: function () {
            let blogIndex = require('./blogs/index').default;

            this.blogs = blogIndex.slice(0, 3);
        }
    }
</script>
