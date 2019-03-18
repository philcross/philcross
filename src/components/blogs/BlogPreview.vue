<template>
    <div class="border-l-4 border-blue hover:border-blue-dark w-full shadow-lg mb-5">
        <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="">
                <div class="mb-2">
                    <router-link :to="'/blogs/' + blog.id" class="text-grey-darkest font-bold text-xl no-underline hover:text-blue-dark">{{ blog.title }}</router-link>
                </div>
                <p class="text-grey-dark text-xs">{{ blog.date }}</p>
                <p class="text-grey-darker mt-2">{{ blog.preview }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'blog-preview',
        props: {
            blog: { required: true, type: Object }
        }
    }
</script>
