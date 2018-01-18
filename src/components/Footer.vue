<template>
    <footer>
        <p>{{copyright}}</p>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            copyright: 'Copyright 2017 Vue Ninjas'
        }
    },
    methods: {

    }
}
</script>

<style scoped>
footer{
    background-color: #eee;
    padding: 5px;
}
p{
    text-align: center;
}
</style>
