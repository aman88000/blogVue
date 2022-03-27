<template>
    <h1>User Parent Component</h1>
    <ul>
        <li v-for="item in users" :key="item.name"><UserChild :data="item" :getName = 'getName' /></li>
        
    </ul>
</template>
<script>
import UserChild from './UserChild.vue'
export default{
    name: "UserParent",
    components: {
        UserChild
    }, 
    data(){
        return{
            users: [
                {name: 'aman', email: "aman@test.com"},
                {name: 'happy', email: "happy@test.com"},
                {name: 'ajit', email: "ajit@test.com"},
                {name: 'rahul', email: "rahul@test.com"}
            ]
        }
    },
    methods:{
        getName: function(name){
            alert(name)
        }
    }
}
</script>