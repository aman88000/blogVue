<template>
    <h1>Two Way Binding Using Vue</h1>
    <input type="text" v-model="count" />
    <h3>Value : {{count}}</h3>
</template>
<script>
export default {
    name: 'TwoWay',
    data(){
        return{
            count: 0
        }
    },
    methods: {

    }
}
</script>
<style>

</style>