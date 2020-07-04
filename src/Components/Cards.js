import React from 'react'
import { Row, Col } from 'antd'
import Card from './Card'
import styled from 'styled-components'
import group1 from '../Assets/Images/equipment_1.png'
import group2 from '../Assets/Images/equipment_2.png'

const Cards = () => {
	return (
		<Wrapper>
			{/* <Row>
				<Col lg={12}>
					<h1
						style={{
							textAlign: 'center',
							background: '#000000',
							padding: 5,
							borderRadius: 50,
							color: '#ffffff',
							display: 'block',
							width: 300,
							margin: '0 auto 40px auto'
						}}
					>
						Audio Packages
					</h1>
				</Col>
				<Col lg={12}>
					<h1
						style={{
							textAlign: 'center',
							background: '#000000',
							padding: 5,
							borderRadius: 50,
							color: '#ffffff',
							display: 'block',
							width: 300,
							margin: '0 auto 40px auto'
						}}
					>
						Video Packages
					</h1>
				</Col>
			</Row> */}
			<Row align="middle">
				<Col lg={12} sm={24} xs={24}>
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
						options={[
							'1 Day Rental $275.00 CAD',
							'2 Day Rental $467.50 CAD',
							'3 Day Rental $618.75 CAD',
							'1 Day Rental with Delivery $525.00 CAD',
							'2 Day Rental with Delivery $717.50 CAD',
							'3 Day Rental with Delivery $868.75 CAD'
						]}
					/>
				</Col>

				<Col lg={12} sm={24} xs={24}>
					<Card
						title="LCD Projection Package"
						quantity="10-50"
						image={group2}
						description={[
							'1 x 6’ Tripod Screen – c/w: Black Skirting',
							'1 x Boardroom LCD Projector – HD',
							'1 x PPT Wireless Advancer',
							'1 x Projector Stand/Cart – c/w: Black Skirting'
						]}
						options={[
							'1 Day Rental $275.00 CAD',
							'2 Day Rental $467.50 CAD',
							'3 Day Rental $618.75 CAD',
							'1 Day Rental with Delivery $525.00 CAD',
							'2 Day Rental with Delivery $717.50 CAD',
							'3 Day Rental with Delivery $868.75 CAD'
						]}
					/>
				</Col>
			</Row>

			<Row>
				<Col lg={12} sm={24} xs={24}>
					<Card
						title="SMALL P.A. SYSTEM"
						quantity="100-200"
						image={group1}
						description={[
							'4 x Speakers with Stands',
							'1 x Wireless Microphone',
							'1 x Mixing Console',
							'Patch for Laptop or Phone'
						]}
						options={[
							'1 Day Rental $350.00 CAD',
							'2 Day Rental $595.00 CAD',
							'3 Day Rental $787.50 CAD',
							'1 Day Rental with Delivery $600.00 CAD',
							'2 Day Rental with Delivery $845.00 CAD',
							'3 Day Rental with Delivery $1,037.50 CAD'
						]}
					/>
				</Col>
				<Col lg={12} sm={24} xs={24}>
					<Card
						title="LCD Projection Package"
						quantity="50-100"
						image={group2}
						description={[
							"1 x 8' Tripod Screen",
							'1 x Boardroom LCD Projector-HD',
							'1 x PPT Wireless Advancer',
							'1 x Projector Stand/Cart'
						]}
						options={[
							'1 Day Rental $350.00 CAD',
							'2 Day Rental $595.00 CAD',
							'3 Day Rental $787.50 CAD',
							'1 Day Rental with Delivery $600.00 CAD',
							'2 Day Rental with Delivery $845.00 CAD',
							'3 Day Rental with Delivery $1,037.50 CAD'
						]}
					/>
				</Col>
			</Row>

			<Row>
				<Col lg={12} sm={24} xs={24}>
					<Card
						title="A LA CARTE Audio Equipment"
						image={group1}
						quantity="2-50"
						description={[
							'Wired Podium Microphone & Stand',
							'Wireless Lavalier or Hand Held Microphone',
							'Digital Audio Recorder'
						]}
						options={[
							'Wired Podium Microphone & Stand $20.00 CAD',
							'Wireless Lavalier or Hand Held Microphone $135.00 CAD',
							'Digital Audio Recorder $75.00 CAD'
						]}
					/>
				</Col>

				<Col lg={12} sm={24} xs={24}>
					<Card
						title="50&quot; LED Monitor Package"
						quantity="10-50"
						image={group2}
						description={[ '50” LED Monitor', 'Dual Post Stand' ]}
						options={[
							'1 Day Rental $250.00 CAD',
							'2 Day Rental $425.00 CAD',
							'3 Day Rental $567.00 CAD',
							'1 Day Rental with Delivery $500.00 CAD',
							'2 Day Rental with Delivery $675.00 CAD',
							'3 Day Rental with Delivery $817.00 CAD'
						]}
					/>
				</Col>
			</Row>
		</Wrapper>
	)
}

const Wrapper = styled.div``

export default Cards
