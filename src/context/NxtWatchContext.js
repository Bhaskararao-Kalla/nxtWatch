import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  savedVideosList: [],
  toggleThemeMode: () => {},
  addOrRemoveSavedVideos: () => {},
  activeTab: 'Home',
  changeTab: () => {},
})

export default NxtWatchContext
