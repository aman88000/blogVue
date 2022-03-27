<template>
    <h1>Unmount and beforeUnmount Life cycle method in Vue js</h1>
    <h2 ref="test">{{fName}}</h2>
</template>
<script>
export default {
  name: 'UnmountBeforeUnmount',
  data(){
      console.warn('ComponentCreated')
      return{
          fName: 'aman'
      }
  },
  beforeUnmount(){
      console.warn('beforeUnmount', this.$refs['test'])
  },
  unmounted(){
      console.warn('unmounted', this.$refs['test'])
  }
 
}
</script>
