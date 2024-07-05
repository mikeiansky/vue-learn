<template>
  <div> 
    books : {{ books }} and size {{ size }}
    <button @click="buyBook">buy book</button>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue"; 

const books = reactive(['java', 'python', 'golang', 'c++'])

const size = computed(()=>{
  return books.length
})

function buyBook(){
  books.push('oracle')
}

</script>

<style scoped></style>
