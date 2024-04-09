<template>
  <div>
    <h2>Home Page</h2>
    <button @click="counter.increment">Increment</button>
    <p>{{ counter.count }}</p>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
useHead({
  title: "Home",
});
</script>
