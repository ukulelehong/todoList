<template>
    <li class="todolist flex w-102 h-14 bg-white border">
        <div v-if="true" class=" toggle w-12"></div>
        <div v-else class=" toggle-checked w-12"></div>
        <div class="flex-grow flex items-center p-4"><span>12346</span></div>
        <div class="w-12 flex justify-center items-center"><button class="text-3xl">×</button></div>
    </li>
</template>