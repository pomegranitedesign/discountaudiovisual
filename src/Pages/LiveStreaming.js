import React, { useEffect } from 'react'
import styled from 'styled-components'

const LiveStreaming = (props) => {
	useEffect(() => {
		if (window.innerWidth >= 992) {
			window.scrollTo({ top: 600, left: 0, behavior: 'smooth' })
		}
	}, [])
	return (
		<Wrapper>
			<h1>
				Please Contact Us For More Information <br />
				About Event LiveStreaming Packages
			</h1>
			<img
				src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594165808/SONY_FS5_zujvx1.png"
				alt="Discount Audio Visual Event Live Streaming"
				width="400px"
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 100vh;
	background: #fff600;
	z-index: 300;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 20px;
	}
`

export default LiveStreaming
