import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
	return (
		<Wrapper>
			<ul>
				<li style={{ marginRight: 71 }}>AUDIO</li>
				<li style={{ marginRight: 71 }}>VIDEO</li>
				<li style={{ marginRight: 71 }}>EVENT LIVE-STREAMING</li>
				<li>CONTACT US</li>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	z-index: 40;

	ul {
		li {
			display: inline-block;
			list-style: none;
			color: #fff600;
		}
	}
`

export default Navigation
