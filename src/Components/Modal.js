import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { animated } from 'react-spring'

// const _items = [ 1 ]

const Modal = ({ children, toggle }) => {
	// const transitions = useTransition(_items, (item) => item, {
	// 	from: { opacity: 0, height: '0px' },
	// 	enter: { opacity: 1, height: '900px' },
	// 	leave: { opacity: 0, height: '0px' }
	// })
	return (
		<Wrapper onClick={toggle}>
			<CloseOutlinedStyled
				onClick={toggle}
				style={{
					position: 'absolute',
					top: 0,
					right: 30,
					cursor: 'pointer'
				}}
			/>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled(animated.div)`
  position: fixed;
	min-width: 90vw;
	padding: 30px;
  border-radius: 5px;
  background: #fff600;
  display: flex;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.6);
	height: 80vh;

	@media screen and (max-width: 1220px) {
		max-height: 600px;
	}
`

const CloseOutlinedStyled = styled(CloseOutlined)`
	transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) !important;
	&:hover {
		transform: scale(1.4)
	}
`

export default Modal
