<template>
  <div>
    <header class="bg-gray-100 p-4">
      <Navbar/>
    </header>
    <main class="p-4">
      <router-view/>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Base/Navbar.vue';

</script>
