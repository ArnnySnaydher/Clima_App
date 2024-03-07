<script setup lang="ts">
import { reactive, ref } from 'vue';
import Alerta from './Alerta.vue';
import Swal from 'sweetalert2'

const busqueda = reactive({
    ciudad: '',
    pais: ''
})

const error = ref("")
type Pais = {
    codigo: string;
    nombre: string;
};

const paises: Pais[] = [
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú' }
]

const consultarClima = () => {

    if (Object.values(busqueda).includes('')) {
        Swal.fire("Todos  los campos son obligatorios");
        return
        // error.value = "Todos  los campos son obligatorios"

        // setTimeout(() => {
        //     error.value = ''
        // }, 2000);
        // return
    }


}
</script>
<template>

    <form @submit.prevent="consultarClima" class="formulario flex flex-col gap-5">

        <Alerta v-if="error">{{ error }}</Alerta>
        <div class="campo flex flex-col gap-5">
            <label class="text-xl font-bold" for="ciudad">Ciudad</label>
            <input v-model="busqueda.ciudad"
                class="p-3 bg-transparent border border-solid border-white rounded-lg text-white font-normal text-2xl "
                type="text" id="ciudad" placeholder="Ciudad">
        </div>

        <div class="campo flex flex-col gap-5">
            <label class="text-xl font-bold" for="pais">Pais</label>
            <select v-model="busqueda.pais"
                class="p-3 bg-transparent border border-solid border-white rounded-lg text-white font-normal text-lg "
                name="" id="pais">
                <option class="text-black" value="">--Selecione un Pais--</option>
                <option class="text-black" v-for="pais in paises" :value="pais.codigo">{{ pais.nombre }}</option>
            </select>
        </div>

        <input class="bg-indigo-500 border-none text-white font-bold text-sm uppercase cursor-pointer p-2.5 mt-5  "
            type="submit" value="Consultar Clima">
    </form>
</template>

<style scoped>
/* .campo::placeholder{
    color: white;
    opacity: 1;
} */
</style>
