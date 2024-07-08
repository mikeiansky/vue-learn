<template>
  <h1>Hello App!</h1>
  <!-- <p class="header">
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p> -->
  <nav >
  <ul class="menu">
    <li><RouterLink to="/">Go to Index</RouterLink></li>
    <li><RouterLink to="/home">Go to Home</RouterLink></li>
    <li><RouterLink to="/about">Go to About</RouterLink></li>
    <li><RouterLink to="/message">Go to message</RouterLink></li>
  </ul>
    
  </nav>
  <main class="content">
    <RouterView />
  </main>
</template>
<script setup lang='ts'>
import { RouterLink,RouterView } from 'vue-router';
</script>
<style>
  .header{
      height: 30px;
      background-color: blanchedalmond;
  }
  .menu{
    /* display: inline-block; */
    background-color: aquamarine;
    width: 20%;
    float:left;
  }
  .content{
    /* display: inline-block; */
    /* width: 75%; */
    margin-left: 30%;
    min-height: 100px;
    background-color: cadetblue;
  }
</style>