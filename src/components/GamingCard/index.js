import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavLink,
  LiItemCardContainer,
  CardImage,
  Title,
  ViewsAndDate,
} from './styledComponent'

const GamingCard = props => {
  const {videoDetails} = props
  console.log(videoDetails)

  const {id, thumbnailUrl, title, viewsCount} = videoDetails

  return (
    <NxtWatchContext>
      {value => {
        const {isDarkMode} = value
        const textColor = isDarkMode ? '#f9f9f9' : '#181818'

        return (
          <NavLink to={`/videos/${id}`}>
            <LiItemCardContainer>
              <CardImage alt="video thumbnail" src={thumbnailUrl} />

              <Title color={textColor}>{title}</Title>
              <ViewsAndDate>{viewsCount} Watch World Wide</ViewsAndDate>
            </LiItemCardContainer>
          </NavLink>
        )
      }}
    </NxtWatchContext>
  )
}

export default GamingCard
