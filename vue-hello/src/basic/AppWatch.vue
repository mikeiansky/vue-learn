<template>
  <div>
    <div>
      count : {{ count }}
      <button @click="count++">add</button>
    </div>
    <div>
      person : {{ person }}
      <button @click="person.age++">add age</button>
      <button @click="changeTag">change tag</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch, watchEffect } from "vue";

const count = ref(0);

const person = reactive({ id: 1, name: "ian", age: 30, info: { tag: "tag" } });

function changeTag() {
  person.info.tag += "~";
}

watch(count, function (nc, oc) {
  console.log("nc", nc, "oc", oc);
});

watch(
  () => count.value + 2,
  function (nac, oac) {
    console.log("watch ()=> count.value + 2", nac, oac);
  }
);

watch(
  person,
  (np, op) => {
    console.log("watch person, np:", np, ",op:", op);
  },
  { immediate: true, deep: true }
);

watch(
  () => person.age,
  (na, oa) => {
    console.log("watch ()=> person.age, na:", na, ",oa:", oa);
  }
);

watch(
  () => person.info.tag,
  (ni, oi) => {
    console.log("watch ()=> person.info.tag once, ni:", ni, ",oi:", oi);
  },
  { once: true }
);

const we = watchEffect(() => {
  console.log("watchEffect count:", count.value, ", person:", person.age);
  // we()
  if (count.value > 5) {
    we();
  }
});
</script>

<style scoped></style>
