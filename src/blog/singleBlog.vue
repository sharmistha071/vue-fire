<template>
    <div id="single-blog" class="container">
        <div class="single-blog-container" v-if="!edited">
            <h1>{{blog.title}}</h1>
            <article>{{blog.content}}</article>
            <p>Author: {{blog.author}}</p>
            <p>Category:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <button v-on:click="edited= !edited">Edit</button>
        </div>
        <form v-if="edited">
            <div class="form-group">
                <label>Blog Title</label>
                <input type="text" class="form-control" v-model="blog.title">
            </div>
            <div class="form-group">
                <label>Blog Content</label>
                <textarea class="form-control" v-model="blog.content"></textarea>
            </div>
            <div class="form-group">
                <label>Blog Category</label>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="blog.categories" value="science"> Science
                    </label>
                    <label>
                        <input type="checkbox" v-model="blog.categories" value="history"> History
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label>Blog Author</label>
                <select class="form-control" v-model="blog.author">
                    <option value="xyz">XYZ</option>
                    <option value="abc">ABC</option>
                </select>
            </div>
            <button v-on:click.prevent="editBlog">Save</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return {
            id: this.$route.params.id,
            blog: {},
            edited: false,
        }
    },
    created(){
        axios.get('https://vuejs-blog-1e147.firebaseio.com/posts/'+this.id+'.json').then(response => {
            this.blog = response.data;
        }).catch(function (error) {
            this.errors.push(error);
        });
    },
    methods: {
        editBlog(){
            axios.patch('https://vuejs-blog-1e147.firebaseio.com/posts'+ this.id + '.json', this.blog).then(response => {
                this.edited = false;
            }).catch(error => {
                this.errors.push(error);
            })
        }
    }
}
</script>
