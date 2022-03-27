<template>
<h1>Get value from Input using Vue</h1>
<input type="text" placeholder="Enter email" v-model="email"><br /><br />
<input type="password" placeholder="Enter password" v-model="pass"><br /><br />
<button v-on:click="getValues()" type="button">Get values</button>
</template>
<script>
export default{
    name: 'InputValue',
    data(){
        return {
            email: null,
            pass: null
        }
    },
    methods: {
        getValues(){
            console.warn('values: ', this.email, this.pass)
        }
    }
}
</script>