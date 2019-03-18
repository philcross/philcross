<template>
    <div class="text-center">
        <img :src="url" class="text-center shadow-lg mb-10">
    </div>
</template>

<script>
    export default {
        name: 'blog-image',
        props: {
            url: { required: true, type: String }
        }
    }
</script>
