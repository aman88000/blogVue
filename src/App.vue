<template>
<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!-- <Home /> -->
<!-- <TwoWay /> -->
<!-- <InputValue /> -->
<!-- <RadioCheckbox /> -->
<!-- <IfElse /> -->
<!-- <ForLoop /> -->
<!-- <ParentCom /> -->
<!-- <UserParent /> -->
<!-- <HtmlBinding /> -->
<!-- <ClassBinding /> -->
<!-- <RefsCom /> -->
<!-- <FormVue /> -->
<!-- <Modifiers /> -->
<!-- <ComputedProp /> -->
<!-- <Watchers /> -->

<!-- 
<SlotsVue><h1>Working of Slots in Vue js</h1> </SlotsVue>
<SlotsVue><a href="testing" >Slot working</a> </SlotsVue>
<SlotsVue></SlotsVue> -->


<!-- <SlotMultiple >
<template v-slot:abc>
  <h1>Working of Slots in Vue js</h1>
</template>
<template v-slot:xyz>
<a href="testing" >Slot working</a>
</template>
<template v-slot:123>
</template>
</SlotMultiple> -->

<!-- <button @click="tab='DynaCom1'">DynaCom1</button>
<button @click="tab='DynaCom2'">DynaCom2</button>
<button @click="tab='DynaCom3'">DynaCom3</button>
<DynaCom1 />
<DynaCom2 />
<DynaCom3 /> 
<component :is="tab" /> -->

<!-- <teleport to="#footer">
<TeleportVue />
</teleport> -->

<!-- <CreatedBeforeCreate /> -->
<!-- <MountBeforeMount /> -->
<!-- <MountBeforeMount /> -->

<!-- <UpdateBeforeUpdate /> -->


<!-- <UnmountBeforeUnmount v-if="hide" />
<button @click="hide= !hide">Hide UnmountCom</button> -->


<!-- <router-link to="/">Home</router-link> <br /><br />
<router-link to="/about">About us</router-link><br /><br />
<router-link to="/contact">Contact us</router-link><br /><br />
<router-link to="/profile/1">Aman's profile</router-link><br /><br />
<router-link to="/profile/2">Happy's profile</router-link><br /><br />
<router-link to="/profile/3">Rahul's profile</router-link><br /><br />
<router-view></router-view> -->


<!-- <GetAPI /> -->
<!-- <GetAPIList /> -->
<PostAPI />

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import Home from './components/Home.vue'
//import TwoWay from './components/TwoWay.vue'
// import InputValue from './components/InputValue.vue'
// import RadioCheckbox from './components/RadioCheckbox.vue'
// import IfElse from './components/IfElse.vue'
// import ForLoop from './components/ForLoop.vue'
// import ParentCom from './components/ParentCom.vue'
// import UserParent from './components/UserParent.vue'
// import HtmlBinding from './components/HtmlBinding.vue'
// import ClassBinding from './components/ClassBinding.vue'
// import RefsCom from './components/Ref.vue'
// import FormVue from './components/Form.vue'
// import Modifiers from './components/Modifiers.vue'
// import ComputedProp from './components/ComputedProp.vue'
// import Watchers from './components/Watchers.vue'

//Slots in vues 
// import SlotsVue from './components/SlotVue.vue'
// import SlotMultiple from './components/Slot-multple.vue'

// dynamic component in vue
// import DynaCom1 from './components/DynaCom1.vue' 
// import DynaCom2 from './components/DynaCom2.vue' 
// import DynaCom3 from './components/DynaCom3.vue' 

// teleport component in vue
// import TeleportVue from './components/TeleportVue.vue'

//Life Cycle methods 
// import CreatedBeforeCreate from './components/CreatedBeforeCreate.vue'
// import MountBeforeMount from './components/MountBeforeMount.vue'
// import UpdateBeforeUpdate from './components/UpdateBeforeUpdate.vue'
// import UnmountBeforeUnmount from './components/UnmountBeforeUnmount.vue'

// import GetAPI from './components/GetAPI.vue'
// import GetAPIList from './components/GetAPIList.vue'
import PostAPI from './components/PostAPI.vue'
export default {
    name: 'App',
    components: {
        // HelloWorld,
        //Home,
        //TwoWay,
        // InputValue,
        // RadioCheckbox,
        // IfElse,
        // ForLoop,
        //  ParentCom, 
        // UserParent,
        // HtmlBinding,
        // ClassBinding,
        // RefsCom,
        // FormVue,
        //  Modifiers,
        // ComputedProp,
        // Watchers,
        // SlotsVue,
        // SlotMultiple,
        // DynaCom1,
        // DynaCom2,
        // DynaCom3,
        // TeleportVue,
        // CreatedBeforeCreate,
        // MountBeforeMount,
        // UpdateBeforeUpdate,
        // UnmountBeforeUnmount,
        // GetAPI,
        // GetAPIList,
        PostAPI
    }, 
    data(){
        return {
            tab: 'DynaCom1',
            hide: true
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
