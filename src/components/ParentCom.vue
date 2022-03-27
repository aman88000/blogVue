<template>
    <h1>Parent Component using Vue</h1>
    <ChildCom name="aman" :user="user" :getData="getData"/>
</template>
<script>
import ChildCom from './ChildCom.vue'
export default{
 name: 'ParentCom',
 components:{
     ChildCom
 },
 data(){
     return {
         user: {
             name: 'peter',
             email: 'peter@gmail.com'
         }
     }
 },
 methods: {
     getData(){
         console.warn('Parent function called')
     }
 }
}
</script>