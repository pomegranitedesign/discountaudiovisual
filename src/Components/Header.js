import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/Images/logo.png'
import heroImage from '../Assets/Images/hero.jpg'
import Navigation from './Navigation'

const Header = () => {
	return (
		<Wrapper>
			<div>
				<Logo src={logo} alt="Logo" />
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
	div {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	z-index: 10 !important;
	background-image: url(${heroImage});
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-position: center center;
	box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.45);
	padding-left: 118px;
	padding-top: 40px;
	padding-bottom: 60px;

	@media screen and (max-width: 992px) {
		padding-left: 40px;
		padding-bottom: 20px;
		background-position: top center;
	}
`

const Logo = styled.img`
	z-index: 20;
	width: 100px;
`

const Slogan = styled.h1`
	font-size: 3vw;
	margin-top: 100px;
	font-weight: 800;
	color: #ffffff;
	z-index: 20 !important;
	display: block;

	@media screen and (max-width: 768px) {
		font-size: 4vw;
	}
`

export default Header
