import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])

    const {data:images, loading} = useFetchGifs(category)
    // cuando desestructuro puedo renombrar el atributo ej. data:images, ahora se llama images
    console.log(images);
    console.log(loading);

    // useEffect( () => {
    //     getGifs(category) // como devuelve una promesa tengo que utilizar el
    //         .then(setImages)
    //         //.then (gifs => setImages(gifs))
    // }, [category]) // Este ultimo argumento lo paso por si cambiara la category volver a ejecutar el useEffect


    // console.log(images);

    // getGifs() 

    return (
        <>
        <h3 className='animate__animated animate__rotateIn'> {category} </h3>

        {loading ? <p className='animate__animated animate__flash'> Cargando... </p>: 'Carga realizada'}

        <div className='card-grid'>
            
            {/* <ol>
                {
                    // DOS FORMAS:
                    // images.map(item => {
                    //     return <li key={item.id}>{item.title}</li>
                    // })
                    images.map(({id, title}) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol> */}
            {
                images.map(img => (
                    <GifGridItem key={img.id} {...img}/> //Con ... mando cada una de las propiedades de la imagen como una propiedad independiente
                ))
            }
        </div>
        </>
)
}
