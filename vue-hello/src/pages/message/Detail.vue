<template >
    <div>
        This is message detail page ... 
        <div>
             id: {{ route.params.id }} 
             title: {{ route.params.title }}
        </div>
    </div>
</template>
<script setup lang='ts'> 
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
// const {query} = toRefs(route)
// console.log('create detail message page query',refRoute.query.title)

console.log('params:', route.params)

</script>
<style >
    
</style>