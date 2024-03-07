export default function useClima(){

    interface busqueda{
        ciudad:string,
        pais :string,
    }

    const obtenerClima =({ciudad,pais}:busqueda) =>{

        console.log(ciudad,pais)
        //Impoertar el API key
        const key = import.meta.env.VITE__API__KEY
        //Obtener la lat,lon

        //Obtener el clima
    }

    return{
        obtenerClima
    }
}