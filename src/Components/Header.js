import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import logo from '../Assets/Images/logo.png'
import heroImage from '../Assets/Images/hero.png'
import Navigation from './Navigation'

const Header = () => {
  return (
    <Wrapper>
      <Row>
        <Col span={12}>
          <Logo src={logo} alt='Logo' />
        </Col>
        <Col span={12}>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Slogan>
						Professional Audio Visual <br />
						Equipment For Less
          </Slogan>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.header`
	padding-top: 40px;
	padding-right: 117px;
	padding-left: 117px;
	padding-bottom: 100px;
	z-index: 10 !important;
	background-image: url(${heroImage});
	background-attachment: fixed;
	background-repeat: no-repeat;
	box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.45);
	height: 440px;
`

// const Nav = styled.div`
// 	background-color: red;
// 	z-index: 40;
// `

const Logo = styled.img`
	width: 100px;
	z-index: 20;
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
