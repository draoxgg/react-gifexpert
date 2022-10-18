import React,{ useState } from 'react'

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

  return <form onSubmit={funOnAddCategory}>
    <input 
      value={search} 
      onChange={text => setSearch(text.target.value)}  
    />
  </form>
}

export {AddCategory}