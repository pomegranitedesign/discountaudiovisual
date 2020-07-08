import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link, withRouter } from 'react-router-dom'
import logo from '../Assets/Images/logo2.png'
import Navigation from './Navigation'
import ShoppingCart from './ShoppingCart'
import Toggle from './Toggle'

const Header = (props) => {
	return (
		<Wrapper currentLocation={props.history.location.pathname}>
			<Video>
				<video
					playsInline
					loop
					muted
					autoPlay
					src="https://res.cloudinary.com/dtuu0mnxw/video/upload/v1594081662/DAV_HERO_VIDEO_4K_v.2_gsdwze.mp4"
				/>
			</Video>

			<div className="content">
				<Link to="/" style={{ zIndex: 20 }}>
					<Logo src={logo} alt="Logo" />
				</Link>
				<Navigation />

				<Toggle>
					{({ on, toggle }) =>
						on ? (
							<Fragment>
								<ShoppingCartOutlined
									onClick={toggle}
									style={{
										cursor: 'pointer',
										color: '#ffffff',
										fontSize: 30
									}}
								/>
								<ShoppingCart toggle={toggle} />
							</Fragment>
						) : (
							<ShoppingCartOutlined
								onClick={toggle}
								style={{
									cursor: 'pointer',
									color: '#fff600',
									fontSize: 30,
									zIndex: 20
								}}
							/>
						)}
				</Toggle>
			</div>
			<Slogan>Professional Audio Visual Equipment For Less</Slogan>

			{props.history.location.pathname === '/' ? (
				<div
					className="scrollDownContainer"
					onClick={() =>
						window.scrollTo({ top: 650, behavior: 'smooth' })}
				>
					<div className="chevronContainer">
						<div className="chevron" />
						<div className="chevron" />
						<div className="chevron" />
					</div>
					<p className="text">Scroll down</p>
				</div>
			) : null}
		</Wrapper>
	)
}

const Wrapper = styled.header`
	padding: 50px;
	padding-bottom: 0;
	height: 600px;

	div.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	z-index: 10 !important;

	@media screen and (min-width: 1920px) {
		${(props) => props.currentLocation === '/' && 'height: 500px'};
	}

	@media screen and (max-width: 992px) {
		height: 300px;
	}
`

const Video = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 100%;
	overflow: hidden;
	height: ${(props) => (props.location === '/' ? 'auto' : '700px')};

	@media screen and (max-width: 992px) {
		height: 100%;
		width: 100%;
	}

	video {
		min-width: 100%;
		overflow: hidden;
	}
`

const Logo = styled.img`width: 150px;`

const Slogan = styled.h1`
	font-size: 2.5vw;
	margin-top: 60px;
	padding-bottom: 60px;
	font-weight: 700;
	color: #ffffff;
	z-index: 20 !important;
	display: block;
	z-index: 200;
	letter-spacing: 2px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 2vw;
		margin-top: 20px;
		text-align: center;
	}

	@media screen and (min-width: 1220px) {
		margin-top: 120px !important;
	}
`

export default withRouter(Header)
