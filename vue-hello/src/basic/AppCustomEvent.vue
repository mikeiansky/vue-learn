<template>
  <div>
    <MyEventComp @some-event="eventHappen" />
    <MyEventComp @some-event.once="eventHappen" />
  </div>
</template>

<script setup lang="ts">
import MyEventComp from "./components/MyEventComp.vue";

function eventHappen(p1: any, p2: any) {
  console.log("event happen", p1, p2);
}
</script>

<style scoped></style>
