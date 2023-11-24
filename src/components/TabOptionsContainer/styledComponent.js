import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20%;
  background-color: ${props => props.bgColor};
  padding: 0px 0px 20px 0px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const TabOptionsChooseContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const TabItem = styled.li`
  display: flex;
  align-items: center;
  height: 42px;
  width: 100%;
  padding-left: 20px;
  background-color: ${props => props.bgColor};
`
export const TabName = styled.p`
  font: ${props => `${props.bold} 21px Roboto`};
  color: ${props => props.color};
  margin-left: 10px;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
  margin-top: auto;
`

export const Heading = styled.h1`
  color: ${props => props.color};
  font: bold 24px 'Roboto';
`
export const SocialMedia = styled.div`
  display: flex;
  gap: 25px;
`
export const Image = styled.img`
  height: 30px;
  width: 30px;
`
export const Description = styled.p`
  font: 400 14px 'roboto';
  color: #909090;
`
