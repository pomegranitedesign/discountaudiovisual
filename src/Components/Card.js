import React, { useState } from 'react'
import styled from 'styled-components'
import Options from './Options'
import { PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const Card = ({ title, quantity, description = [], image = '' }) => {
	const [ addToCartHovered, setAddToCartHovered ] = useState(false)
	const [ viewCartHovered, setViewCardHovered ] = useState(false)

	return (
		<Wrapper>
			<div>
				<Image src={image} alt="Discount AV Equipment Image" />
			</div>
			<div style={{ maxWidth: 400 }}>
				<Title>{title}</Title>
				<Quantity>{quantity} PEOPLE</Quantity>
				<Description>
					{description.map((item) => <li key={item}>{item}</li>)}
				</Description>
				<Options />
				<Buttons isHovered={addToCartHovered}>
					<Button
						onMouseOver={() => setAddToCartHovered(true)}
						onMouseLeave={() => setAddToCartHovered(false)}
						isHovered={addToCartHovered}
					>
						{addToCartHovered ? <PlusOutlined /> : 'Add to Cart'}
					</Button>

					<Button
						onMouseOver={() => setViewCardHovered(true)}
						onMouseLeave={() => setViewCardHovered(false)}
						className="viewCart"
					>
						{viewCartHovered ? (
							<ShoppingCartOutlined
								style={{ fontSize: 18, paddingTop: 3 }}
							/>
						) : (
							'View Cart'
						)}
					</Button>
				</Buttons>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 50px;
	max-width: 250px;

	@media screen and (max-width: 992px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`

const Title = styled.h1`
	padding: 0;
	margin: 0;
	font-size: 1vw;
	min-width: 450px;
	font-weight: 800;

	@media screen and (max-width: 992px) {
		margin-top: 10px;
		font-size: 2vw;
	}

	@media screen and (max-width: 768px) {
		font-size: 22px;
		text-align: center;
	}
`

const Quantity = styled.h1`
	padding: 0;
	margin: 0;
	font-size: 1vw;
	font-weight: 600;
	margin-bottom: 34px;

	@media screen and (max-width: 992px) {
		font-size: 1.4vw;
	}

	@media screen and (max-width: 768px) {
		font-size: 14px;
		text-align: center;
	}
`

const Description = styled.ul`
	margin-bottom: 20px;

	li {
		list-style: none;
		color: #000000;
		font-weight: 400;
	}

	@media screen and (max-width: 768px) {
		margin-bottom: 30px;
		li {
			text-align: center;
			font-size: 14px;
		}
	}
`

const Buttons = styled.div`margin-top: 40px;`

const Button = styled.button`
	padding: 10px;
	display: block;
	border-radius: 50px;
	background: #000000;
	color: #ffffff;
	border: none;
	cursor: pointer;
	transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
	width: 150px;
	margin-bottom: 10px;
	outline: none;

	@media screen and (max-width: 768px) {
		font-size: 12px;
		margin: 0 auto 10px auto;
	}
`

const Image = styled.img`
	width: 15vw;
	margin-right: 30px;
	display: block;
	@media screen and (max-width: 768px) {
		width: 150px;
		margin: 0 auto;
		display: block;
	}
`

export default Card
