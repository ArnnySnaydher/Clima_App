import axios from 'axios';
import { computed, ref } from "vue";

export default function useClima() {

    const clima = ref({})
    interface busqueda {
        ciudad: string,
        pais: string,
    }

    const cargando = ref(false)

    const obtenerClima = async ({ ciudad, pais }: busqueda) => {

        //Impoertar el API key
        const key = import.meta.env.VITE__API__KEY

        cargando.value = true
        clima.value = {}

        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`

            const { data } = await axios(url)
            //Obtener la lat,lon
            const { lat, lon } = data[0]

            //Obtener el clima

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

            const { data: resultado } = await axios(urlClima)

            clima.value = resultado


        } catch (error) {
            console.error(error)
        } finally {
            cargando.value = false
        }

    }

    const mostrarClima = computed(() => {
        return Object.values(clima.value).length > 0
    })
    type Temperatura = number;

    // La función ahora especifica que espera un parámetro del tipo Temperatura
    const formatearTemperatura = (temperatura: Temperatura): number => {
        return parseInt(temperatura - 273.15);
    };


    return {
        obtenerClima,
        clima,
        mostrarClima,
        formatearTemperatura,
        cargando
    }
}