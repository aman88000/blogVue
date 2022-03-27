<template>
    <h1>BeforeMount and Mount Life cycle method in Vue js</h1>
    <h2>{{fName}}</h2>
</template>
<script>
export default {
  name: 'MountBeforeMount',
  data(){
      console.warn('ComponentCreated')
      return{
          fName: 'aman'
      }
  },
  beforeMount(){
      console.warn('beforeMount', this.$el)
  },
  mounted(){
      console.warn('mounted', this.$el)
  }
 
}
</script>
