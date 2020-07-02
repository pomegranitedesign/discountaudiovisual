import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import group1 from '../Assets/Images/equipment_1.png'
import group2 from '../Assets/Images/equipment_2.png'

const Cards = () => {
	return (
		<Wrapper>
			<Card
				title="SMALL P.A. SYSTEM"
				quantity="50-100"
				image={group1}
				description={[
					'2 x Speakers with Stands',
					'1 x Wireless Microphone',
					'1 x Mixing Console',
					'Patch for Laptop or Phone'
				]}
			/>

			<Card
				title="MEDIUM PRESENTATION SET"
				quantity="50-100"
				image={group2}
				description={[
					"1 x 8' Tripod Screen",
					'1 x Classroom LCD Projector-HD',
					'1 x PPT Wireless Advancer',
					'1 x Projector Stand/Cart'
				]}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export default Cards