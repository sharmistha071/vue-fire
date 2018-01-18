<template>
    <div id="ninjas">
        <h1>List of Ninjas</h1>
        <ul>
            <li v-for="ninja in ninjas" v-on:click="ninja.show=!ninja.show">
                <h2>{{ninja.name}}</h2>
                <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
            </li>
        </ul>
        <button v-on:click="deleteNinja">Delete</button>
    </div>
</template>

<script>
export default {
    props: ['ninjas'],
    data () {
        return {

        }
    },
    methods: {
        deleteNinja: function(){
            this.ninjas.pop();
        }
    }
}
</script>

<style scoped>
#ninjas{
    height:full;
}
ul{
    list-style-type: none;
}
li{
    display: inline-block;
    width:200px;
    height:100px;
    border: 2px solid #000;
    padding: 10px;
    margin: 10px;
}
h2{
    text-align: center;
}
</style>
