import styled from 'styled-components'

import {MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'

export const HomePageBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
`

export const HomePageContainer = styled.div`
  display: flex;
  height: 88%;
`

export const HomePageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BannerContainer = styled.div`
  display: ${props => props.bannerDisplay};
  flex-direction: column;
  padding: 16px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const BannerCrassButton = styled.button`
  height: 24px;
  width: 24px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-left: auto;
  color: ${props => props.color};
`

export const BannerCloseIcon = styled(MdClose)`
  font-size: 18px;
  color: #181818;
`

export const BannerLogo = styled.img`
  height: 42px;
  width: 150px;
`

export const BannerDescription = styled.p`
  font: bold 16px 'Roboto';
  color: #383838;
`

export const GetNowButton = styled.button`
  height: 40px;
  width: 100px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #181818;
  color: #181818;
  font-family: 'roboto';
  font-weight: bold;
`

export const HomeVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  padding: 16px;
`
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 300px;
  height: 40px;
  border: 2px solid #616e7c;
  border-radius: 3px;
`

export const Search = styled.input`
  height: 100%;
  width: 80%;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0px 15px 0px 15px;
  font: 400 16px #616e7c;
  color: ${props => props.color};
`

export const SearchButton = styled.button`
  height: 100%;
  width: 20%;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  border-left: 2px solid #616e7c;
`

export const SearchIcon = styled(BsSearch)`
  color: #616e7c;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
export const NoVideosImage = styled.img`
  height: 200px;
  width: 250px;
`

export const Heading = styled.h1`
  font: bold 24px 'Roboto';
  color: ${props => props.color};
`
export const Description = styled.p`
  font: 400 16px 'Roboto';
  color: ${props => props.color};
`
export const RetryButton = styled.button`
  height: 32px;
  width: 120px;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
export const VideosULContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style-type: none;
  padding-left: 0px;
`
