<template>
  <div>
    start ...... <br />

    <slot name="header">header default content ... </slot><br />
    <slot name="content">content default content ... </slot> <br />
    <slot name="footer">footer default content ... </slot><br />

    end ...... <br />
  </div>
</template>

<script setup lang="ts" name="MySlotComp"></script>
