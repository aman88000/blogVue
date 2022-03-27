<template>
<h1>Use Form in Vue js</h1>
<ul>
<li v-for="item in errors" :key="item">{{item}} not valid</li>

</ul>
<form>
    <label>Email:</label>
    <input type="text" placeholder="Enter email value" v-model="form.email" />
    <br /> <br />
    <label>Password:</label>
    <input type="password" placeholder="Enter password" v-model="form.password" />
    <br /> <br />
    <select v-model="form.country">
        <option>India</option>
        <option>USA</option>
        <option>China</option>
    </select>
    <br /> <br />
    <h3>Technology</h3>
    <label for="JavaScript">JavaScript:</label>
    <input type="checkbox" id="JavaScript" value="JavaScript" v-model="form.technology" />

    <label for="ReactJS">ReactJS:</label>
    <input type="checkbox" id="ReactJS" value="ReactJS" v-model="form.technology" />
        <br /> <br />

      <h3>Gender</h3>
    <label for="male">Male:</label>
    <input type="radio" id="male" value="male" name="gender" v-model="form.gender" />

    <label for="female">Female:</label>
    <input type="radio" id="female" value="female" name="gender" v-model="form.gender" />
        <br /> <br />
    <button v-on:click="login" type="button">Login</button>
</form>
</template>

<script>
export default {
    name: 'FormVue',
    data() {
        return {
            form: {
                email: '',
                password: '',
                country: 'India',
                technology: [],
                gender: ''
            },
            errors: []
        }
    },
    methods: {
        login() {
            this.errors= []
            for(const item in this.form){
                if(this.form[item] === '' || this.form[item].length === 0){
                    this.errors.push(item)
                    console.log(this.errors)
                }
            }

             if(this.errors.length === 0){
                    alert('data successfully submitted')
                }
        }
    }
}
</script>
<style scoped>
h1{
    color: rgb(223, 77, 9);
}
</style>
