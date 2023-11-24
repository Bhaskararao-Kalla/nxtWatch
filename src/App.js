import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import TrendingPage from './components/TrendingPage'
import GamingPage from './components/GamingPage'
import SavedVideos from './components/SavedVideos'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedVideosList: [],
    isDarkMode: false,
    activeTab: 'Home',
  }

  changeTab = activeTab => {
    this.setState({activeTab})
  }

  toggleThemeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  addOrRemoveSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const index = savedVideosList.findIndex(each => each.id === videoDetails.id)

    if (index === -1) {
      this.setState({savedVideosList: [...savedVideosList, videoDetails]})
    } else {
      const filteredSavedVideos = savedVideosList.filter(
        each => each.id !== videoDetails.id,
      )

      this.setState({savedVideosList: filteredSavedVideos})
    }
  }

  render() {
    const {isDarkMode, activeTab, savedVideosList} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          savedVideosList,
          isDarkMode,
          activeTab,
          toggleThemeMode: this.toggleThemeMode,
          changeTab: this.changeTab,
          addOrRemoveSavedVideos: this.addOrRemoveSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute exact path="/trending" component={TrendingPage} />
          <ProtectedRoute exact path="/gaming" component={GamingPage} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
