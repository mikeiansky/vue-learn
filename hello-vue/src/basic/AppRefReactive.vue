<template>
  <div>
    <div>ref count: {{ count }}</div>
    <div>
      deep ref : {{ defRef.a.b.c }}
      <button @click="changeDeepRef">change deep ref</button>
    </div>
    <div>
      reactive deep size: {{ carReact.info.size }}
      <button @click="changeCarInfoSize">change car info size</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const count = ref(2);
console.log("count", count);

const defRef = ref({ a: { b: { c: "abc" } } });

function changeDeepRef() {
  defRef.value.a.b.c = "bca";
}

const carReact = reactive({ id: "bmw", name: "bmw", info: { size: 20 } });

console.log("car", carReact, carReact.id);

function changeCarInfoSize() {
  carReact.info.size = 13;
}
</script>

<style scoped></style>
