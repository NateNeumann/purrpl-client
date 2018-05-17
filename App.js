// import React from 'react'
// // import MainTabBar from './navigation/main_tab_bar'
// import Home from './screens/Home'

// // disable really annoying in app warnings
// console.disableYellowBox = true

// const App = (props) => {
//   // return <MainTabBar />
//   return <Home />
// }


// export default App

import React from 'react'
// import { Stylesheet, Text, View } from 'react-native'
import Home from './screens/Home'

export default class App extends React.Component {
  render() {
    return (
      <Home />
    )
  }
}
