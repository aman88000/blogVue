<template>
  <h1>Home Component</h1> 
  <h2>Name: {{getName('Deep')}}</h2>
  <h2>Name: {{email}}</h2>
  <h2>Name: {{mobile}}</h2>
  <h2>Name: {{mobile = 9898}}</h2>


  <h3>Email: {{getData().email}}</h3>
  <h3>Mobile: {{getData().mobile}}</h3>

  <h1 v-on:mouseover="mouseHover()">Mouse Hover testing</h1>   
  <h3>Count: {{count}}</h3>
  <button v-on:click="incrementCount()">Increment Count</button>
  <button v-on:dblclick="dblclick()">Double Click</button>

</template>
<script>
  export default {
      name: 'HomeCom',
      data(){
        return{
          getName: function(middle){
            return 'Aman ' + middle
          },
          email: 'aman@gmail.com',
          mobile: 9999,
          count: 0
        }
      },
      methods: {
        getData(){
          return{
            mobile: this.mobile,
            email: this.email
          }
        },
        incrementCount(){
          this.count++
        },
        dblclick(){
          console.log('testing double Click Event')
        },
        mouseHover(){
          console.log('Mouse Hover testing')
        }
      }
  }
</script>
