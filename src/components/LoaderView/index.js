import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'

import {LoaderContainer} from './styledComponent'

const LoaderView = () => (
  <NxtWatchContext>
    {value => {
      const {isDarkMode} = value

      const bgColor = isDarkMode ? '#181818' : '#f9f9f9'
      return (
        <LoaderContainer bgColor={bgColor} data-testid="loader">
          <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
        </LoaderContainer>
      )
    }}
  </NxtWatchContext>
)

export default LoaderView
