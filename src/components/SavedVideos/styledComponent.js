import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const SavedVideosContainer = styled.div`
  display: flex;
  height: 88%;
`

export const SavedVideosSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: ${props => props.bgColor};

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PageNameContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
  height: 20%;
  align-items: center;
`

export const IconBg = styled.div`
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

export const PageName = styled.h1`
  font: bold 24px 'Roboto';
  color: ${props => props.color};
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const NoVideosImage = styled.img`
  height: 200px;
  width: 250px;
  color: ${props => props.color};
  margin-bottom: 20px;
  @media (min-width: 769px) {
    width: 350px;
    height: 300px;
  }
`

export const NoVideosHeading = styled.h1`
  font: bold 21px 'Roboto';
  color: ${props => props.color};
`

export const NoSavedVideosDesc = styled.p`
  font: 400 16px 'Roboto';
  color: #616e7c;
`

export const SavedVideosList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 80%;
  width: 100%;
  padding-left: 0px;
  list-style-type: none;
  padding: 20px;
  gap: 10px;
  margin-top: 0px;
`
