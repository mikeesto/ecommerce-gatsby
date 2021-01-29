import React, { useState, useEffect } from "react"
import { reactLocalStorage } from "reactjs-localstorage"

const CartContext = React.createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  // Update cart from local storage
  useEffect(() => {
    let storedCart = reactLocalStorage.getObject("cart")

    // Check if there are no entries, if so change the empty object to an empty array
    if (Object.entries(storedCart).length === 0) {
      storedCart = []
    }
    setCart(storedCart)
  }, [])

  const emptyCart = () => {
    setCart([]);
    reactLocalStorage.setObject('cart', [])
  }
  
  return (
    <CartContext.Provider value={[cart, setCart, emptyCart]}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
