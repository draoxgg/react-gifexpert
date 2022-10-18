import { useEffect, useState } from "react"
import {getGift} from '../helpers/getGift'

export const useFetchGifts = (category) => {

  const [images,setImages] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    funGetGift()
  },[])

  const funGetGift = async () => {
    setIsLoading(true)
    const listGift = await getGift(category)
    setImages(listGift)
    setIsLoading(false)
  }

  return {
    images,
    isLoading
  }
}