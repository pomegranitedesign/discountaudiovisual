import React, { Fragment } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Toggle from './Toggle'
import ShoppingCart from './ShoppingCart'

const PackageList = () => {
	return (
		<Toggle>
			{({ on, toggle }) => (
				<Fragment>
					{on && <ShoppingCart toggle={toggle} />}

					<Wrapper className="staggerContainer container">
						<div className="columns is-desktop">
							<div className="column">
								<Card
									toggle={toggle}
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

							<div className="column">
								<Card
									toggle={toggle}
									title="LCD Projection Package"
									quantity="10-50"
									image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079505/LCD_PROJECTION_PACKAGE_10-50_pdh6mp.png"
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
									toggle={toggle}
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
									toggle={toggle}
									title="LCD Projection Package"
									quantity="100-200"
									image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079511/LCD_PROJECTION_PACKAGE_50-100_PEOPLE_eblrjl.png"
									description={[
										'1 x 8’ Tripod Screen – c/w: Black Skirting',
										'1 x Classroom LCD Projector – HD',
										'1 x PPT Wireless Advancer',
										'1 x Projector Stand/Cart – c/w: Black Skirting'
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
									toggle={toggle}
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
									toggle={toggle}
									title="50” LED Monitor Package"
									image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079444/50_INCH_LED_MONITOR_PACKAGE_t8ulio.png"
									quantity="10-50"
									description={[
										'50” LED Monitor',
										'Dual Post Stand'
									]}
									options={[
										'1 Day Rental $250.00 CAD',
										'2 Day Rental $425.00 CAD',
										'3 Day Rental $567.00 CAD'
									]}
								/>
							</div>
						</div>

						<div className="columns is-desktop">
							<div className="column">
								<Card
									toggle={toggle}
									title="65” LED Monitor Package"
									quantity="50-100"
									image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079474/65_INCH_LED_MONITOR_PACKAGE_wwqs4c.png"
									description={[
										'65” LED Monitor',
										'Dual Post Stand'
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
									toggle={toggle}
									title="80” LED Monitor Package"
									image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079486/80_INCH_LED_MONITOR_PACKAGE_g2jz4y.png"
									quantity="100-500"
									description={[
										'80” LED Monitor',
										'Dual Post Stand'
									]}
									options={[
										'1 Day Rental $450.00 CAD',
										'2 Day Rental $765.00 CAD',
										'3 Day Rental $1012.50 CAD'
									]}
								/>
							</div>
						</div>

						<div className="columns is-desktop">
							<div className="column">
								<Card
									toggle={toggle}
									title="A la Carte Visual Equipment"
									image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079495/A_LA_CARTE_VISUAL_EQUIPMENT_bhykue.png"
									description={[
										'PC Laptop or Mac Computer – c/w: PPT',
										'Data Switcher for Multiple Laptops',
										'Digital Video Camera',
										'Additional 47” Monitor',
										'Additional 65” Monitor',
										'Additional 80” Monitor',
										'Dual Post Stand',
										'PPT Wireless Advancer',
										'Speaker Timer – c/w: Large LED Display',
										'Green Laser Pointer'
									]}
									options={[
										'PC Laptop or Mac Computer – c/w: PPT = $100',
										'Data Switcher for Multiple Laptops = $75',
										'Digital Video Camera = $125',
										'Additional 47” Monitor = $175',
										'Additional 65” Monitor = $225',
										'Additional 80” Monitor = $350',
										'Dual Post Stand = $75',
										'PPT Wireless Advancer = $50',
										'Speaker Timer – c/w: Large LED Display = $125',
										'Green Laser Pointer = $35'
									]}
								/>
							</div>

							<div className="column">
								<Card
									toggle={toggle}
									title="Miscellaneous Equipment"
									image="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594079547/MISCELLANEOUS_EQUIPMENT_uizrhu.png"
									description={[
										'4’x 8’ Stage – Variable Height',
										'VH1 Podium',
										'Drape Panel – Various Height',
										'Whiteboard or Corkboard',
										'Flipchart – c/w: Pad & Markers',
										'Display Easels '
									]}
									options={[
										'4’x 8’ Stage – Variable Height = $65 per section',
										'VH1 Podium = $125',
										'Drape Panel – Various Height = $70',
										'Whiteboard or Corkboard – $150',
										'Flipchart – c/w: Pad & Markers = $50',
										'Display Easels = $15'
									]}
								/>
							</div>
						</div>
					</Wrapper>
				</Fragment>
			)}
		</Toggle>
	)
}

const Wrapper = styled.div``

export default PackageList
