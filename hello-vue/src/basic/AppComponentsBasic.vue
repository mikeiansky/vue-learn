<template>
  <div>
    <Hello @useEvent="helloEvent1" @sayHello="helloEvent2" :title2="first" :key="key1">
      <h1>h1-1</h1>
      <h2>h1-2</h2>
    </Hello>
    <Hello
      @useEvent="helloEvent2"
      @say-hello="helloEvent1"
      title2="second"
      :key="key2"
      ref="helloRef"
    >
      <h1>h2-1</h1>
      <h2>h2-2</h2>
    </Hello>
    <button @click="showHello">show hello</button>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from "vue";
import Hello from "./basic/Hello.vue";

const first = ref("first-ref");
const key1 = ref("hk1");
const key2 = ref("hk2");
const helloRef = ref();

function showHello() {
  console.log("hello ref", helloRef.value, helloRef.value.a1, helloRef.value.arf);
}

function helloEvent1(msg: string) {
  console.log("hello event 1", msg);
}

function helloEvent2(msg: string) {
  console.log("hello event 2", msg);
}
</script>

<style scoped></style>
