<template>
  <div>
    This is app ...
    <AsyncComp />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
// import MyDynamicComp from "@/components/MyDynamicComp.vue"; 

const AsyncComp = defineAsyncComponent(
  () =>  {return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(import("@/components/MyDynamicComp.vue"))  
    }, 2000);    
  })}      
);

// const AsyncComp = defineAsyncComponent(() =>
//   import('@/components/MyDynamicComp.vue')
// )


// const DyComp = defineAsyncComponent(
//   () => {
//     return setTimeout(() => {
//       import("@/components/MyDynamicComp.vue")    
//     }, 2000);  
//   }    
// );
</script>

<style scoped></style>
