import React, { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart.js'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToBasket = product => dispatch({
    type: 'ADD_TO_BASKET',
    payload: product
  })

  const removeFromBasket = product => dispatch({
    type: 'REMOVE_FROM_BASKET',
    payload: product
  })

  const clearBasket = () => dispatch({ type: 'CLEAR_BASKET' })

  return { state, addToBasket, removeFromBasket, clearBasket }
}


export function CartProvider ({ children }) {
  const { state, addToBasket, removeFromBasket, clearBasket } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToBasket,
      removeFromBasket,
      clearBasket
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
