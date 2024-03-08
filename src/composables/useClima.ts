import axios from 'axios';

export default function useClima() {

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
            console.log(resultado)

        } catch (error) {
            console.error(error)
        }


    }

    return {
        obtenerClima
    }
}