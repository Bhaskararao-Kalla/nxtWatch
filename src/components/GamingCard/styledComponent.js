import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
  flex: 1 1 180px;
`

export const LiItemCardContainer = styled.li`
  display: flex;
  flex-direction: column;
`
export const CardImage = styled.img`
  height: 200px;
  width: 100%;
`

export const Title = styled.p`
  font: 500 16px 'Roboto';
  color: ${props => props.color};
  margin-bottom: 0px;
`

export const ViewsAndDate = styled.p`
  font: 400 14px 'Roboto';
  color: #94a3b8;
`
