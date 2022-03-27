<template>
    <h1>Modifiers in Vue js </h1>
    <!-- <input type="text" v-model.trim="data" /> -->
    <!-- <input type="text" v-model.lazy="data" /> -->
    <!-- <input type="text" v-model.number="data" />
    <h2>{{typeof(data)}}</h2> -->

     <input type="text" v-model.trim.lazy="data" />
    <h2>{{data}}</h2>
</template>
<script>
export default{
    name: 'ModifiersVue',
    data(){
        return {
            data: ''
        }
    }
}
</script>