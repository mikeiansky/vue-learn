<template >
    <div>
        This is about page ... 
    </div>
</template>
<script setup lang='ts'> 
import { onMounted,onUnmounted } from 'vue';

onMounted(()=>{
    console.log('about ===> onMounted')
})

onUnmounted(()=>{
    console.log('about ==> onUnmounted')
})

</script>
<style >
    
</style>