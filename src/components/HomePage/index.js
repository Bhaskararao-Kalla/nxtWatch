import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import TabOptionsContainer from '../TabOptionsContainer'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomePageBgContainer,
  HomePageContainer,
  HomePageContentContainer,
  BannerContainer,
  BannerCrassButton,
  BannerCloseIcon,
  //   BannerContent,
  BannerLogo,
  BannerDescription,
  GetNowButton,
  HomeVideosContainer,
  SearchBox,
  Search,
  SearchButton,
  SearchIcon,
  LoaderContainer,
  NoVideosContainer,
  NoVideosImage,
  Heading,
  Description,
  RetryButton,
  VideosULContainer,
} from './styledComponent'

// let savedVideos

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
  emptyResult: 'EMPTYRESULT',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const jsonData = await response.json()
      //   console.log(jsonData)

      if (jsonData.total > 0) {
        const updatedData = jsonData.videos.map(eachVideo => ({
          id: eachVideo.id,
          channelName: eachVideo.channel.name,
          channelProfileImageUrl: eachVideo.channel.profile_image_url,
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
        this.setState({apiStatus: apiStatusConstants.emptyResult})
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickEnterKeyButton = event => {
    // console.log(event)
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  onClickSearchIcon = () => {
    this.getVideos()
  }

  onClickCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onClickRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderEmptyView = () => (
    <NxtWatchContext>
      {value => {
        const {isDarkMode} = value

        const bgColor = isDarkMode ? '#000000' : '#ffffff'
        const textColor = isDarkMode ? '#ffffff' : '#000000'
        console.log('EmptyView')

        return (
          <NoVideosContainer bgColor={bgColor}>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading color={textColor}>No Search results found</Heading>
            <Description color={textColor}>
              Try different key words or remove search filter
            </Description>
            <RetryButton onClick={this.onRetry}>Retry</RetryButton>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext>
  )

  renderVideosView = () => {
    const {videosList} = this.state

    return (
      <VideosULContainer>
        {videosList.map(each => (
          <VideoItem key={each.id} videoDetails={each} />
        ))}
      </VideosULContainer>
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
      case apiStatusConstants.emptyResult:
        return this.renderEmptyView()
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, searchInput} = this.state

    return (
      <NxtWatchContext>
        {value => {
          const {isDarkMode} = value
          const bgColor = isDarkMode ? '#181818' : '#f9f9f9'
          const textColor = isDarkMode ? '#ffffff' : '#000000'

          return (
            <HomePageBgContainer>
              <Header />
              <HomePageContainer>
                <TabOptionsContainer />
                <HomePageContentContainer>
                  <BannerContainer
                    // bgImage="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                    bannerDisplay={bannerDisplay}
                    data-testid="banner"
                  >
                    <BannerCrassButton
                      type="button"
                      onClick={this.onClickCloseBanner}
                      data-testid="close"
                    >
                      <BannerCloseIcon />
                    </BannerCrassButton>
                    {/* <BannerContent> */}
                    <BannerLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerDescription>Buy Nxt Watch Premium</BannerDescription>
                    <GetNowButton>GET IT NOW</GetNowButton>
                    {/* </BannerContent> */}
                  </BannerContainer>
                  <HomeVideosContainer data-testid="home" bgColor={bgColor}>
                    <SearchBox>
                      <Search
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeInput}
                        onKeyDown={this.onClickEnterKeyButton}
                        value={searchInput}
                        color={textColor}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.getVideos}
                      >
                        <SearchIcon color={textColor} />
                      </SearchButton>
                    </SearchBox>
                    {this.renderApiStatus()}
                  </HomeVideosContainer>
                </HomePageContentContainer>
              </HomePageContainer>
            </HomePageBgContainer>
          )
        }}
      </NxtWatchContext>
    )
  }
}

export default Home
