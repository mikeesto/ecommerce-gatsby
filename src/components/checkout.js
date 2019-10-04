import React from "react"
import { injectStripe, CardElement } from "react-stripe-elements"
import styled from "styled-components"
import axios from "axios"
import uuidv1 from "uuid/v1"
import { CartTotal } from "../helpers/cart-total"

const CardElementStyled = styled(CardElement)`
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 16px;
`

const CardSection = ({ updateComplete, handleSubmit, email, complete }) => {
  return (
    <>
      <CardElementStyled
        onChange={event => updateComplete(event.complete)}
        style={{ base: { fontSize: "16px" } }}
      />
      <button
        onClick={handleSubmit}
        className="pay-with-stripe button"
        disabled={!complete || !email}
      >
        Pay with credit card
      </button>
    </>
  )
}

class Checkout extends React.Component {
  handleSubmit = event => {
    event.preventDefault()

    this.props.stripe.createToken().then(async () => {
      try {
        await axios
          .post(
            "https://ecommerce-gatsby.netlify.com/.netlify/functions/index",
            {
              stripeEmail: this.props.email,
              stripeAmt: Math.floor(CartTotal(this.props.cart) * 100), // it expects the price in cents, as an integer
              stripeToken: "tok_visa", // testing token
              stripeIdempotency: uuidv1(), // use this library to create a unique id
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(res => {
            if (res.status === 200) {
              this.props.updateCartUI("success")
              setTimeout(() => this.props.updateCart([]), 3000)
            } else {
              this.props.updateCartUI("failure")
              // allow them to try again
              setTimeout(() => this.props.updateCartUI("idle"), 3000)
            }
            console.log(JSON.stringify(res, null, 2))
          })
      } catch (err) {
        console.log(err)
        this.props.updateCartUI("failure")
      }
    })
  }

  render() {
    return (
      <CardSection
        updateComplete={this.props.updateComplete}
        handleSubmit={this.handleSubmit}
        email={this.props.email}
        complete={this.props.complete}
      />
    )
  }
}

// HOC pattern is required for this...
export default injectStripe(Checkout)
