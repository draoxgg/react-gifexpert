
import {getGift} from "../../src/helpers/getGift"

describe("Pruebas en getGift", () => {
  test('debe de retornar un arreglo de gifts', async () => { 

    const gifts = await getGift('One Punch')
    
    expect( gifts.length ).toBeGreaterThan( 0 ) 
    expect( gifts[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String )
    })

  })
})