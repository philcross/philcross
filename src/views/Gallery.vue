<template>
    <div>
        <div class="content-section white-section">
            <p class="page-title">Gallery</p>
            <p>I'm not a great photographer, but sometimes there's some photos that I'm particularly proud of. Other times it might be pictures of events I was in / things I've been up to. Feel free to take a look.</p>
        </div>

        <div class="rounded py-10 mt-10">
            <div class="w-full" v-if="imageSelected">
                <div class="w-full">
                    <a href="#" class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg" v-on:click.prevent="removeImage">&lt;&lt; Back to images</a>
                </div>

                <div class="w-full m-4 text-center">
                    <img :src="imageSelected.url" class="shadow-lg"/>
                </div>

                <div class="w-full">
                    <p class="mt-4">{{ imageSelected.description }}</p>
                </div>
            </div>

            <div class="w-full flex flex-wrap" v-if="!imageSelected">
                <image-preview v-for="image in displayed" :key="image.key" :image="image" v-on:select-image="selectImage(image.key)"></image-preview>
            </div>

            <div class="w-full text-center">
                <div class="inline-flex" v-if="imageSelected">
                    <a href="/" class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg" v-on:click.prevent="selectPreviousImage">&lt;</a>
                    <a href="/" class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg" v-on:click.prevent="selectNextImage">&gt;</a>
                </div>
                <div class="inline-flex" v-else>
                    <a href="/" class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg" v-on:click.prevent="selectPreviousPage(page)">&lt;</a>
                    <a href="/" class="bg-blue hover:bg-blue-dark rounded-full p-2 m-2 w-8 text-white no-underline flex-1 shadow-lg" v-on:click.prevent="selectNextPage(page)">&gt;</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImagePreview from "../components/gallery/ImagePreview";

    const per_page = 8;

    export default {
        name: 'gallery',
        components: {
            ImagePreview
        },
        data: function () {
            return {
                imageSelected: null,
                key: null,
                page: 1,
                displayed: [],
                images: [
                    { url: '/images/phil_brody.jpg', description: 'Me and Brody' },
                ]
            }
        },
        methods: {
            selectImage: function (key) {
                this.key = key;
                this.imageSelected = this.images[key];
            },
            selectNextImage: function () {
                let nextKey = ++this.key;

                if (typeof this.images[nextKey] !== 'undefined') {
                    this.selectImage(nextKey);
                } else {
                    this.selectImage(0);
                }
            },
            selectPreviousImage: function () {
                let nextKey = --this.key;

                if (typeof this.images[nextKey] !== 'undefined') {
                    this.selectImage(nextKey);
                } else {
                    this.selectImage(this.images.length-1);
                }
            },
            selectNextPage: function () {
                let nextPage = ++this.page;

                if (nextPage > this.totalPages) {
                    this.page = 1;
                } else {
                    this.page = nextPage;
                }

                this.loadImages();
            },
            selectPreviousPage: function () {
                let previousPage = --this.page;

                if (previousPage < 1) {
                    this.page = this.totalPages;
                } else {
                    this.page = previousPage;
                }

                this.loadImages();
            },
            loadImages: function () {
                this.displayed = this.images.slice(this.offset, this.offset+per_page);

                let i = 0;

                this.displayed = this.displayed.map(item => {
                    item.key = this.offset+i;
                    ++i;

                    return item;
                });
            },
            removeImage: function () {
                this.imageSelected = null;
            }
        },
        computed: {
            totalPages: function () {
                return Math.ceil(this.images.length/per_page);
            },
            offset: function () {
                return (this.page*per_page)-per_page;
            }
        },
        mounted: function () {
            this.loadImages();
        }
    }
</script>
