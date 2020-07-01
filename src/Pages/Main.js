import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <Wrapper>
      <h1>Main Page</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
	background-color: #fff600;
	height: 100vh;
	z-index: 30;
	position: relative;
`

export default Main
