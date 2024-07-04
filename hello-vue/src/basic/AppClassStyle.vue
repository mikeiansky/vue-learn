<template>
  <div>
    <p :class="p1class">bind class</p>
    <p class="one" :class="p1class">combine class</p>
    <p :class="{ s1: show1, s2: show2, ps1: show1, ps2: show2 }">combine class</p>
    <p :class="show1Class">show1 class</p>
    <p :class="show2Class">show2 class</p>
    <p :class="[arr1,arr2,arrNone,arr3,arr2]">bind class with array</p>
    <p :class="[objClass, arr1]">bind class with array and object</p>
    <p :style="{display:dpb}">bind style</p>
    <p :style="styleObj">bind style with obj</p>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const p1class = "ppp";
const show1 = true;
const show2 = false;
const show1Class = 'show1Cccc'
const show2Class = undefined
const arr1 = 'java'
const arr2 = ref('php')
const arr3 = 'python'
const arrNone = undefined

const objClass = {
  ss1: show1,
  ss2: show2,
  show1Class
}

const dpb = 'block'

const styleObj = {
  display: 'block',
  width : '100px'
}

</script>

<style scoped>
.ppp {
  background-color: aqua;
}
</style>
