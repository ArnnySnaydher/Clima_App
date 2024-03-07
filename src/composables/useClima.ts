export default function useClima(){

    interface busqueda{
        ciudad:string,
        pais :string,
    }

    const obtenerClima =({ciudad,pais}:busqueda) =>{

        //Impoertar el API key
        const key = import.meta.env.VITE__API__KEY
        //Obtener la lat,lon

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`

        //Obtener el clima

        console.log(url)
    }

    return{
        obtenerClima
    }
}