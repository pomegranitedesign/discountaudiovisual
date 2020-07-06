import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import Card from './Card'
import Container from './Container'
import group1 from '../Assets/Images/equipment_1.png'
import group2 from '../Assets/Images/equipment_3.png'
import group3 from '../Assets/Images/equipment_4.png'

const AudioPackages = () => {
  return (
    <Container>
      <Wrapper className='staggerContainer'>
        <Row align='middle'>
          <Col lg={12} sm={24} xs={24}>
            <Card
              title='SMALL P.A. SYSTEM'
              quantity='50-100'
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
              title='MEDIUM P.A. SYSTEM'
              quantity='100-200'
              image={group2}
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
        </Row>

        <Row>
          <Col lg={12} sm={24} xs={24}>
            <Card
              title='A LA CARTE Audio Equipment'
              image={group3}
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
              title='Miscellaneous Equipment'
              quantity='10-50'
              image={group1}
              description={[
                '4’x 8’ Stage – Variable Height = $65 per section',
                'VH1 Podium',
                'Drape Panel – Various Height',
                'Whiteboard or Corkboard',
                'Flipchart – c/w: Pad & Markers',
                'Display Easels'
              ]}
              options={[
                '4’x 8’ Stage – Variable Height = $65 CAD',
                'VH1 Podium = $125 CAD',
                'Drape Panel – Various Height = $70 CAD',
                'Whiteboard or Corkboard – $150 CAD',
                'Flipchart – c/w: Pad & Markers = $50 CAD',
                'Display Easels = $15 CAD'
              ]}
            />
          </Col>
        </Row>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div``

export default AudioPackages
