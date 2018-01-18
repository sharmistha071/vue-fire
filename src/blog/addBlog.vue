<template>
    <div id="add-blog" class="container">
        <div class="row">
            <div class="col-md-offset-4 col-md-4">
                <h2>Add a New Blog Post</h2>
                <form v-if="!submitted">
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
                    <button v-on:click.prevent="addBlog">Post</button>
                </form>
                <div v-if="submitted">
                    <h3>Thanks for adding your post.</h3>
                </div>
                <div id="preview" class="preview-section">
                    <h3>Preview Blog</h3>
                    <p>Blog Title: {{blog.title}}</p>
                    <p>Blog Content: {{blog.content}}</p>
                    <p>Blog Categories</p>
                    <ul>
                        <li v-for="item in blog.categories">{{item}}</li>
                    </ul>
                    <p>Author: {{blog.author}}</p>
                </diV>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            submitted: false
        }
    },
    methods: {
        addBlog(){
            axios.post('https://vuejs-blog-1e147.firebaseio.com/posts.json', this.blog).then(response => {
                this.submitted = true;
            }).catch(error => {
                this.errors.push(error);
            })
        }
    }
}
</script>

<style scoped>
.preview-section{
    border: 1px solid #eee;
    padding: 10px;
    margin-top:10px;
}

</style>
