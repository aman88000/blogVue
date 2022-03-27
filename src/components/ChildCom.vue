<template>
    <h1>Child Component using Vue </h1>
    <h2>Name using Props is : {{name}}</h2>
    <p>User Name: {{user.name}}</p>
    <p>User Email: {{user.email}}</p>
    <button v-on:click="getData()">Call me</button>
</template>
<script>
export default{
    name: 'ChildCom',
    props:{
        name: String, 
        user: Object,
        getData: Function,
    }
}
</script>