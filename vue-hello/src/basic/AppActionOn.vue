<template>
  <div>
    <div @click="sayHello('one')">one</div>
    <div @click="sayHello('two')">two</div>
    <div @click.once="sayHello('once')">once</div>
    <div @click.stop="sayHello('stop')">stop</div>
    <div @click.stop.prevent="sayHello('stop-prevent')">stop-prevent</div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";


function sayHello(msg:string){
  console.log('say hello', msg)
}

</script>

<style scoped></style>
