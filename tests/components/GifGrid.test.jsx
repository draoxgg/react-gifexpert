import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifts } from '../../src/hooks/useFetchGifts'

jest.mock('../../src/hooks/useFetchGifts')

describe("Pruebas en <GifGrid />", () => {

  const category = 'One Punch'

  test('debe de mostrar el loading inicialmente', () => { 

    useFetchGifts.mockReturnValue({
      images:[],
      isLoading:true
    })

    render( <GifGrid category={category} /> )
    expect(screen.getByText('Cargando ....'))
    expect(screen.getByText(category))

  })

  test('debe de mostrar items cuando se cargan las imágenes useFetchGif', () => { 

    const gifts = [
      {
        id:'ABC',
        title: 'Saitama',
        url:'https://localhost/saitama.jpg'
      },
      {
        id:'123',
        title: 'Goku',
        url:'https://localhost/goku.jpg'
      }
    ]

    useFetchGifts.mockReturnValue({
      images:gifts,
      isLoading:false
    })

    render( <GifGrid category={category} /> )
    expect(screen.getAllByRole('img').length).toBe(gifts.length)

    //screen.debug()
    
  })  
})