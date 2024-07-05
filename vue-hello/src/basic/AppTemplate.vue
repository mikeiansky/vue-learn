<script setup lang="ts">
import Template01 from "./components/Template01.vue";

const appName = "Vue";
const rawHtml = '<span style="color: red">This should be red.</span>';
const appId = "007";
const btnDisable = false;
const multiBindAttributes = {
  age: 38,
  address: "shenzhen",
};

function funcBind(useKey: string) {
  return useKey;
}

// v-bind is :
// v-on is @

const dyAttrKey = "size";
const dyAttrValue = 66;

function clkAction() {
  console.log("@click action happend...");
}

const dyActionKey = "click";
function dyActionImpl() {
  console.log("@dynamic action happen");
}
</script>

<template>
  <div v-bind:id="appId">hello {{ appName }} ...</div>
  <div v-html="rawHtml"></div>
  <div>
    <button @click="clkAction" :disabled="btnDisable">click</button>
    <p v-bind="multiBindAttributes">multi bind attributes</p>
    <p :id="`use-id-${appId}`">dynamic bind</p>
    <p :fk="funcBind('one')" v-on:other="clkAction">function bind attribute</p>
    <p :[dyAttrKey]="dyAttrValue" v-on:[dyActionKey]="dyActionImpl">dynamic attribute</p>
  </div>
  <div>
    <Template01 />
  </div>
</template>

<style scoped></style>
