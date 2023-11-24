import styled from 'styled-components'

export const GamingPageBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const GamingPageContainer = styled.div`
  display: flex;
  height: 88%;
`

export const GamingVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${props => props.bgColor};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const GamingNameContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  height: 20%;
  align-items: center;
`

export const GamingIconBg = styled.div`
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

export const GamingName = styled.h1`
  font: bold 24px 'Roboto';
  color: ${props => props.color};
`

export const GamingVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 15px;
  list-style-type: none;
  padding-left: 0px;
  height: 78%;
  padding: 20px;
`
