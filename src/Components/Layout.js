import React from 'react'
import Header from './Header'
import ScrollToTop from './ScrollToTop'
import styled from 'styled-components'
// import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			{children}
			<ScrollToTop />
			{/* <Footer /> */}
		</Wrapper>
	)
}

const Wrapper = styled.div``

export default Layout
