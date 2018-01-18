<template>
    <div id="app">
        <app-header></app-header>
        <ninjas :ninjas="ninjas"></ninjas>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Ninjas from './components/Ninjas.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'app',
    components: {
        'app-header': Header,
        'ninjas': Ninjas,
        'app-footer': Footer
    },
    data () {
        return {
            title: 'Ninja App',
            ninjas: [
                {name: 'yoshi', speciality: 'Component', show: false},
                {name: 'Kami', speciality: 'Vues', show: false},
                {name: 'Tango', speciality: 'script', show: false},
                {name: 'yoshi', speciality: 'Component', show: false},
                {name: 'Kami', speciality: 'Vues', show: false},
                {name: 'Tango', speciality: 'script', show: false},
                {name: 'yoshi', speciality: 'Component', show: false},
                {name: 'Kami', speciality: 'Vues', show: false},
                {name: 'Tango', speciality: 'script', show: false},
                {name: 'Tango', speciality: 'script', show: false},
            ]
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
