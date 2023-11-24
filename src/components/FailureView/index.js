import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FailureContainer,
  FailureImage,
  Heading,
  Description,
  RetryButton,
} from './styledComponent'

const FailureView = props => {
  const {onClickRetry} = props

  const onClickRetryButton = () => {
    onClickRetry()
  }

  return (
    <NxtWatchContext>
      {value => {
        const {isDarkMode} = value

        const bgColor = isDarkMode ? '#181818' : '#f9f9f9'
        const textColor = isDarkMode ? '#ffffff' : '#000000'

        return (
          <FailureContainer bgColor={bgColor}>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <Heading color={textColor}>Oops! Something Went Wrong</Heading>
            <Description>
              We are having some trouble to complete your request. Please try
              again.
            </Description>
            <RetryButton onClick={onClickRetryButton} type="button">
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext>
  )
}

export default FailureView
