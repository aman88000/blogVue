<template>
<h1>Html Binding Component</h1>
<h2>{{text}}</h2>
<div v-html="tag"></div>
<div v-html="tag2"></div>
</template>
<script>
export default{
    name: 'HtmlBinding',
    data(){
        return {
            text: 'Text testing Name Aman',
            tag: '<h2>Html Tag Testing 1</h2>',
            tag2: "<h3>Html Tag Testing 2 </h3>"
        }
    }
}
</script>
