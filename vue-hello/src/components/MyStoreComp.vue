<template>
    <div>
        this is counter store component {{cc}}
        <button @click='increment'>increment</button>
    </div>
</template>
<script setup lang='ts'>
import { useCounterStore } from '@/stores/counter' 
import { computed } from 'vue';
const store = useCounterStore()

const {count, increment} = store;
const cc = computed(()=>count)

</script>
<style >
    
</style>