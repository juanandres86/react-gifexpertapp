import React, { useState } from 'react'
import PropTypes from "prop-types"

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault() // Para que cuando hace submit no recargue la pagina
    //trim() sirve para eliminar los espacios en blanco en los extremos del string
    if(inputValue.trim().length > 2){
      setCategories(catego => [inputValue, ...catego])
      setInputValue('')
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
