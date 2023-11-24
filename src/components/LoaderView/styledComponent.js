import styled from 'styled-components'

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const name = styled.p`
  font: 400 16px 'Roboto';
  color: #000000;
`
