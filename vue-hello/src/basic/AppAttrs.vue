<template>
  <div> 
      start...
      <MyAttrsComp a1="a1-v" a2="a2-v" @useEvent="greet" @click="greet"/>
      end...
  </div>
</template>

<script setup lang="ts">
import MyAttrsComp from "./components/MyAttrsComp.vue";
 
function greet(){
  console.log('hello my attrs comp ... ')
}

</script>

<style scoped></style>
