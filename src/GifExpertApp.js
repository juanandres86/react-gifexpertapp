import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Cerdo"])

    // const handleAdd = () => {
    //     // Las dos formas son correctas
    //     // setCategories([...categories, "Ballena"])
    //     setCategories(catego => [...catego, "Ballena"])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}/>

            <hr />

            {/* <button onClick={handleAdd}> Agregar </button> */}

            <ol>
                {
                    categories.map(category => (
                        // return <li key={category}> {category} </li>
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp