import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  width: 100%;
  padding: 20px;
  background-color: ${props => props.bgColor};
`

export const FailureImage = styled.img`
  height: 150px;
  width: 150px;
  background-size: cover;
`

export const Heading = styled.h1`
  font: bold 22px 'Roboto';
  color: ${props => props.color};
`

export const Description = styled.p`
  font: 400 16px 'Roboto';
  color: #616e7c;
  text-align: center;
`

export const RetryButton = styled.button`
  height: 36px;
  width: 120px;
  margin-top: 10px;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
