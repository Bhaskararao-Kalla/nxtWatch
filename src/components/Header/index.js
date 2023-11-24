import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'

import Popup from 'reactjs-popup'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  NavLink,
  WebLogo,
  HeaderOptionsContainer,
  ThemeModeButton,
  ProfileImage,
  MenuIconButton,
  NavContainer,
  PopupCloseIcon,
  NavMenuItems,
  NavItem,
  NavOptionName,
  LogoutButton,
  LogoutPopup,
  LogoutText,
  PopupOptionsContainer,
  CancelButton,
  ConfirmButton,
  LogoutIconButton,
} from './styledComponent'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, toggleThemeMode, activeTab, changeTab} = value
      const themeColor = isDarkMode ? '#000000' : '#ffffff'
      const textColor = isDarkMode ? '#ffffff' : '#000000'
      const popUpBg = isDarkMode ? '#000000' : '#ffffff'

      const logoUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onToggleThemeMode = () => {
        toggleThemeMode()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickNavItem = e => {
        changeTab(e.target.value)
      }

      const activeTabBg = isDarkMode ? '#424242' : '#e2e8f0'

      return (
        <HeaderContainer bgColor={themeColor}>
          <NavLink to="/">
            <WebLogo src={logoUrl} alt="website logo" />
          </NavLink>
          <HeaderOptionsContainer>
            <ThemeModeButton onClick={onToggleThemeMode} data-testid="theme">
              {isDarkMode ? (
                <BsBrightnessHigh color={textColor} size={26} />
              ) : (
                <BsMoon color={textColor} size={26} />
              )}
            </ThemeModeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup modal trigger={<MenuIconButton color={textColor} />}>
              {close => (
                <NavContainer bgColor={themeColor}>
                  <PopupCloseIcon onClick={() => close()} color={textColor} />
                  <NavMenuItems bgColor={themeColor}>
                    <NavLink to="/">
                      <NavItem
                        key="Home"
                        value="Home"
                        onClick={onClickNavItem}
                        bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                      >
                        <AiFillHome
                          color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                        />
                        <NavOptionName
                          bold={activeTab === 'Home' ? 'bold' : 400}
                          color={textColor}
                        >
                          Home
                        </NavOptionName>
                      </NavItem>
                    </NavLink>
                    <NavLink to="/trending">
                      <NavItem
                        key="Trending"
                        value="Trending"
                        onClick={onClickNavItem}
                        bgColor={
                          activeTab === 'Trending' ? activeTabBg : 'none'
                        }
                      >
                        <HiFire
                          color={
                            activeTab === 'Trending' ? '#ff0b37' : '#909090'
                          }
                        />
                        <NavOptionName
                          bold={activeTab === 'Trending' ? 'bold' : 400}
                          color={textColor}
                        >
                          Trending
                        </NavOptionName>
                      </NavItem>
                    </NavLink>
                    <NavLink to="/gaming">
                      <NavItem
                        key="Gaming"
                        value="Gaming"
                        onClick={onClickNavItem}
                        bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                      >
                        <SiYoutubegaming
                          color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                        />
                        <NavOptionName
                          bold={activeTab === 'Gaming' ? 'bold' : 400}
                          color={textColor}
                        >
                          Gaming
                        </NavOptionName>
                      </NavItem>
                    </NavLink>
                    <NavLink to="/saved-videos">
                      <NavItem
                        key="Saved Videos"
                        value="Saved Videos"
                        onClick={onClickNavItem}
                        bgColor={
                          activeTab === 'Saved Videos' ? activeTabBg : 'none'
                        }
                      >
                        <BiListPlus
                          color={
                            activeTab === 'Saved Videos' ? '#ff0b37' : '#909090'
                          }
                        />
                        <NavOptionName
                          bold={activeTab === 'Saved Videos' ? 'bold' : 400}
                          color={textColor}
                        >
                          Saved Videos
                        </NavOptionName>
                      </NavItem>
                    </NavLink>
                  </NavMenuItems>
                </NavContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton>
                  <FiLogOut size={30} color={textColor} />
                </LogoutIconButton>
              }
              overlayStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
              }}
            >
              {close => (
                <LogoutPopup bgColor={popUpBg}>
                  <LogoutText color={textColor}>
                    Are you sure, you want to logout?
                  </LogoutText>
                  <PopupOptionsContainer>
                    <CancelButton onClick={() => close()}>Cancel</CancelButton>
                    <ConfirmButton onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </PopupOptionsContainer>
                </LogoutPopup>
              )}
            </Popup>
            <Popup
              trigger={<LogoutButton>Logout</LogoutButton>}
              modal
              overlayStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
              }}
            >
              {close => (
                <LogoutPopup bgColor={popUpBg}>
                  <LogoutText color={textColor}>
                    Are you sure, you want to logout?
                  </LogoutText>
                  <PopupOptionsContainer>
                    <CancelButton onClick={() => close()}>Cancel</CancelButton>
                    <ConfirmButton onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </PopupOptionsContainer>
                </LogoutPopup>
              )}
            </Popup>
          </HeaderOptionsContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
