import styled from 'styled-components'

export const VideoItemBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const VideoItemContainer = styled.div`
  display: flex;
  height: 88%;
`

export const VideoDetailsBgContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${props => props.bgColor};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TitleName = styled.h1`
  color: ${props => props.color};
  font: 500 16px 'Roboto';
`

export const FunctionalityContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ViewsAndDate = styled.p`
  width: 30%;
  font: 500 14px 'Roboto';
  color: #475569;
`
export const Dot = styled.span`
  size: 14px;
`

export const LikeButton = styled.button`
  margin-left: auto;
  height: 18px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: ${props => (props.isLiked ? 'bold' : 'normal')};
`

export const DislikeButton = styled.button`
  height: 18px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: ${props => (props.isDisLiked ? 'bold' : 'normal')};
`

export const SaveButton = styled.button`
  height: 18px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: ${props => (props.isSaved ? 'bold' : 'normal')};
`

export const Hr = styled.hr`
  height: 1px;
  width: 100%;
  background-color: #475569;
`
export const DescriptionContainer = styled.div`
  display: flex;
`

export const ChannelLogo = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin-right: 15px;
`
export const ChannelInformation = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  font: 500 16px 'Roboto';
  color: ${props => props.color};
  margin: 0px;
`

export const SubscriberCount = styled.p`
  font: 400 14px 'Roboto';
  color: #475569;
`

export const Description = styled.p`
  font: 400 14px 'Roboto';
  color: ${props => props.color};
  margin: 0px;
`
