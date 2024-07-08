<template>
    <div>
        This is father ...  count : {{count}}
        <InjectSon/>
    </div>
</template>
<script setup lang='ts'>
    import InjectSon from '@/components/InjectSon.vue'; 

    import { provide, ref } from 'vue';

    const count = ref(3)
    function incrementCount(){
        count.value++
    }

    provide('count', {count, incrementCount})

</script>
<style>
    
</style>