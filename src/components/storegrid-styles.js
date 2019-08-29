import styled from "styled-components"
import { TransitionGroup } from "react-transition-group"

export const StyledGroup = styled(TransitionGroup)`
  height: 100%;
  width: 100% !important;
`

export const Item = styled.div`
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
`

export const Aside = styled.aside`
  height: 100%;
  width: 100%;
`
