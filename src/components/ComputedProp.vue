<template>
    <h1>Computed Propties use in Vue JS</h1>
    <h2>{{(dollers*rupeesValue)-discount}}</h2>
    <h2>{{getresult()}}</h2>
    <h2>{{getresult()}}</h2>
    <h2>{{getBestResult}}</h2>  
    <h2>{{getBestResult}}</h2>
</template>
<script>
export default{
    name: 'ComputedProp',
    data(){
        return{
            dollers: 100,
            rupeesValue: 70,
            discount: 10
        }
    },
    methods: {
        getresult(){
            // getresult is a method keep in mind
            return  (this.dollers*this.rupeesValue)-this.discount
        }
    },
    computed: {
        getBestResult(){
            // getBestResult is a property keep in mind
             return  (this.dollers*this.rupeesValue)-this.discount
        }
    }
}
</script>