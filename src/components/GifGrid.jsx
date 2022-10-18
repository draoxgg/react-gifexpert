import React from 'react'
import {GifItem} from './GifItem';
import {useFetchGifts} from '../hooks/useFetchGifts'

function GifGrid({category}) {

  const {images, isLoading} = useFetchGifts(category)

  return <>
    <h3>{category}</h3>
    <div className='card-grid'>
      { !isLoading ? 
        images.map((gif) => <GifItem key={gif.id} {...gif} />)
      :
        <p>Cargando ....</p>
      }
    </div>
  </>
}

export {GifGrid}