import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import Card from './Card'
import Container from './Container'
import smallPASystem from '../Assets/Images/equipment_1.png'
import miscellaneous from '../Assets/Images/equipment_4.png'
import mediumPASystem from '../Assets/Images/equipment_3.png'
import lcdProjectionPackage2 from '../Assets/Images/equipment_2.png'
import lcdProjectionPackage from '../Assets/Images/lcdProjectionPackage.png'
import fifty from '../Assets/Images/50" LED MONITOR PACKAGE.png'
import sixtyFive from '../Assets/Images/65" LED MONITOR PACKAGE.png'
import eighty from '../Assets/Images/80" LED MONITOR PACKAGE.png'
import alacarte from '../Assets/Images/A LA CARTE VISUAL EQUIPMENT.png'

const PackageList = () => {
  return (
    <Container>
      <Wrapper className='staggerContainer'>
        <Row align='middle'>
          <Col lg={12} sm={24} xs={24}>
            <Card
              title='SMALL P.A. SYSTEM'
              quantity='50-100'
              image={smallPASystem}
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
              title='LCD Projection Package'
              quantity='10-50'
              image={lcdProjectionPackage}
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
              title='MEDIUM P.A. SYSTEM'
              quantity='100-200'
              image={mediumPASystem}
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
              title='LCD Projection Package'
              quantity='100-200'
              image={lcdProjectionPackage2}
              description={[
                '1 x 8’ Tripod Screen – c/w: Black Skirting',
                '1 x Classroom LCD Projector – HD',
                '1 x PPT Wireless Advancer',
                '1 x Projector Stand/Cart – c/w: Black Skirting'
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
              title='A LA CARTE Audio Equipment'
              image={miscellaneous}
              quantity='2-50'
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
              title='50” LED Monitor Package'
              image={fifty}
              quantity='10-50'
              description={[
                '50” LED Monitor',
                'Dual Post Stand'
              ]}
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

        <Row>
          <Col lg={12} sm={24} xs={24}>
            <Card
              title='65” LED Monitor Package'
              quantity='50-100'
              image={sixtyFive}
              description={[
                '65” LED Monitor',
                'Dual Post Stand'
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
              title='80” LED Monitor Package'
              image={eighty}
              quantity='100-500'
              description={[
                '80” LED Monitor',
                'Dual Post Stand'
              ]}
              options={[
                '1 Day Rental $450.00 CAD',
                '2 Day Rental $765.00 CAD',
                '3 Day Rental $1012.50 CAD',
                '1 Day Rental with Delivery $700.00 CAD',
                '2 Day Rental with Delivery $1015.00 CAD',
                '3 Day Rental with Delivery $1262.50 CAD'
              ]}
            />
          </Col>
        </Row>

        <Row>
          <Col lg={12} sm={24} xs={24}>
            <Card
              title='A la Carte Visual Equipment'
              image={alacarte}
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
          </Col>

          <Col lg={12} sm={24} xs={24}>
            <Card
              title='Miscellaneous Equipment'
              image={miscellaneous}
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
          </Col>
        </Row>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div``

export default PackageList
