import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {
	return (
		<Wrapper>
			<ul>
				<NavLink to="/audio-packages">
					<li
						style={{
							marginRight: '5%',
							lineHeight: '0 !important'
						}}
					>
						AUDIO
					</li>
				</NavLink>

				<NavLink to="/video-packages">
					<li
						style={{
							marginRight: '5%',
							lineHeight: '0 !important'
						}}
					>
						VIDEO
					</li>
				</NavLink>

				<NavLink to="/live-streaming-packages">
					<li
						style={{
							marginRight: '5%',
							lineHeight: '0 !important'
						}}
					>
						EVENT LIVE-STREAMING
					</li>
				</NavLink>

				<NavLink to="/contact-us">
					<li>CONTACT US</li>
				</NavLink>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	z-index: 40;
	padding: 0;
	margin: 0;

	ul {
		width: 600px;
		li {
			display: inline-block;
			list-style: none;
			color: #fff600;
			padding: 10px;
			margin: 0;
			border-radius: 3px;
			cursor: pointer;

			&:hover {
				background: #fff600;
				color: #000000;
			}
		}
	}

	@media screen and (max-width: 992px) {
		display: none;
	}
`

export default Navigation
