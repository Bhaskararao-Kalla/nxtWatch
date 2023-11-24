import styled from 'styled-components'

export const TrendingPageBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const TrendingPageContainer = styled.div`
  display: flex;
  height: 88%;
`

export const TrendingVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${props => props.bgColor};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TrendingNameContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  height: 20%;
  align-items: center;
`

export const TrendingIconBg = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

export const TrendingName = styled.h1`
  font: bold 24px 'Roboto';
  color: ${props => props.color};
`

export const TrendingVideosList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 79%;
  width: 100%;
  padding-left: 0px;
  list-style-type: none;
  padding: 20px;
  gap: 10px;
  margin-top: 0px;
`
