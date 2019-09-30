import React from "react"
import { injectStripe, CardElement } from "react-stripe-elements"
import styled from "styled-components"

const CardElementStyled = styled(CardElement)`
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 16px;
`

const CardSection = ({ updateComplete }) => {
  return (
    <CardElementStyled
      onChange={event => updateComplete(event.complete)}
      style={{ base: { fontSize: "16px" } }}
    />
  )
}

const Checkout = ({ updateComplete }) => {
  return <CardSection updateComplete={updateComplete} />
}

// HOC pattern is required for this...
export default injectStripe(Checkout)
