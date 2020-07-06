import React, { useEffect } from 'react'
import styled from 'styled-components'
import VisualPackages from '../Components/VisualPackages'

const Visual = (props) => {
	useEffect(() => {
		if (window.innerWidth >= 992) {
			window.scrollTo({ top: 600, behavior: 'smooth' })
		}
	}, [])
	return (
		<Wrapper>
			<VisualPackages />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding-top: 60px;
	background: #fff600;
	z-index: 300;
`

export default Visual
