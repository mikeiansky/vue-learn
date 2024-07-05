<template>

<div>
    <button @click="$emit('someEvent')">active event empty</button><br/>
    <button @click="$emit('someEvent', 'one', 'two')">active event with params</button><br/>
</div>
</template>


<script setup lang="ts">



</script>