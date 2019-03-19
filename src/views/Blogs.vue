<template>
    <div>
        <div class="content-section white-section">
            <p class="page-title">Stuff I write about</p>
            <p>I've wanted to write some blogs for a while, so here's a dedicated place to put them. I generally write about whatever comes to mind, or things I'm trying out. It's mainly technical stuff, but there might be some personal ones over time.</p>
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
