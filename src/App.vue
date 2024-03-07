<script setup lang="ts">
import Formulario from './components/Formulario.vue'
</script>

<template>

  <div class="bg-cover bg-no-repeat bg-center bg-fixed h-screen font-outfit text-white text-2xl bg-image">
    <!-- Contenido de tu componente Vue -->
    <h1 class="titulo text-center text-3xl pt-12">Buscador de Clima</h1>
    <div class="contenedor buscador-clima grid grid-cols-2 items-center gap-10 mt-12 mx-auto w-11/12 max-w-5xl">
      <Formulario></Formulario>
    </div>
  </div>
  
</template>
