import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { CometSpinLoader } from "react-css-loaders"
import CartSteps from "../components/cartsteps"
import CartDisplay from "../components/cartdisplay"
import { CartUIContext, CartUIProvider } from "../context/cartUI"
import SalesBoxes from "../components/salesboxes"

const Loading = styled.section`
  display: flex;
  justify-content: center;
`

const Success = styled.section`
  text-align: center;
`

const Cart = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <CartUIProvider>
        <CartSteps />
        <hr />
        <h1 className="center">Your Cart</h1>

        <CartUIContext.Consumer>
          {context => (context[0] === "idle" ? <CartDisplay /> : null)}
        </CartUIContext.Consumer>

        <CartUIContext.Consumer>
          {context =>
            context[0] === "loading" ? (
              <Loading>
                <CometSpinLoader />
              </Loading>
            ) : null
          }
        </CartUIContext.Consumer>

        <CartUIContext.Consumer>
          {context =>
            context[0] === "success" ? (
              <Success>
                <h2>Success!</h2>
                <p>
                  Thank you for your purchase. You'll be receiving your items in
                  4 business days.
                </p>
                <p>Forgot something?</p>
                <button className="pay-with-stripe">
                  <Link style={{ color: "white" }} to="/">
                    Back to Home
                  </Link>
                </button>
              </Success>
            ) : null
          }
        </CartUIContext.Consumer>

        <CartUIContext.Consumer>
          {context =>
            context[0] === "failure" ? (
              <section>
                <p>
                  Oops, something went wrong. Redirecting you to your cart to
                  try again.
                </p>
              </section>
            ) : null
          }
        </CartUIContext.Consumer>
      </CartUIProvider>
      <SalesBoxes />
    </Layout>
  )
}

export default Cart
