<template>
<h1> Get value from checkbox and Radio button </h1>
<h3>Technology</h3>
<label for="java">Java</label>
<input type="checkbox" value="java" id="java"  v-model="technology"/>
<label for ="php">Php</label>
 <input type="checkbox" value="php" id="php" v-model="technology" />
 <label for="node">Node</label>
 <input type="checkbox" value="node" id="node" v-model="technology" />
<br><br>

<h3>Who Am I</h3>
<label for="student">Student</label>
<input type="radio" value="Student"  id="student" name="who" v-model="who" />
<label for="developer">Developer</label>
<input type="radio" value="Developer" id="developer" name="who" v-model="who" />
<br><br>
 <h2>Technology: {{technology}}</h2>
 <h2>Who Am I : {{who}}</h2>
</template>
<script>
export default{
    name: 'RadioCheckbox',
    data(){
        return{
            technology: [],
            who: 'Student'
        }
    }
}
</script>