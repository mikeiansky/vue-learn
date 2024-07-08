<template>
  <div>
    This is app ...
    <br/>
    hooks count : {{count}} 
    <br/>
    <button @click="incrementCount">increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue"; 
import useCount from "./hooks/useCount";

const {count, incrementCount} = useCount()
 
</script>

<style scoped></style>
