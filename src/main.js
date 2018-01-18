import Vue from 'vue'                //importing vue library
//import App from './App.vue'          //importing App
import BlogApp from './BlogApp.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(axios)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

Vue.filter('snippet', function(value){
    return value.slice(0,100) + '...';
});

new Vue({                            //create vue instance
  el: '#app',                        //
  render: h => h(BlogApp),                //render App component in #app section
  router: router
})
