import styled from "styled-components"

export const ItemContain = styled.section`
  margin-left: 8%;
  width: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 650px) {
    margin-left: 0 !important;
    width: 95% !important;
  }
`

export const QuantityInput = styled.input`
  width: 60px;
  font-size: 25px;
  margin: 0 10px;
  padding: 5px 10px;
`

export const UpdateNumButton = styled.button`
  background: black;
  border-color: black;
  color: white;
  font-size: 20px;
  width: 45px;
`

export const Review = styled.div`
  @media screen and (max-width: 650px) {
    width: 90%;
    margin-left: 4%;
  }
`
