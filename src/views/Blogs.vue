<template>
    <div>
        <div class="content-section white-section">
            <p class="page-title">I'm Phil, a senior PHP software engineer from Torquay</p>
            <p>Bacon ipsum dolor amet jerky prosciutto corned beef buffalo, boudin biltong ham hock short ribs tongue leberkas. Picanha shankle corned beef capicola cow. Swine shoulder salami, pig chicken cow ground round pork chop beef ribs ball tip tri-tip kevin beef. Turducken salami biltong, short loin pig ham jerky spare ribs meatloaf hamburger.</p>
        </div>

        <blog-list :blogs="blogs">
            <div class="w-full text-center" slot="buttons" v-if="hasMoreThanOnePage">
                <div class="inline-flex">
                    <button class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg" v-on:click="loadPreviousBlogs">&lt;</button>
                    <button class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg" v-on:click="loadNextBlogs">&gt;</button>
                </div>
            </div>
        </blog-list>
    </div>
</template>

<script>
    // @ is an alias to /src
    import BlogList from '@/components/blogs/BlogList';
    import NavButton from '@/components/blogs/NavButton';

    const previews_per_page = 3;

    export default {
        name: 'blogs',
        components: {
            NavButton,
            BlogList,
        },
        data: function () {
            return {
                blogIndex: [],
                page: 1,
                display: [],
            }
        },
        methods: {
            loadPreviousBlogs: function () {
                let page = this.page - 1;

                this.page = page < 1 ? 1 : page;
            },
            loadNextBlogs: function () {
                let page = this.page + 1;

                this.page = page > this.totalPages ? this.totalPages : page;
            },
        },
        computed: {
            blogs: function () {
                return this.blogIndex.slice(this.offset, this.offset + previews_per_page);
            },
            offset: function () {
                return (this.page*previews_per_page)-previews_per_page;
            },
            totalPages: function () {
                return Math.ceil(this.blogIndex.length/previews_per_page);
            },
            hasMoreThanOnePage: function () {
                return this.totalPages > 1;
            }
        },
        mounted: function () {
            this.blogIndex = require('./blogs/index').default;
        }
    }
</script>
