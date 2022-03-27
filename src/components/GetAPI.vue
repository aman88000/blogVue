<template>
    <h1>GetAPI call in Vue js</h1>
    <!-- <p v-for="item in list" :key="item.id">{{item.id}}----- {{item.first_name}}---- {{item.email}}</p> -->
    <h2>User Data</h2>
</template>
<script>
import axios from 'axios'
export default{
    name: 'GetAPI',
    data(){
        return {
            list: []
        }
    },
  async  mounted(){
        let result = await  axios.get('https://reqres.in/api/users?page=1')
        console.warn(result.data.data)
        this.list = result.data.data
    }
}
</script>