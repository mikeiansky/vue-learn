<template>
  <div>title : {{ title }} - likes : {{ likes }} - able : {{ able }}</div>
  <div>person : {{ person }}</div>
</template>

<script setup lang="ts">
import type Person from "@/types/Person"; 

const props = defineProps<{
  title: string;
  likes?: number;
  able: boolean;
  person?: Person;
}>(); 

console.log('props', props)

// 不能定义多次
// defineProps({
//     info: String
// })

</script>
