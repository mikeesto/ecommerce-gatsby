const React = require("react")
const { CartProvider } = require("./src/context/cart")

exports.wrapRootElement = ({ element }) => {
  return <CartProvider>{element}</CartProvider>
}
