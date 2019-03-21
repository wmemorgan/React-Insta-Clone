import React from 'react'
// High Order Component to manage initial page display
import withAuthenticate from '../Authentication/withAuthenticate'
import Login from '../Login/Login'
import PostsPage from '../PostComponents/PostsPage'

import AppContainer from './AppContainer'

const App = () => {
  //Instantiate HOC
  const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)
  console.log('App render')
  return (
    <>
      <AppContainer>
        <ComponentFromWithAuthenticate />
      </AppContainer>
    </>
  )
}

export default App;
