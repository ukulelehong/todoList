<script setup lang="ts">
import Header from "./components/Header.vue"
import ItemInput from "./components/ItemInput.vue";
</script>

<template>
  <div class="bg-red-50 h-screen flex flex-col items-center">
    <Header />
    <ItemInput />
    <ul>
      <li class="flex w-96 h-14 bg-black">
        <div class=" bg-red-50 ">1</div>
        <div class=" bg-green-50">2</div>
        <div class=" bg-blue-50">3</div>
      </li>
    </ul>
  </div>
</template>
