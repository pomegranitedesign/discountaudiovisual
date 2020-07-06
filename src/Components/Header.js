import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Link, withRouter } from 'react-router-dom'

import logo from '../Assets/Images/logo2.png'
import Navigation from './Navigation'
import ShoppingCart from './ShoppingCart'
import Toggle from './Toggle'

const Header = (props) => {
  return (
    <Wrapper>
      <div className='video'>
        <video
          playsInline
          loop
          muted
          autoPlay
          src='https://res.cloudinary.com/dtuu0mnxw/video/upload/v1593901652/hero_video_v.3_cwa8xl.mp4'
        />
      </div>

      <div className='content'>
        <Link to='/'>
          <Logo src={logo} alt='Logo' />
        </Link>
        <Navigation />

        <Toggle>
          {({ on, toggle }) =>
            on ? (
              <>
                <ShoppingCartOutlined
                  onClick={toggle}
                  style={{
                    cursor: 'pointer',
                    color: '#ffffff',
                    fontSize: 30
                  }}
                />
                <ShoppingCart toggle={toggle} />
              </>
            ) : (
              <ShoppingCartOutlined
                onClick={toggle}
                style={{
                  cursor: 'pointer',
                  color: '#ffffff',
                  fontSize: 30
                }}
              />
            )}
        </Toggle>
      </div>
      <Slogan>
				Professional Audio Visual <br />
				Equipment For Less
      </Slogan>

      {props.history.location.pathname === '/' ? (
        <div
          className='scrollDownContainer'
          onClick={() =>
            window.scrollTo({ top: 560, behavior: 'smooth' })}
        >
          <div className='chevronContainer'>
            <div className='chevron' />
            <div className='chevron' />
            <div className='chevron' />
          </div>
          <p className='text'>Scroll down</p>
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
	width: 150px;
`

const Slogan = styled.h1`
	font-size: 3.2vw;
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
`

export default withRouter(Header)
