<template>
    <ul id="hatori">
        <li v-for="hatori in hatoris">{{hatori}}</li>
    </ul>
</template>

<script>
export default {
    name: 'hatori',
    data () {
        return {
            hatoris: ['aa', 'xx', 'cc']
        }
    }
}
</script>

<style>

</style>
