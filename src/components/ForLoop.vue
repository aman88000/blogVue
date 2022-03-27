<template>
<h1>For Loop using vue js </h1>
<ul>
    <li v-for="item in technology" :key="item">{{item}}</li>
</ul>
<br><br>
<ul><li v-for="item in users" :key="item.email">Name: {{item.name}}</li></ul>
</template>

<script>
export default {
    name: 'ForLoop',
    data() {
        return {
            technology: ['java', 'php', 'node', 'html'],
            users: [{
                    name: 'aman',
                    email: 'aman@gmail.com'
                },
                {
                    name: 'happy',
                    email: 'happy@gmail.com'
                },
                {
                    name: 'preet',
                    email: 'preet@gmail.com'
                }
            ]
        }
    }
}
</script>
