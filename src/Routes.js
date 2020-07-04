import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Main, Audio, Video, LiveStreaming, ContactUs } from './Pages'

const Routes = () => {
	return (
		<Switch>
			<Route path="/contact-us" component={ContactUs} />
			<Route path="/live-streaming-packages" component={LiveStreaming} />
			<Route path="/video-packages" component={Video} />
			<Route path="/audio-packages" component={Audio} />
			<Route path="/audio-packages" component={Audio} />
			<Route exact path="/" component={Main} />
		</Switch>
	)
}

export default Routes
