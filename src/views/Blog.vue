<template>
    <div>
        <div class="content-section grey-section">
            <p class="page-title">{{ title }}</p>
            <p class="post-date">{{ date }}</p>
            <p>{{ preview }}</p>
        </div>

        <div v-if="isEntryResolved">
            <div class="blog-content" :is="entry"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'blog',
        props: {
            id: { required: true }
        },
        data: function () {
            return {
                title: null,
                date: null,
                file: null,
                preview: null,
                isEntryResolved: false,
                entry: null,
            }
        },
        mounted: function () {
            let index = require('./blogs/index').default;
            let entry = index.filter(item => item.id === this.id)[0];

            this.title = entry.title;
            this.date = entry.date;
            this.preview = entry.preview;

            let _this = this;

            import('./blogs/' + entry.file).then(function (component) {
                _this.entry = component.default;
                _this.isEntryResolved = true;
            });
        }
    };
</script>
