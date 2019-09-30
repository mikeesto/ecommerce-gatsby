import React, { useState } from "react"

const CartUIContext = React.createContext()

const CartUIProvider = props => {
  const cartUIHook = useState("idle")
  return (
    <CartUIContext.Provider value={cartUIHook}>
      {props.children}
    </CartUIContext.Provider>
  )
}

export { CartUIContext, CartUIProvider }
