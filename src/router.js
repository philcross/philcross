import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: () => import(/* webpackChunkName: "blogs" */ './views/Blogs.vue')
        },
        {
            path: '/blogs/:id',
            name: 'blog',
            component: () => import(/* webpackChunkName: "blog" */ './views/Blog.vue'),
            props: true,
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: () => import(/* webpackChunkName: "gallery" */ './views/Gallery.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
        }
    ]
});
