import React, { useEffect } from 'react'
import styled from 'styled-components'

const LiveStreaming = (props) => {
	useEffect(() => {
		if (window.innerWidth >= 992)
			window.scrollTo({ top: 500, left: 0, behavior: 'smooth' })
	}, [])
	return (
		<Wrapper>
			<h1>LiveStreaming Component</h1>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 100vh;
	background: #fff600;
	z-index: 300;
`

export default LiveStreaming
