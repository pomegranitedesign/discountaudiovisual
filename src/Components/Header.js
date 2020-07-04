import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import logo from '../Assets/Images/logo.png'
import Navigation from './Navigation'
import video from '../Assets/Videos/hero_video.mp4'

const Header = () => {
	return (
		<Wrapper>
			<div className="video">
				<video playsInline loop muted autoPlay src={video} />
			</div>

			<div>
				<Link to="/">
					<Logo src={logo} alt="Logo" />
				</Link>
				<Navigation />
			</div>
			<Slogan>
				Professional Audio Visual <br />
				Equipment For Less
			</Slogan>
		</Wrapper>
	)
}

const Wrapper = styled.header`
	padding: 50px;
	div {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.video {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 80%;
		display: flex;
		align-items: center;
		justify-content: center;

		@media screen and (max-width: 992px) {
			height: 100%;
			width: 100%;
		}
	}

	video {
		min-width: 100%;
		overflow: hidden;

		@media screen and (max-width: 992px) {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			object-fit: fill !important;
		}
	}

	z-index: 10 !important;

	@media screen and (max-width: 992px) {
		height: 200px;
	}
`

const Logo = styled.img`
	z-index: 20;
	width: 100px;
`

const Slogan = styled.h1`
	font-size: 3vw;
	margin-top: 100px;
	padding-bottom: 60px;
	font-weight: 800;
	color: #ffffff;
	z-index: 20 !important;
	display: block;
	z-index: 200;

	@media screen and (max-width: 768px) {
		font-size: 4vw;
		margin-top: 20px;
		text-align: center;
	}
`

export default Header
