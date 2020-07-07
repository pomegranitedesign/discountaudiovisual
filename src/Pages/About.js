import React, { useEffect } from 'react'
import styled from 'styled-components'
import Container from '../Components/Container'

const About = (props) => {
  useEffect(() => {
    if (window.innerWidth >= 992) {
      window.scrollTo({ top: 600, behavior: 'smooth' })
    }
  }, [])
  return (
    <Wrapper>
      <Container>
        <h1>About Us</h1>
        <p>
					At Discount Audio Visual, we understand customers are doing
					things differently during these difficult economic times.
					Today’s businesses do not want to spend an exorbitant amount
					of monies having events in hotels, banquet halls and
					convention centres. During the COVID-19 health crisis, it
					makes sense for companies to have control of their own
					health & safety protocols and rely less on venues that may
					not have the proper measures implemented.
          <br />
          <br />
					The over-priced costs charged by these ‘in-house audio
					visual vendors’ are astronomical and unfair to companies
					simply trying to have an employee engagement meeting,
					seminar, training or any other gathering for the
					dissemination of information. The unreasonable ‘service
					fees’ charged by the hotel’s food & beverage department and
					the in-house audio visual provider is more than the actual
					rental of the equipment. Not to mention the ridiculous costs
					for WiFi charged by these venues with more service charges
					added. Enough is enough and you deserve better!
          <br />
          <br />
					For that reason, we are focused on simplifying the process
					of renting audio visual equipment as stress free as possible
					to allow you to have your events in your own office,
					warehouse or other areas within your organization. Keep your
					team together, informed and safe while saving costs!
          <br />
          <br />
          <br />
          <br />
					We offer easy to understand audio visual packages and
					provide substantial discounts on multiple day orders. For
					your convenience, we encourage a simple checkout process
					that helps keep costs down with the unnecessary
					administration costs associated with the larger ‘box type’
					audio visual companies that are then passed onto the
					customer.
          <br />
          <br />
					We have skilled technicians that can deliver and assist in
					the set up, operate and dismantle of the equipment at a
					reasonable cost. You are also welcome to pick up & return
					the equipment from our warehouse located near Dixie & 401 to
					avoid the nominal transportation charges.
          <br />
          <br />
					We are happy to take care of anything else you may require
					such as: tables, chairs, catering, crowd control barriers,
					hand-sanitizer stations, security, or any other needs you
					may have. Simply contact us for a separate quote based on
					your needs. Give us a call today and let us show you how we
					can put over 30 years of audio visual experience to work for
					you!
        </p>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
	background-color: #fff600;
	padding-top: 100px;
	padding-bottom: 100px;

	h1 {
		font-weight: 800;
		max-width: 900px;
		margin: 0 auto;
		font-size: 35px;
		margin-bottom: 40px;
	}

	p {
		max-width: 900px;
		line-height: 30px;
		display: block;
		margin: 0 auto;
		font-size: 16px;
	}
`

export default About
