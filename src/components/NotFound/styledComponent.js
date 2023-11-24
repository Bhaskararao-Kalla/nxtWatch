import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const NotFoundContainer = styled.div`
  display: flex;
  height: 88%;
`

export const NotFoundSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: ${props => props.bgColor};

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const NotFoundImage = styled.img`
  height: 150px;
  width: 150px;
  background-size: cover;
`

export const NotFoundHeading = styled.h1`
  font: bold 22px 'Roboto';
  color: ${props => props.textColor};
`

export const NotFoundDescription = styled.p`
  font: 400 16px 'Roboto';
  //   color: ${props => props.textColor};
  color: #64748b;
  text-align: center;
`
