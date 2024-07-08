<template >
    <div>
        This is message detail page ... 
        <div>
            id {{ $route.params.id }}
        </div>
    </div>
</template>
<script setup lang='ts'> 
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('create detail message page' )
</script>
<style >
    
</style>