<template>
    <div class="w-full md:w-1/2 lg:w-1/4 p-2">
        <a href="#" class="no-underline md:w-1/2 lg:w-1/4 m-2" v-on:click.prevent="$emit('select-image')">
            <img :src="image.url">
        </a>
    </div>
</template>

<script>
    export default {
        name: "image-preview",
        props: {
            image: { required: true }
        }
    }
</script>
