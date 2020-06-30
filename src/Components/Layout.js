import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { StickyContainer } from 'react-sticky'

const Layout = ({ children }) => {
	return (
		<div>
			<StickyContainer>
				<Header />
				{children}
			</StickyContainer>
			<Footer />
		</div>
	)
}

export default Layout
