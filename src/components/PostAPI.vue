<template>
    <h1>POST API use in Vue js</h1>
   <label for="username">Name: </label> <input id="username" type="text" name="name" v-model="userName"/> <br /><br />
<label for="email">Email: </label> <input id="email" type="text" name="password" v-model="email" /><br /><br />
    <button @click="adduser">Add User</button>
</template>
<script>
import axios from 'axios'
export default{
    name: 'PostAPI',
    data(){
        return{
            userName: '',
            email: ''
        }
    },
    methods:{
      async adduser(){
            console.warn('added user')

          let result =  await axios.post('http://localhost:3000/users', {
                name: this.userName,
                email: this.email
            })
            this.userName='';
            this.email = '';
        console.warn('added user', result)
        }
    }
}
</script>