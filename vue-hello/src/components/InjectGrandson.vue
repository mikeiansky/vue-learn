<template>
  <div>
    This is grandson ... {{ count }}
    <button @click="addCount">add count</button>
    <button @click="incrementCount">increment count</button>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";
 
const { count, incrementCount } = inject<("count");

function addCount() {
  count.value ++
//   incrementCount();
}
</script>
<style></style>
