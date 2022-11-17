import React,{ useState } from 'react'
import PropType from 'prop-types'

function AddCategory({onAddCategory}) {

  const [search,setSearch] = useState("");

  const funOnAddCategory = (event) => {
    event.preventDefault();

    const stringSearch = search.trim();

    if(!search || stringSearch.length < 1) {
      setSearch("")
      return
    }

    onAddCategory(stringSearch)
    setSearch("")
  }

  return <form onSubmit={funOnAddCategory} aria-label="form">
    <input 
      value={search} 
      onChange={text => setSearch(text.target.value)}  
    />
  </form>
}

AddCategory.propTypes = {
  onAddCategory: PropType.func.isRequired
}

export {AddCategory}