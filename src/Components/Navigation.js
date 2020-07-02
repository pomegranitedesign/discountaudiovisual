import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
	return (
		<Wrapper>
			<ul>
				<li style={{ marginRight: '5%', lineHeight: '0 !important' }}>
					AUDIO
				</li>
				<li style={{ marginRight: '5%', lineHeight: '0 !important' }}>
					VIDEO
				</li>
				<li style={{ marginRight: '5%', lineHeight: '0 !important' }}>
					EVENT LIVE-STREAMING
				</li>
				<li>CONTACT US</li>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	z-index: 40;
	padding: 0;
	margin: 0;

	ul {
		width: 500px;
		li {
			display: inline-block;
			list-style: none;
			color: #fff600;
			padding: 0;
			margin: 0;
		}
	}

	@media screen and (max-width: 992px) {
		display: none;
	}
`

export default Navigation
