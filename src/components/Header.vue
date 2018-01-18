<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    data () {
        return {
            title: 'Vue Ninjas'
        }
    },
    methods: {

    }
}
</script>

<style scoped>
header{
    background-color: #eee;
    padding: 10px;
}
h1{
    text-align: center;
}
</style>
