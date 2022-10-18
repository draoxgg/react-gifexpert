import {useState} from 'react';
import {AddCategory,GifGrid} from './components';

function GifExpertApp() {

  const [categories,setCategories] = useState([]);

  const onAddCategory = (search) => {

    const isExistCategory = categories.find(cat => cat.toLowerCase() == search.toLowerCase());

    if(isExistCategory) return 

    setCategories([search,...categories]);
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => <GifGrid key={`${category}`} category={category} />)}
    </>
  )
}

export default GifExpertApp