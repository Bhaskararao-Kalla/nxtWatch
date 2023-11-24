import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

export const HeaderContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  //   justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 12%;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const WebLogo = styled.img`
  height: 40px;
  width: 126px;
  cursor: pointer;
`

export const HeaderOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  align-items: center;
  height: 100%;
`

export const TransButton = styled.button`
  height: 44px;
  width: 44px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const ThemeModeButton = styled(TransButton)`
  outline: none;
  margin-right: 10px;
  padding: none;
`

export const MenuIconButton = styled(GiHamburgerMenu)`
  color: ${props => props.textColor};
  cursor: 'pointer';
  margin-right: 15px;
  font-size: 26px;
  @media (min-width: 769px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 26px;
  width: 26px;
  cursor: pointer;
  margin-right: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  margin-top: 0px;
`

export const PopupCloseIcon = styled(AiOutlineClose)`
  color: ${props => props.color};
  font-size: 26px;
  cursor: pointer;
  align-self: flex-end;
  margin: 20px;
`
export const NavMenuItems = styled.ul`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`

export const NavItem = styled.li`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const NavOptionName = styled.p`
  font: ${props => `${props.bold} 18px Roboto`};
  color: ${props => props.color};
`

export const LogoutIconButton = styled.button`
  height: 44px;
  width: 44px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  @media (min-width: 769px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid #3b82f6;
  border-radius: 3px;
  color: #3b82f6;
  outline: none;
  cursor: pointer;
  height: 36px;
  width: 120px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoutPopup = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  max-width: 90%;
  height: 250px;
  border-radius: 5px;
`

export const LogoutText = styled.p`
  font: 400 16px 'Roboto';
  color: ${props => props.color};
`
export const PopupOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;

  gap: 10px;
`

export const CancelButton = styled.button`
  outline: none;
  padding: 5px;
  background-color: transparent;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  outline: none;
  cursor: pointer;
  height: 36px;
  border-radius: 4px;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 5px;
  border: 2px solid #3b82f6;
  outline: none;
  cursor: pointer;
  height: 36px;
  border-radius: 4px;
`
