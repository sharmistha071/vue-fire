<template>
    <div id="show-blogs" class="container">
        <div class="row">
            <div class="col-md-8">
                <h1>All Blog Articles</h1>
            </div>
            <input type="text" class="col-md-4 search-field" v-model="search" placeholder="search blogs">
        </div>
        <div v-for="blog in filterBlogs" class="single-blog">
            <router-link :to="'blog/'+blog.id"><h4>{{blog.title}}</h4></router-link>
            <p>{{blog.content | snippet}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            blogs: [],
            search: ''
        }
    },
    created(){
        axios.get('https://vuejs-blog-1e147.firebaseio.com/posts.json').then(response => {
            var blogsArray = [];
            for(let key in response.data){
                response.data[key].id = key;
                blogsArray.push(response.data[key]);
            }
            this.blogs = blogsArray;
        }).catch(function (error) {
            console.log(error);
        });
    },
    computed: {
        filterBlogs(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            });
        }
    }
}
</script>

<style scoped>
.single-blog{
    background-color: #eee;
    padding:10px;
    margin-bottom: 10px;
}
.search-field{
    margin-top:20px;
}
</style>
