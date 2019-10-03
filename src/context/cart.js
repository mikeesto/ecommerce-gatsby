import React, { useState } from "react"

const CartContext = React.createContext()

const CartProvider = props => {
  const cartHook = useState([])
  return (
    <CartContext.Provider value={cartHook}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
