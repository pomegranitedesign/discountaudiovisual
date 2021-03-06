import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Cards = () => {
	return (
		<Wrapper className="staggerContainer container">
			<div className="columns is-desktop">
				<div
					className="column"
					style={{ marginTop: '-200px', padding: 0 }}
				>
					<Card
						title="SMALL P.A. SYSTEM"
						quantity="50-100"
						image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079537/AUDIO_PACKAGE_SMALL_P.A._SYSTEM_50-100_PEOPLE_mfw54c.png"
						description={[
							'2 x Speakers with Stands',
							'1 x Wireless Microphone',
							'1 x Mixing Console',
							'Patch for Laptop or Phone'
						]}
						options={[
							'1 Day Rental $275.00 CAD',
							'2 Day Rental $467.50 CAD',
							'3 Day Rental $618.75 CAD'
						]}
					/>
				</div>

				<div className="column" style={{ marginTop: '-200px' }}>
					<Card
						title="LCD Projection Package"
						quantity="10-50"
						image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079505/LCD_PROJECTION_PACKAGE_10-50_pdh6mp.png"
						style={{
							backgroundColor: '#fff600',
							zIndex: 3000
						}}
						description={[
							'1 x 6’ Tripod Screen – c/w: Black Skirting',
							'1 x Boardroom LCD Projector – HD',
							'1 x PPT Wireless Advancer',
							'1 x Projector Stand/Cart – c/w: Black Skirting'
						]}
						options={[
							'1 Day Rental $275.00 CAD',
							'2 Day Rental $467.50 CAD',
							'3 Day Rental $618.75 CAD'
						]}
					/>
				</div>
			</div>

			<div className="columns is-desktop">
				<div className="column">
					<Card
						title="MEDIUM P.A. SYSTEM"
						quantity="100-200"
						image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079535/AUDIO_PACKAGE_MEDIUM_P.A._SYSTEM_100-200_PEOPLE_laztbc.png"
						description={[
							'4 x Speakers with Stands',
							'1 x Wireless Microphone',
							'1 x Mixing Console',
							'Patch for Laptop or Phone'
						]}
						options={[
							'1 Day Rental $350.00 CAD',
							'2 Day Rental $595.00 CAD',
							'3 Day Rental $787.50 CAD'
						]}
					/>
				</div>
				<div className="column">
					<Card
						title="LCD Projection Package"
						quantity="50-100"
						image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079511/LCD_PROJECTION_PACKAGE_50-100_PEOPLE_eblrjl.png"
						description={[
							"1 x 8' Tripod Screen",
							'1 x Boardroom LCD Projector-HD',
							'1 x PPT Wireless Advancer',
							'1 x Projector Stand/Cart'
						]}
						options={[
							'1 Day Rental $350.00 CAD',
							'2 Day Rental $595.00 CAD',
							'3 Day Rental $787.50 CAD'
						]}
					/>
				</div>
			</div>

			<div className="columns is-desktop">
				<div className="column">
					<Card
						title="A LA CARTE Audio Equipment"
						image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079528/AUDIO_PACKAGE_A_LA_CARTE_AUDIO_EQUIPMENT_zklfjs.png"
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
				</div>

				<div className="column">
					<Card
						title="50&quot; LED Monitor Package"
						quantity="10-50"
						image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079444/50_INCH_LED_MONITOR_PACKAGE_t8ulio.png"
						description={[ '50” LED Monitor', 'Dual Post Stand' ]}
						options={[
							'1 Day Rental $250.00 CAD',
							'2 Day Rental $425.00 CAD',
							'3 Day Rental $567.00 CAD'
						]}
					/>
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div``

export default Cards
