import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { useLocalStorage } from "react-use-storage"
import { Head, Nav, CartTotal } from "./header-styles"

const Header = ({ siteTitle }) => {
  const [cart, updateCart] = useLocalStorage("cart", [])
  const [cartCount, updateCartCount] = useState(0)

  useEffect(() => {
    updateCartCount(cart.reduce((acc, next) => acc + next.quantity, 0))
  }, [cart])

  return (
    <Head>
      <h1>{siteTitle}</h1>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all">All</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            {cart.length > 0 ? <CartTotal>{cartCount}</CartTotal> : null}
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </Nav>
    </Head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
