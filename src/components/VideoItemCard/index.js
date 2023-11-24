import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavLink,
  LiItemCard,
  CardImage,
  ChannelDetailsContainer,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponent'

const VideoItemCard = props => {
  const {videoDetails} = props
  console.log(videoDetails)

  const {
    id,
    channelName,
    publishedAt,
    thumbnailUrl,
    title,
    viewsCount,
  } = videoDetails

  return (
    <NxtWatchContext>
      {value => {
        const {isDarkMode} = value
        const textColor = isDarkMode ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`/videos/${id}`}>
            <LiItemCard>
              <CardImage alt="video thumbnail" src={thumbnailUrl} />
              <ChannelDetailsContainer>
                <Title color={textColor}>{title}</Title>
                <ChannelName>{channelName}</ChannelName>

                <ViewsAndDate>
                  {viewsCount} views <Dot> &#8226;</Dot>
                  {publishedAt}
                </ViewsAndDate>
              </ChannelDetailsContainer>
            </LiItemCard>
          </NavLink>
        )
      }}
    </NxtWatchContext>
  )
}

export default VideoItemCard
