import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Layout from './Components/Layout'
import 'antd/dist/antd.min.css'
import './index.css'

render(
	<Router>
		<Layout>
			<Routes />
		</Layout>
	</Router>,
	document.getElementById('root')
)
