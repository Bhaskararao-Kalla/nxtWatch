import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayList} from 'react-icons/cg'
import {AiFillHome} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TabsContainer,
  TabOptionsChooseContainer,
  NavLink,
  TabItem,
  TabName,
  ContactUsContainer,
  Heading,
  SocialMedia,
  Image,
  Description,
} from './styledComponent'

const TabOptionsContainer = () => (
  <NxtWatchContext>
    {value => {
      const {isDarkMode, activeTab, changeTab} = value

      const bgColor = isDarkMode ? '#000000' : '#ffffff'
      const textColor = isDarkMode ? '#ffffff' : '#000000'
      const activeTabBg = isDarkMode ? '#424242' : '#e2e8f0'

      const changeTabHome = () => {
        changeTab('Home')
      }

      const changeTabTrending = () => {
        changeTab('Trending')
      }

      const changeTabGaming = () => {
        changeTab('Gaming')
      }

      const changeTabSavedVideos = () => {
        changeTab('SavedVideos')
      }

      return (
        <TabsContainer bgColor={bgColor}>
          <TabOptionsChooseContainer>
            <NavLink to="/">
              <TabItem
                key="home"
                onClick={changeTabHome}
                bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
              >
                <AiFillHome
                  size={20}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
                <TabName
                  color={textColor}
                  bold={activeTab === 'Home' ? 'bold' : 'none'}
                >
                  Home
                </TabName>
              </TabItem>
            </NavLink>
            <NavLink to="/trending">
              <TabItem
                key="trending"
                onClick={changeTabTrending}
                bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
              >
                <HiFire
                  size={20}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
                <TabName
                  color={textColor}
                  bold={activeTab === 'Trending' ? 'bold' : 'none'}
                >
                  Trending
                </TabName>
              </TabItem>
            </NavLink>
            <NavLink to="/gaming">
              <TabItem
                key="gaming"
                onClick={changeTabGaming}
                bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
              >
                <SiYoutubegaming
                  size={20}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
                <TabName
                  color={textColor}
                  bold={activeTab === 'Gaming' ? 'bold' : 'none'}
                >
                  Gaming
                </TabName>
              </TabItem>
            </NavLink>
            <NavLink to="/saved-videos">
              <TabItem
                key="savedVideos"
                onClick={changeTabSavedVideos}
                bgColor={activeTab === 'SavedVideos' ? activeTabBg : 'none'}
              >
                <CgPlayList
                  size={20}
                  color={activeTab === 'SavedVideos' ? '#ff0b37' : '#909090'}
                />
                <TabName
                  color={textColor}
                  bold={activeTab === 'SavedVideos' ? 'bold' : 'none'}
                >
                  Saved videos
                </TabName>
              </TabItem>
            </NavLink>
          </TabOptionsChooseContainer>

          <ContactUsContainer>
            <Heading color={textColor}>CONTACT US</Heading>
            <SocialMedia>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />

              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />

              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMedia>
            <Description color={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </ContactUsContainer>
        </TabsContainer>
      )
    }}
  </NxtWatchContext>
)

export default TabOptionsContainer
