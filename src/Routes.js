import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Main, Packages, LiveStreaming, ContactUs, About } from './Pages'

const Routes = () => {
  return (
    <Switch>
      <Route path='/about-us' component={About} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/live-streaming-packages' component={LiveStreaming} />
      <Route path='/packages' component={Packages} />
      <Route exact path='/' component={Main} />
    </Switch>
  )
}

export default Routes
