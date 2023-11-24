import {BsBookmarkPlus} from 'react-icons/bs'

import NxtWatchContext from '../../context/NxtWatchContext'
import TabOptionsContainer from '../TabOptionsContainer'
import Header from '../Header'
import VideoItemCard from '../VideoItemCard'

import {
  SavedVideosBgContainer,
  SavedVideosContainer,
  SavedVideosSection,
  PageNameContainer,
  IconBg,
  PageName,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoSavedVideosDesc,
  SavedVideosList,
} from './styledComponent'

const SavedVideos = () => (
  <NxtWatchContext>
    {value => {
      const {isDarkMode, savedVideosList} = value

      const pageNameBg = isDarkMode ? '#212121' : ' #ebebeb'
      const textColor = isDarkMode ? '#ffffff' : '#000000'
      const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
      const iconBg = isDarkMode ? '#000000' : '#ffffff'

      return (
        <SavedVideosBgContainer>
          <Header />
          <SavedVideosContainer>
            <TabOptionsContainer />
            {savedVideosList.length === 0 ? (
              <NoVideosContainer bgColor={bgColor}>
                <NoVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="No Saved Videos"
                  color={textColor}
                />
                <NoVideosHeading color={textColor}>
                  No saved videos found
                </NoVideosHeading>
                <NoSavedVideosDesc>
                  You can save your videos while watching them
                </NoSavedVideosDesc>
              </NoVideosContainer>
            ) : (
              <SavedVideosSection bgColor={bgColor}>
                <PageNameContainer bgColor={pageNameBg}>
                  <IconBg bgColor={iconBg}>
                    <BsBookmarkPlus color="red" size={30} />
                  </IconBg>
                  <PageName color={textColor}>Saved Videos</PageName>
                </PageNameContainer>
                <SavedVideosList>
                  {savedVideosList.map(each => (
                    <VideoItemCard videoDetails={each} />
                  ))}
                </SavedVideosList>
              </SavedVideosSection>
            )}
          </SavedVideosContainer>
        </SavedVideosBgContainer>
      )
    }}
  </NxtWatchContext>
)

export default SavedVideos
