import React, { useContext } from "react"
import { CartContext } from "../context/cart"
import { CartUIContext } from "../context/cartUI"
import { Section, H2, H4 } from "./cartsteps-styles"

const CartSteps = () => {
  const [cartUIStatus, updateCartUI] = useContext(CartUIContext)
  const [cart, updateCart] = useContext(CartContext)
  return (
    <Section>
      <div className="shopping">
        <H2
          className={
            cartUIStatus === "idle" && cart.length === 0 ? "active" : null
          }
        >
          01
        </H2>
        <H4>Shopping Cart</H4>
      </div>
      <div className="checkout">
        <H2
          className={
            cartUIStatus === "idle" && cart.length > 0 ? "active" : null
          }
        >
          02
        </H2>
        <H4>Check out</H4>
      </div>
      <div className="order">
        <H2 className={cartUIStatus === "success" ? "active" : null}>03</H2>
        <H4>Order Complete</H4>
      </div>
    </Section>
  )
}

export default CartSteps
