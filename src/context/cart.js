import React, { useState, useEffect } from "react"
import { reactLocalStorage } from "reactjs-localstorage"

const CartContext = React.createContext()

const CartProvider = props => {
  const [cart, updateCart] = useState([])

  useEffect(() => {
    let storedCart = reactLocalStorage.getObject("cart")

    // Check if there are no entries, if so change the empty object to an empty array
    if (Object.entries(storedCart).length === 0) {
      storedCart = []
    }
    updateCart(storedCart)
  }, [])

  return (
    <CartContext.Provider value={[cart, updateCart]}>
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
