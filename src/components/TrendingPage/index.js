import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import TabOptionsContainer from '../TabOptionsContainer'
import FailureView from '../FailureView'
import VideoItemCard from '../VideoItemCard'
import Loader from '../LoaderView'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingPageBgContainer,
  TrendingPageContainer,
  TrendingVideosSection,
  TrendingNameContainer,
  TrendingIconBg,
  TrendingName,
  TrendingVideosList,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class TrendingPage extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const jsonData = await response.json()
      //   console.log(jsonData)

      const updatedData = jsonData.videos.map(eachVideo => ({
        id: eachVideo.id,
        channelName: eachVideo.channel.name,
        ProfileImageUrl: eachVideo.channel.profile_image_url,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewsCount: eachVideo.view_count,
      }))

      // console.log(updatedData)

      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderLoaderView = () => <Loader />

  renderVideosView = () => {
    const {videosList} = this.state

    return (
      <TrendingVideosList>
        {videosList.map(each => (
          <VideoItemCard videoDetails={each} />
        ))}
      </TrendingVideosList>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    // console.log(apiStatus)

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext>
        {value => {
          const {isDarkMode} = value

          const pageNameBg = isDarkMode ? '#212121' : ' #ebebeb'
          const bgColor = isDarkMode ? '#181818' : '#f9f9f9'
          const textColor = isDarkMode ? '#ffffff' : '#000000'
          const iconBg = isDarkMode ? '#000000' : '#ffffff'

          return (
            <TrendingPageBgContainer>
              <Header />
              <TrendingPageContainer>
                <TabOptionsContainer />
                <TrendingVideosSection bgColor={bgColor}>
                  <TrendingNameContainer bgColor={pageNameBg}>
                    <TrendingIconBg bgColor={iconBg}>
                      <HiFire color="red" size={30} />
                    </TrendingIconBg>
                    <TrendingName color={textColor}>Saved Videos</TrendingName>
                  </TrendingNameContainer>
                  {this.renderApiStatus()}
                </TrendingVideosSection>
              </TrendingPageContainer>
            </TrendingPageBgContainer>
          )
        }}
      </NxtWatchContext>
    )
  }
}

export default TrendingPage
