<template>
    <h1>Watcher Use in Vue</h1>
    <h2>Count Value: {{count}}</h2>
    <button v-on:click="count= count+1">Add Count</button>
    <button v-on:click="count= count-1">Sub Count</button>
</template>
<script>
export default{
    name: 'WatchersVue',
    data(){
        return {
            count: 0
        }
    },
    watch:{
        count(currentValue, PreValue){
            console.warn(currentValue, PreValue)
        }
    }
}
</script>