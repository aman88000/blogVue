<template>
<h1>Class Binding Component</h1>
<h2 class="otherclass1" :class="{green: false}">Testing class Binding css</h2>
<h2 class="otherclass1" :class="{green: colorFul}">Testing class Binding css</h2>
<button v-on:click ="colorFul= !colorFul">Apply class style</button>
<br/><br />
<h2 :class="applyAllStyle">Testing class Binding css</h2>

</template>
<script>
export default{
    name: 'ClassBinding',
    data(){
        return{
            colorFul: true
        }
    },
    computed: {
        applyAllStyle(){
            return {
             green: this.colorFul,
             whiteText: true,
             other: false
            }
        }
    }
}
</script>
<style scoped>
h1{
    color : red
}
.green{
    background-color: green;
    width: 200px;
}
.whiteText{
    color: white
}
other{
    font-size: 25px;
}
</style>
