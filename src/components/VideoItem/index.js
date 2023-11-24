import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

// console.log(formatDistanceToNow(new Date(2021, 8, 20)))

import {
  NavLink,
  VideoItemContainer,
  CardImage,
  DescriptionContainer,
  ChannelLogo,
  ChannelDetails,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponent'

// let savedVideos;

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    channelName,
    channelProfileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewsCount,
  } = videoDetails

  const getDate = () => {
    const date = new Date(publishedAt)
    const distanceTime = formatDistanceToNow(
      new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()),
    )
    return distanceTime
  }

  return (
    <NxtWatchContext>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#ffffff' : '#000000'
        return (
          <NavLink to={`/videos/${id}`}>
            <VideoItemContainer>
              <CardImage src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <ChannelLogo src={channelProfileImageUrl} alt="channel logo" />
                <ChannelDetails>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName>{channelName}</ChannelName>

                  <ViewsAndDate>
                    {viewsCount} views <Dot> &#8226;</Dot> {getDate()}
                  </ViewsAndDate>
                </ChannelDetails>
              </DescriptionContainer>
            </VideoItemContainer>
          </NavLink>
        )
      }}
    </NxtWatchContext>
  )
}

export default VideoItem
