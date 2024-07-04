<template>
  <div>
    <p>for in array</p>
    <ul>
      <li v-for="(book,index) in books" :key="book.id">{{ book.name }}-{{ book.price }} -- index :: {{ index }}</li>
    </ul>
    <p>for of array</p>
    <ul>
      <li v-for="(book,index) of books" :key="book.id">{{ book.name }}-{{ book.price }} - index :: {{ index }}</li>
    </ul>
    <p>for person</p>
    <ul>
      <li v-for="(pv, pk) in person" :key="pk">{{ pk }}-{{ pv }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const books = reactive([
  { id: 11, name: "java", price: 12 },
  { id: 22, name: "python", price: 20 },
  { id: 33, name: "golang", price: 30 },
  { id: 44, name: "php", price: 40 },
]);

const person = reactive({
  id: 45,
  name: "ciwei",
  age: 34,
  address: "shenzhen",
});
</script>

<style scoped></style>
