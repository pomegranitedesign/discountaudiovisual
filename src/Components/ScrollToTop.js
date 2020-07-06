import React, { useState, useEffect, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import { ArrowUpOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const ScrollToTop = (props) => {
	const [ isShown, setShown ] = useState(false)
	const listenToScroll = useCallback(
		() => {
			const winScroll =
				document.body.scrollTop || document.documentElement.scrollTop

			const height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight

			const scrolled = winScroll / height

			const pathname = props.history.location.pathname
			if (pathname === '/') {
				if (scrolled >= 0.1846356742499176) setShown(true)
				else setShown(false)
			}

			if (pathname === '/audio-packages') {
				if (scrolled >= 0.3091849935316947) setShown(true)
				else setShown(false)
			}

			if (pathname === '/visual-packages') {
				if (scrolled >= 0.14915693904020752) setShown(true)
				else setShown(false)
			}
		},
		[ props.history.location.pathname ]
	)

	useEffect(
		() => {
			window.addEventListener('scroll', listenToScroll)

			return () => {
				window.removeEventListener('scroll', listenToScroll)
			}
		},
		[ listenToScroll ]
	)
	return isShown ? (
		<Wrapper
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			<ArrowUpOutlined />
			<p>Back to Top</p>
		</Wrapper>
	) : null
}

const Wrapper = styled.div`
	position: fixed;
	height: 40%;
	width: 9%;
	top: 30%;
	left: 0;
	z-index: 2000 !important;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	transition: all 300ms ease-out !important;
	animation: slideInBottom 1500ms both cubic-bezier(0.075, 0.82, 0.165, 1);
	p {
		color: #000000;
		display: block;
		font-size: 10px;
		width: 100%;
		text-transform: uppercase;
		white-space: nowrap;
		text-align: center;
	}
	&:hover {
		transform: scale(1.1) !important;
	}

	@keyframes slideInBottom {
		from {
			opacity: 0;
			transform: translateY(40px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`

export default withRouter(ScrollToTop)
