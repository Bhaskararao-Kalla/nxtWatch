import Header from '../Header'
import TabOptionsContainer from '../TabOptionsContainer'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundBgContainer,
  NotFoundContainer,
  NotFoundSection,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponent'

const Notfound = () => (
  <NxtWatchContext>
    {value => {
      const {isDarkMode} = value

      const textColor = isDarkMode ? '#ffffff' : '#000000'
      const bgColor = isDarkMode ? '#181818' : '#f9f9f9'

      return (
        <NotFoundBgContainer>
          <Header />
          <NotFoundContainer>
            <TabOptionsContainer />
            <NotFoundSection bgColor={bgColor}>
              {isDarkMode ? (
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  alt="not found"
                />
              ) : (
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
              )}

              <NotFoundHeading textColor={textColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription textColor={textColor}>
                we are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundSection>
          </NotFoundContainer>
        </NotFoundBgContainer>
      )
    }}
  </NxtWatchContext>
)

export default Notfound
