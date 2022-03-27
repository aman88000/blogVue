<template>
    <h1>{{profile}} Profile Route in vue Js</h1>
</template>
<script>
 import {useRoute} from 'vue-router';
export default{
    name: 'ProfileRoute',
    data(){
        return{
            profile: ''
        }
    },
    mounted(){
        const route = useRoute();
        console.log(route.params)
        this.profile = route.params.id
    }
}
</script>