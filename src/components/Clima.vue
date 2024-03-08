<script setup lang="ts">
import useClima from '../composables/useClima';

const {formatearTemperatura} =useClima()

defineProps({
    clima: {
        type: Object,
        required: true
    }
})

</script>
<template>
    <div class="resultado bg-white p-3 rounded-xl text-slate-700 text-center mt-5">
        <h2>Clima de: {{ clima.name }}</h2>
        <p class="actual text-6xl m-0 font-black ">{{formatearTemperatura(clima.main.temp)}}&deg;C</p>
        <div class="temperaturas flex gap-5 justify-center">
            <p class="font-black">Min: {{formatearTemperatura(clima.main.temp_min)}}<span class="font-black">&deg;C</span></p>
            <p class="font-black">Max:{{formatearTemperatura(clima.main.temp_max)}} <span class="font-black">&deg;C</span></p>
        </div>

    </div>
</template>
