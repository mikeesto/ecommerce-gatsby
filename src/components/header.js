import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Head, Nav, CartTotal } from "./header-styles"

const Header = ({ siteTitle }) => (
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
          <Link to="/">Men</Link>
        </li>
        <li>
          <CartTotal>1 {/* TO DO: Make the card number dynamic */}</CartTotal>
          <Link to="/">Cart</Link>
        </li>
      </ul>
    </Nav>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
