<template>
    <router-link :to="url" class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg" v-html="direction"></router-link>
</template>

<script>
    export default {
        name: 'nav-button',
        props: {
            url: { required: true, type: String },
            direction: { required: true, type: String }
        }
    }
</script>
