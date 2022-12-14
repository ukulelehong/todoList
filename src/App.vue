<script setup lang="ts">
import Header from "./components/Header.vue"
import ItemInput from "./components/ItemInput.vue";
</script>

<template>
  <div class="bg-red-50 h-screen flex flex-col items-center">
    <Header />
    <ItemInput />
    <ul>
      <li class="todolist flex w-102 h-14 bg-white border">
        <div v-if="true" class=" toggle w-12"></div>
        <div v-else class=" toggle-checked w-12"></div>
        <div class="flex-grow flex items-center p-4"><span>12346</span></div>
        <div class="w-12 flex justify-center items-center"><button class="text-3xl">×</button></div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul li .toggle {
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
}
ul li .toggle-checked{
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
}
ul li button{
  display: none;
}
ul .todolist:hover button{
  display: block;
}
</style>
