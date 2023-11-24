import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
  flex: 1 1 300px;
`

export const VideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  cursor: pointer;
`
export const CardImage = styled.img`
  width: 100%;
`

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 4px;
`

export const ChannelLogo = styled.img`
  height: 36px;
  width: 36px;
  background-size: cover;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`

export const Title = styled.h1`
  font: bold 12px 'Roboto';
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font: 400 12px 'Roboto';
  color: #909090;
`
export const ViewsAndDate = styled.div`
  font: 400 12px 'Roboto';
  color: #909090;
`
export const Dot = styled.span`
  font: 400 12px 'Roboto';
  color: #909090;
`
