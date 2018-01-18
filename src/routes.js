import showBlogs from './blog/showBlogs.vue';
import addBlog from './blog/addBlog.vue';
import singleBlog from './blog/singleBlog.vue';

export default[
    {path: "/", component: showBlogs},
    {path: "/add", component: addBlog},
    {path: "/blog/:id", component: singleBlog},
]
