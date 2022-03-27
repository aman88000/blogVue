<template>
<h1>User Child Component // {{data.name}} //</h1>
<button v-on:click="getName(data.name)">Alert Click</button>
</template>
<script>
export default{
    name: "UserChild",
    props: {
        data: Object,
        getName: Function
    }
}
</script>