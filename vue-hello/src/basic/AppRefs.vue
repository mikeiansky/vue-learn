<template>
  <div> 
    <p ref="pr">{{ text }}</p>
    <p ref="ps"> p1</p>
    <p ref="ps"> p2</p>
    <p ref="ps"> p3</p>
    <button @click="change">change</button>
    <button @click="show">show</button>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from "vue";
 
const text = ref('temp')
const pr = ref()
const ps = ref([])

function change(){
  text.value += '!'
}

function show(){
  console.log('text value', text.value)
  console.log('ps', ps.value)
}

</script>

<style scoped></style>
