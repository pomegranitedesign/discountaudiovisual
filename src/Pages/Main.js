import React from 'react'
import styled from 'styled-components'
import Cards from '../Components/Cards'
import Container from '../Components/Container'

const Main = () => {
	return (
		<Wrapper>
			<Container>
				<Cards />
			</Container>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background-color: #fff600;
	z-index: 30;
	position: relative;
	padding-top: 60px;
`

export default Main
