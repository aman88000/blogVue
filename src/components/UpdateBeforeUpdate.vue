<template>
    <h1>BeforeUpdate and Updated Life cycle method in Vue js</h1>
    <h2 ref="count">{{count}}</h2>
    <button @click="count=count+1">Add</button>
</template>
<script>
export default {
  name: 'UpdateBeforeUpdate',
  data(){
      console.warn('ComponentCreated')
      return{
          count: 0
      }
  },
  beforeUpdate(){
      console.warn('beforeUpdate', this.$refs['count'].textContent)
  },
  updated(){
       console.warn('updated', this.$refs['count'].textContent)
  }

 
}
</script>
