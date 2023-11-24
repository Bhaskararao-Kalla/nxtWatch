import {Component} from 'react'
// import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import TabOptionsContainer from '../TabOptionsContainer'
import FailureView from '../FailureView'
import LoaderView from '../LoaderView'

import {
  VideoItemBgContainer,
  VideoItemContainer,
  VideoDetailsBgContainer,
  TitleName,
  FunctionalityContainer,
  ViewsAndDate,
  Dot,
  LikeButton,
  DislikeButton,
  SaveButton,
  Hr,
  DescriptionContainer,
  ChannelLogo,
  ChannelInformation,
  ChannelName,
  SubscriberCount,
  Description,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

// let savedVideos

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    // console.log(options)

    if (response.ok) {
      const jsonData = await response.json()
      const updatedData = {
        id: jsonData.video_details.id,
        channelName: jsonData.video_details.channel.name,
        description: jsonData.video_details.description,
        ProfileImageUrl: jsonData.video_details.channel.profile_image_url,
        channelSubscriberCount: jsonData.video_details.channel.subscriber_count,
        publishedAt: jsonData.video_details.published_at,
        thumbnailUrl: jsonData.video_details.thumbnail_url,
        title: jsonData.video_details.title,
        viewsCount: jsonData.video_details.view_count,
        videoUrl: jsonData.video_details.video_url,
      }

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLikeButton = () => {
    this.setState(prevData => ({
      isLiked: !prevData.isLiked,
      isDisLiked: false,
    }))
  }

  onClickDisLikeButton = () => {
    this.setState(prevData => ({
      isLiked: false,
      isDisLiked: !prevData.isDisLiked,
    }))
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  renderSuccessView = () => {
    const {isLiked, isDisLiked, videoDetails} = this.state

    const {
      id,
      channelName,
      description,
      channelSubscriberCount,
      publishedAt,
      thumbnailUrl,
      title,
      viewsCount,
      videoUrl,
    } = videoDetails

    return (
      <NxtWatchContext>
        {value => {
          const {addOrRemoveSavedVideos, savedVideosList, isDarkMode} = value

          const videoIndex = savedVideosList.findIndex(each => each.id === id)

          let isSaved

          if (videoIndex === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const saveButtonText = isSaved ? 'Saved' : 'Save'

          const likeIconColor = isLiked ? '#2563eb' : '#64748b'
          const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'
          const savedContColor = isSaved ? '#4f46e5' : '#64748b'
          const textColor = isDarkMode ? '#ffffff' : '#000000'
          const bgColor = isDarkMode ? '#181818' : '#f9f9f9'

          const onClickSavedIcon = () => {
            addOrRemoveSavedVideos(videoDetails)
          }

          console.log(videoDetails)

          return (
            <VideoDetailsBgContainer bgColor={bgColor}>
              <ReactPlayer url={videoUrl} controls width="100%" height="70%" />
              <TitleName color={textColor}>{title}</TitleName>
              <FunctionalityContainer>
                <ViewsAndDate>
                  {viewsCount} views <Dot> &#8226;</Dot> {publishedAt}
                </ViewsAndDate>
                <LikeButton
                  onClick={this.onClickLikeButton}
                  color={likeIconColor}
                  isLiked={isLiked}
                >
                  <BiLike /> Like
                </LikeButton>
                <DislikeButton
                  onClick={this.onClickDisLikeButton}
                  color={dislikeIconColor}
                  isDisLiked={isDisLiked}
                >
                  <BiDislike /> Dislike
                </DislikeButton>
                <SaveButton
                  onClick={onClickSavedIcon}
                  isSaved={isSaved}
                  color={savedContColor}
                >
                  <BiListPlus /> {saveButtonText}
                </SaveButton>
              </FunctionalityContainer>
              <Hr />
              <DescriptionContainer>
                <ChannelLogo src={thumbnailUrl} />
                <ChannelInformation>
                  <ChannelName color={textColor}>{channelName}</ChannelName>
                  <SubscriberCount>{channelSubscriberCount}</SubscriberCount>
                  <Description color={textColor}>{description}</Description>
                </ChannelInformation>
              </DescriptionContainer>
            </VideoDetailsBgContainer>
          )
        }}
      </NxtWatchContext>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return (
          <>
            <FailureView onClickRetry={this.onClickRetry} />
          </>
        )
      case apiStatusConstants.inProgress:
        return (
          <>
            <LoaderView />
          </>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <VideoItemBgContainer>
        <Header />
        <VideoItemContainer>
          <TabOptionsContainer />
          {this.renderApiStatus()}
        </VideoItemContainer>
      </VideoItemBgContainer>
    )
  }
}

export default VideoItemDetails
