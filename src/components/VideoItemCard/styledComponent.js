import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const LiItemCard = styled.li`
  display: flex;
  flex-direction: column;
  height: 300px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 200px;
  }
`
export const CardImage = styled.img`
  height: 150px;
  width: 100%;

  @media (min-width: 769px) {
    height: 200px;
    width: 30%;
  }
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`

export const Title = styled.p`
  font: 500 16px 'Roboto';
  color: ${props => props.color};
  margin: 0px;
`

export const ChannelName = styled.p`
  font: 400 14px 'Roboto';
  color: #94a3b8;
`

export const ViewsAndDate = styled.p`
  font: 400 16px 'Roboto';
  color: #94a3b8;
  margin: 0px;
`
export const Dot = styled.span`
  font: 400 16px 'Roboto';
  color: #94a3b8;
`
