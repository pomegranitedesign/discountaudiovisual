import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import './index.css'
import Layout from './Components/Layout'

render(
	<Router>
		<Layout>
			<Routes />
		</Layout>
	</Router>,
	document.getElementById('root')
)
