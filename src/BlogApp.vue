<template>
    <div id="app">
        <app-header></app-header>
        <section class="blog-section">
            <!-- <show-blogs></show-blogs>
            <add-blog></add-blog> -->
            <router-view></router-view>
        </section>
        <footer></footer>
    </div>
</template>

<script>
import header from './blog/header.vue';
import addBlog from './blog/addBlog.vue';
import showBlog from './blog/showBlogs.vue';
//import Footer from './components/Footer.vue';

export default {
    name: 'app',
    components: {
        'app-header': header,
        'add-blog': addBlog,
        'show-blogs': showBlog,
        //'app-footer': Footer
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
body{
    margin: 0px;
}
.blog-section{
    margin-top: 4%;
}
</style>
