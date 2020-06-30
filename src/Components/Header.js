import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/Images/logo.png'
import heroImage from '../Assets/Images/hero.png'
import Navigation from './Navigation'
import { Sticky } from 'react-sticky'

const Header = () => {
	return (
		<Wrapper>
			<Nav>
				<Logo src={logo} alt="Logo" />
				<Navigation />
			</Nav>
			<Slogan>
				Professional Audio Visual <br />
				Equipment For Less
			</Slogan>
		</Wrapper>
	)
}

const Wrapper = styled.header`
	padding-top: 40px;
	padding-right: 117px;
	padding-left: 117px;
	z-index: 10 !important;
	background-image: url(${heroImage});
	background-attachment: fixed;
	background-repeat: no-repeat;
	box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.45);
	height: 440px;
	position: relative;
`

const Nav = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	z-index: 40;
	position: fixed;
	width: 90%;
`

const Logo = styled.img`
	width: 100px;
	z-index: 20;
`

const Slogan = styled.h1`
	font-size: 82px;
	margin-top: 100px;
	padding-bottom: 114px;
	font-weight: 800;
	color: #ffffff;
	z-index: 20 !important;
	display: block;
`

export default Header
