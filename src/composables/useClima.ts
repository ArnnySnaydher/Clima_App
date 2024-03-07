export default function useClima(){

    interface busqueda{
        ciudad:string,
        pais :string,
    }

    const obtenerClima =({ciudad,pais}:busqueda) =>{
        console.log('consultando',ciudad)
        console.log('consultando',pais)
    }

    return{
        obtenerClima
    }
}