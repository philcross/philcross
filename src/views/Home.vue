<template>
    <div>
        <div class="content-section white-section">
            <p class="page-title">I'm Phil, a senior PHP software engineer from Torquay</p>
            <p>I'm Phil, a software engineer with 8 years experience with building some pretty cool stuff. I've been wanted to write up more about things I do, but not really had a decent place to put them, so built this!<p>
            <p>Previous versions of my site had a basic frontend, Laravel backend for adding blogs etc, but I really wanted to simplify it all, and create a SPA javascript app. No database, no real server side backend.</p>
            <p>Hopefully, you'll enjoy some of the blogs (when I eventually write a new one), and the gallery has some pictures of things I enjoy, projects, family time etc. If for whatever reason you want to talk, take a look at the contact page. There's a few different ways.</p>
        </div>

        <blog-list :blogs="blogs" v-if="blogs.length > 0">
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
