import React from "react"
import { Link } from "gatsby"
import { Dollar } from "../helpers/currency-filter"
import { useLocalStorage } from "react-use-storage"
import Card from "./card"
import {
  Table,
  TR,
  TH,
  TD,
  ProductName,
  ProductImg,
  Payment,
} from "./cartdisplay-styles"
import { CartTotal } from "../helpers/cart-total"

const cartTable = cart => {
  return (
    <>
      <Table>
        <tbody>
          <TR>
            <TH>Product</TH>
            <TH>Price</TH>
            <TH>Quantity</TH>
            <TH>Total</TH>
          </TR>
          {cart.map(item => (
            <TR key={item.id}>
              <TD>
                <ProductImg src={item.img} alt={item.name} />
                <ProductName>{item.name}</ProductName>
              </TD>
              <TD>
                <h4 className="price">{Dollar(item.price)}</h4>
              </TD>
              <TD>
                <strong>{item.quantity}</strong>
              </TD>
              <TD>{Dollar(item.quantity * item.price)}</TD>
            </TR>
          ))}
        </tbody>
      </Table>

      <Payment>
        <Card />
        <div className="total">
          <div className="caption">
            <p>
              <strong>Subtotal:</strong>
            </p>
            <p>Shipping:</p>
            <p className="golden">Total:</p>
          </div>
          <div className="num">
            <p>
              <strong>{Dollar(CartTotal(cart))}</strong>
            </p>
            <p>Free Shipping</p>
            <p className="golden">{Dollar(CartTotal(cart))}</p>
          </div>
        </div>
      </Payment>
    </>
  )
}

const cartEmpty = () => {
  return (
    <section className="center">
      <p>Your cart is empty, fill it up!</p>
      <button className="pay-with-stripe">
        <Link style={{ color: "white" }} to="/">
          Back Home
        </Link>
      </button>
    </section>
  )
}

const CartDisplay = () => {
  const [cart, updateCart] = useLocalStorage("cart", [])
  return <>{cart.length > 0 ? cartTable(cart) : cartEmpty()}</>
}

export default CartDisplay
