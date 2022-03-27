<template>
    <h1>BeforeCreate and created Life cycle method in Vue js</h1>
    <h2>{{fName}}</h2>
</template>
<script>
export default {
  name: 'CreatedBeforeCreate',
  data(){
      console.warn('ComponentCreated')
      return{
          fName: 'aman'
      }
  },
  beforeCreate(){
      console.warn('before created component')
  },
  created(){
     console.warn('after create component')
     this.fName = 'deep'
  }
}
</script>
