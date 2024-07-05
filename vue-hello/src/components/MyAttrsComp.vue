<template>
  <div>This is attr line one</div>
  <div v-bind="$attrs">This is attr line two</div>
  <div>This is attr line three</div>
</template>

<script setup lang="ts" name="MyAttrsComp">
import { useAttrs } from "vue";

const attrs = useAttrs();
console.log("my attrs comp attrs", attrs);
</script>
