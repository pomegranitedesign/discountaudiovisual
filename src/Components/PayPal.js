import React from 'react'
import styled from 'styled-components'
import { PayPalButton } from 'react-paypal-button-v2'
import { keys } from '../keys'
const CLIENT_ID =
	process.env.NODE_ENV === 'production' ? keys.clientIDProd : keys.clientIDDev

const PayPal = (props) => {
	return (
		<Wrapper>
			<PayPalButton
				amount="0.01"
				options={{
					clientId: CLIENT_ID,
					currency: 'CAD'
				}}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export default PayPal
