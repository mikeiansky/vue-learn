<template>
    <div>
        this is counter store component {{ store.count }} - {{ count }}<br/>
        <button @click='store.increment'>increment by store </button><br/>
        <button @click='increment'>increment by ref </button><br/>
    </div>
</template>
<script setup lang='ts'>
import { useCounterStore } from '@/stores/counter'
import { computed, onMounted, onBeforeUpdate } from 'vue';
import { storeToRefs } from 'pinia';
const store = useCounterStore()
console.log('setup running ...... ')

const {count, actions:increment} = storeToRefs(store)

onBeforeUpdate(() => {
    console.log('onBeforeUpdate ==== >')
})

console.log('store to ref count', count, increment)

</script>
<style></style>