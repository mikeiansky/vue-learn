<script setup lang="ts">
import { ref } from "vue";

defineProps(["title2"]);

const a1 = "hello-a1";
const arf = ref("hello-arf");

defineExpose({
  a1,
  arf,
});

defineEmits(['useEvent', 'sayHello'])

</script>

<template>
  <div>This is hello component, title : {{ title2 }} , <button @click="$emit('useEvent')">use event</button>
    <button @click="$emit('sayHello',title2)">say hello</button>
    <div>
        start ...... 
    </div>
    <slot/>
    <div>
        end ....
    </div>
  </div>
</template>
