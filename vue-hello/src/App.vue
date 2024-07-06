<template>
  <div> 
      <MySlotComp>
        from app , and message : {{ msg }} 
        <template #header>
          header template ... 
        </template>
        <template v-slot:content>
          content template ... 
        </template>
        <template #footer>
          footer template ... 
        </template>
      </MySlotComp>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MySlotComp from "./components/MySlotComp.vue";
 
function greet(){
  console.log('hello my attrs comp ... ')
}

const msg = ref('first - app')
</script>

<style scoped></style>
