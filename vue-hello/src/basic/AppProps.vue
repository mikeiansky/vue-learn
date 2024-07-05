<template>
  <div>
    This is app ... 
    <PropsComp :title="pcTitle" :likes="pcLikes" :able="false"/>
    <PropsComp v-bind="pcProps" able/>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from "vue";

import PropsComp from "./components/PropsComp.vue"; 


const pcTitle = 'good'
const pcLikes = 45
const pcProps = {
  title: 'pc-title',
  // likes: 56,
  // info: 'use update',
  person: {
    id: 34,
    name: 'ian',
    age: 56,
    live: true
  }
}

</script>

<style scoped></style>
