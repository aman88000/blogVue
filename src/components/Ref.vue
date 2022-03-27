<template>
    <h1>Use Refs in Vue Js</h1>
    <input type="text" ref="input" />
    <button v-on:click="getRefValue" type="button">Click Me</button>
</template>
<script>
export default{
    name: 'RefsCom',
    methods: {
        getRefValue(){
            this.$refs.input.focus();
            let inputValue = this.$refs.input.value;
            console.warn(inputValue)
            this.$refs.input.style.color = 'red';
        }
    }
}
</script>