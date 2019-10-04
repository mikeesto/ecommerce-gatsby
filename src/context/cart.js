import React, { useState } from "react"
import { reactLocalStorage } from "reactjs-localstorage"

const CartContext = React.createContext()

const CartProvider = props => {
  let storedCart = reactLocalStorage.getObject("cart")

  // Check if there are no entries, if so change the empty object to an empty array
  if (Object.entries(storedCart).length === 0) {
    storedCart = []
  }

  const cartHook = useState(storedCart)

  return (
    <CartContext.Provider value={cartHook}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
