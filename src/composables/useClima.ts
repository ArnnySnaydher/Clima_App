import axios from 'axios';
import {computed, ref} from  "vue";

export default function useClima() {

    const clima=ref({})
    interface busqueda {
        ciudad: string,
        pais: string,
    }

    const obtenerClima = async ({ ciudad, pais }: busqueda) => {

        //Impoertar el API key
        const key = import.meta.env.VITE__API__KEY

        try {
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`

            const { data } = await axios(url)
            //Obtener la lat,lon
            const { lat, lon } = data[0]

            //Obtener el clima

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

            const {data:resultado} = await axios(urlClima)
            
            clima.value=resultado

        } catch (error) {
            console.error(error)
        }

    }
   
    const mostrarClima= computed(()=>{
        return Object.values(clima.value).length>0
    })

    return {
        obtenerClima,
        clima,
        mostrarClima
    }
}