<script setup lang="ts">
type Pais = {
    codigo:string;
    nombre:string;
};

const paises:Pais[]= [
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú' }
]
</script>
<template>
    <form class="formulario flex flex-col gap-5" >
        <div class="campo flex flex-col gap-5">
            <label 
            class="text-xl font-bold"
            for="ciudad">Ciudad</label>
            <input 
            class="p-3 bg-transparent border border-solid border-white rounded-lg text-white font-normal text-2xl "
            type="text"
            id="ciudad"
            placeholder="Ciudad">
        </div>

        <div class="campo flex flex-col gap-5">
            <label 
            class="text-xl font-bold"
            for="ciudad">Pais</label>
            <select
            class="p-3 bg-transparent border border-solid border-white rounded-lg text-white font-normal text-lg "
            name="" 
            id="">
            <option class="text-black" value="">--Selecione un Pais--</option>
            <option  class="text-black" v-for="pais in paises" :value="pais.codigo">{{ pais.nombre }}</option>
            </select>
        </div>
    </form>
</template>

<style scoped>
.campo::placeholder{
    color: white;
    opacity: 1;
}
</style>



