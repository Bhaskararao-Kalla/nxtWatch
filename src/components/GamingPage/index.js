import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import TabOptionsContainer from '../TabOptionsContainer'
import FailureView from '../FailureView'
import GamingCard from '../GamingCard'
import Loader from '../LoaderView'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingPageBgContainer,
  GamingPageContainer,
  GamingVideosSection,
  GamingNameContainer,
  GamingIconBg,
  GamingName,
  GamingVideosList,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class GamingPage extends Component {
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
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

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
      <GamingVideosList>
        {videosList.map(each => (
          <GamingCard videoDetails={each} />
        ))}
      </GamingVideosList>
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
          const bgColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkMode ? '#ffffff' : '#000000'
          const iconBg = isDarkMode ? '#000000' : '#ffffff'

          return (
            <GamingPageBgContainer>
              <Header />
              <GamingPageContainer>
                <TabOptionsContainer />
                <GamingVideosSection bgColor={bgColor} data-testid="gaming">
                  <GamingNameContainer bgColor={pageNameBg}>
                    <GamingIconBg bgColor={iconBg}>
                      <HiFire color="red" size={30} />
                    </GamingIconBg>
                    <GamingName color={textColor}>Saved Videos</GamingName>
                  </GamingNameContainer>
                  {this.renderApiStatus()}
                </GamingVideosSection>
              </GamingPageContainer>
            </GamingPageBgContainer>
          )
        }}
      </NxtWatchContext>
    )
  }
}

export default GamingPage
