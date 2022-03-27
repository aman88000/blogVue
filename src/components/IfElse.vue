<template>
    <h1>If Else using Vue </h1>
    <h3 v-if="show">If Statement</h3>
    <h3 v-else>Else Statement</h3>
    <button v-on:click="show= !show" type="button" >show / hide </button>
</template>
<script>
export default {
    name: 'IfElse',
    data(){
        return{
            show: true
        }
    }
}
</script>