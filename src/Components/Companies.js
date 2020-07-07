import React from 'react'
import styled from 'styled-components'

const Companies = (props) => {
	return (
		<Wrapper>
			<h1>Companies Who Trust Discount Audio Visual</h1>
			<ul>
				<div>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594080827/ARAMARK_LOGO_xqcyhh.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594080857/CANADIAN_TIRE_LOGO_cr1nz1.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594080985/TD_BANK_LOGO_sc0usd.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594080904/COSTCO_WHOLESALE_ex75hj.png"
							alt="Discount Audio Visual"
						/>
					</li>
				</div>

				<div>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594083566/ARMANI_JEANS_LOGO_gw1egl.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594083567/CHAPTERS_LOGO_mrtoqe.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594083567/CIBC_BANK_LOGO_gj4abr.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594085108/TORONTO_LOGO_chbipz.png"
							alt="Discount Audio Visual"
						/>
					</li>
				</div>

				<div>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594080883/CHANEL_LOGO_dcprwn.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594080924/FORD_LOGO_dobv6v.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594080965/SCOTIABANK_LOGO_dcbtak.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594080947/MITSUBISHI_MOTORS_gfkv2y.png"
							alt="Discount Audio Visual"
						/>
					</li>
				</div>

				<div>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594083567/BAYER_LOGO_iu5bj6.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594083567/BROCK_UNIVERSITY_LOGO_p4vhxj.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594085105/BAYCREST_LOGO_vyplwe.png"
							alt="Discount Audio Visual"
						/>
					</li>
					<li>
						<img
							src="https://res.cloudinary.com/dtuu0mnxw/image/upload/v1594085109/YORK_UNIVERSITY_LOGO_rluu5l.png"
							alt="Discount Audio Visual"
						/>
					</li>
				</div>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-top: 80px;
	width: 100%;
	/* height: 600px; */
	background: #000000;

	ul {
		display: flex;
		justify-content: center;
		flex-direction: column;
		flex-wrap: wrap;
		height: 70%;
		margin-top: 40px;
		li {
			list-style: none;
			padding: 50px;
		}
		div {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;

			img {
				width: 150px;
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
