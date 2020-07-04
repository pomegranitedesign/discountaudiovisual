import React from 'react'
import styled from 'styled-components'
import aramarkLogo from '../Assets/Images/ARAMARK LOGO.png'
import canadianTireLogo from '../Assets/Images/CANADIAN TIRE LOGO.png'
import chanelLogo from '../Assets/Images/CHANEL LOGO.png'
import fordLogo from '../Assets/Images/FORD LOGO.png'
import scotiaBankLogo from '../Assets/Images/SCOTIABANK LOGO.png'
import tdLogo from '../Assets/Images/TD BANK LOGO.png'

const Companies = (props) => {
	return (
		<Wrapper>
			<h1>Companies Who Trust Discount Audio Visual</h1>
			<ul>
				<div>
					<li>
						<img src={aramarkLogo} alt="Discount Audio Visual" />
					</li>
					<li>
						<img
							src={canadianTireLogo}
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img src={tdLogo} alt="Discount Audio Visual" />
					</li>
				</div>

				<div>
					<li>
						<img src={chanelLogo} alt="Discount Audio Visual" />
					</li>
					<li>
						<img src={fordLogo} alt="Discount Audio Visual" />
					</li>
					<li>
						<img src={scotiaBankLogo} alt="Discount Audio Visual" />
					</li>
				</div>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 60px;
	width: 100%;
	height: 600px;
	background: #000000;

	ul {
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 70%;
		li {
			list-style: none;
		}
		div {
			display: flex;
			justify-content: center;
			align-items: center;

			img:nth-child(1) {
				margin-right: 100px;
			}
		}
	}

	h1 {
		color: #fff600;
		font-weight: 700;
		font-size: 40px;
		text-align: center;
		padding-top: 40px;
	}

	img {
		width: 150px;
	}
`

export default Companies
