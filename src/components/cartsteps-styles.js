import styled from "styled-components"

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 0px;
  text-align: center;
  width: 80%;
  margin: 20px auto 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px) {
      grid-column-gap: 30px !important;
    }
  }
`

export const H2 = styled.h2`
  width: 80px;
  height: 80px;
  border-radius: 1000px;
  border: 1px solid #ccc;
  padding-top: 21px;
  color: #555;

  &.active {
    background: #d96528;
    border: 1px solid #d96528;
    color: white;
  }
`

export const H4 = styled.h4`
  margin-top: 20px;
  color: #555;
`
