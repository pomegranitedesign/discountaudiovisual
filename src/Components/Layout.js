import React from 'react'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
// import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<ScrollToTop />
			{/* <Footer /> */}
		</div>
	)
}

export default Layout
