<template >
    <div>
        This is message page ... 
        <div>
            <div>
                <ul class="menu">
                    <li><RouterLink to="/message/detail/1">message-01</RouterLink></li>
                    <li><RouterLink to="/message/detail/2">message-02</RouterLink></li>
                    <li><RouterLink to="/message/detail/3">message-03</RouterLink></li>
                </ul>
            </div>
            <div>
                <RouterView/>
            </div>
        </div>        
    </div>
</template>
<script setup lang='ts'> 
import { RouterLink,RouterView } from 'vue-router';
</script>
<style >
    
</style>