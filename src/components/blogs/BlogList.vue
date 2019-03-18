<template>
    <div class="rounded py-10 mt-10">
        <blog-preview v-for="blog in blogs" :key="blog.id" :blog="blog"></blog-preview>

        <slot name="buttons"></slot>
    </div>
</template>

<script>
    import BlogPreview from '@/components/blogs/BlogPreview'

    export default {
        name: 'blog-list',
        props: {
            blogs: { required: false, type: Array, default: () => [] },
        },
        components: {
            BlogPreview,
        }
    }
</script>
