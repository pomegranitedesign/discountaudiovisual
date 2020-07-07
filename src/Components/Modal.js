import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const _items = [1]

const Modal = ({ children, toggle }) => {
  const transitions = useTransition(_items, (item) => item, {
    from: { opacity: 0, height: '0px' },
    enter: { opacity: 1, height: '400px' },
    leave: { opacity: 0, height: '0px' }
  })
  return transitions.map(({ item, props, key }) => (
    <Wrapper key={key} style={props} onClick={toggle}>
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
  ))
}

const Wrapper = styled(animated.div)`
  position: fixed;
  min-width: 400px;
  border-radius: 5px;
  background: #fff600;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.6);
	
`

const CloseOutlinedStyled = styled(CloseOutlined)`
	transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) !important;
	&:hover {
		transform: scale(1.4)
	}
`

export default Modal
