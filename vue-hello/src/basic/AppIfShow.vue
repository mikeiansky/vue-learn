<template>
  <div>
    <button @click="showOrHIdden">show or hidden</button>
    <p v-if="show">show paragraph</p>
    <p v-else>hidden paragraph</p>

    <button @click="increment">if else if else button</button>
    <p v-if="count % 3 === 0">div zero</p>
    <p v-else-if="count % 3 === 1">div one</p>
    <p v-else="count % 3 === 0">div two</p>

    <button @click="changeShowTemp">show or hidden template</button>
    <template v-if="showTemp">
      <p>paragraph at template</p>
    </template>
    <p v-else>paragraph out of template</p>

    <p v-if="showTemp">v-if display attribute</p>
    <p v-show="showTemp">v-show display attribute</p>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const show = ref(true);

function showOrHIdden() {
  show.value = !show.value;
}

const count = ref(0);
function increment() {
  count.value++;
}

const showTemp = ref(true);
function changeShowTemp() {
  showTemp.value = !showTemp.value;
}
</script>

<style scoped>
.ppp {
  background-color: aqua;
}
</style>
