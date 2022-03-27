<template>
    <h1>GetAPI call in Vue js</h1>
    <h2>User Data</h2>
    <ul v-for="item in list" :key="item.id" class="item">
        <li>{{item.id}}</li>
        <li>{{item.first_name}}</li>
        <li><img :src="item.avatar" /></li>
    </ul>
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
<style>
.item{
    display: flex;
    list-style-type: none;
    align-items: center;
    

}
.item li{
    padding: 10px;
    border: 1px solid;
    width: 180px;
    
}
.item img{
    width: 50px;
}
</style>