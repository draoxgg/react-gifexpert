import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe("Pruebas en <AddCategory />", () => {


  test("debe de cambiar el valor de la caja de texto", () => { 
    
    render(<AddCategory onAddCategory={() => {}} />)
    const input = screen.getByRole("textbox")

    fireEvent.input(input, { target: {value: 'Saitama'} } )

    expect( input.value ).toBe('Saitama')
    //screen.debug()

  })

  test('Debe de llamar onAddCategory si el input tiene un valor', () => { 
    
    const inputValue = 'Saitama'
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={ onAddCategory } />)
    const input = screen.getByRole("textbox")
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: {value: inputValue} } )
    fireEvent.submit(form)

    expect(input.value).toBe("")
    expect(onAddCategory).toHaveBeenCalled() // Si fue llamada mas de una vez
    expect(onAddCategory).toHaveBeenCalledTimes(1) // Si fue llamada n numero de veces. 
    expect(onAddCategory).toHaveBeenCalledWith(inputValue) // si es llamada con n parámetros 

  })

  test('no debe de llamar el onAddCategory si ek input esta vació', () => { 

    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={ onAddCategory } />)

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.submit(form)
    
    expect(onAddCategory).toHaveBeenCalledTimes(0) // Si fue llamado 0 veces
    expect(onAddCategory).not.toHaveBeenCalled() // Negamos que fue llamada la funcion con el not
    expect(input.value).toBe("")
  })


})