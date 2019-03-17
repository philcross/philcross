<template>
    <div class="rounded py-10 mt-10">
        <blog-preview></blog-preview>
        <blog-preview></blog-preview>

        <slot name="buttons"></slot>
    </div>
</template>

<script>
    import BlogPreview from '@/components/blogs/BlogPreview'

    export default {
        name: 'blog-list',
        props: {
            display: { required: false, default: 10 },
        },
        components: {
            BlogPreview,
        }
    }
</script>
