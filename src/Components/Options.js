import React, { useState } from 'react'
import styled from 'styled-components'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const Options = () => {
	const [ currentChoice, setCurrentChoice ] = useState(
		'1 Day Rental $275.00 CAD'
	)
	const menu = () => (
		<Menu className="menu" style={{ backgroundColor: '#000000' }}>
			<Menu.Item
				style={{ color: '#fff660' }}
				onClick={() => setCurrentChoice('1 Day Rental $275.00 CAD')}
				key="1_day"
			>
				1 Day Rental $275.00 CAD
			</Menu.Item>
			<Menu.Item
				style={{ color: '#fff660' }}
				onClick={() => setCurrentChoice('2 Day Rental $467.50 CAD')}
				key="2_day"
			>
				2 Day Rental $467.50 CAD
			</Menu.Item>
			<Menu.Item
				style={{ color: '#fff660' }}
				onClick={() => setCurrentChoice('3 Day Rental $618.75 CAD')}
				key="3_day"
			>
				3 Day Rental $618.75 CAD
			</Menu.Item>
			<Menu.Item
				style={{ color: '#fff660' }}
				onClick={() =>
					setCurrentChoice('1 Day Rental with Delivery $525.00 CAD')}
				key="1_day_delivery"
			>
				1 Day Rental with Delivery $525.00 CAD
			</Menu.Item>
			<Menu.Item
				style={{ color: '#fff660' }}
				onClick={() =>
					setCurrentChoice('2 Day Rental with Delivery $717.50 CAD')}
				key="2_day_delivery"
			>
				2 Day Rental with Delivery $717.50 CAD
			</Menu.Item>
			<Menu.Item
				style={{ color: '#fff660' }}
				onClick={() =>
					setCurrentChoice('3 Day Rental with Delivery $868.75 CAD')}
				key="3_day_delivery"
			>
				3 Day Rental with Delivery $868.75 CAD
			</Menu.Item>
		</Menu>
	)
	return (
		<Wrapper>
			<h2>Options</h2>
			<Dropdown overlay={menu} trigger={[ 'click' ]} className="collapse">
				<Choice
					className="ant-dropdown-link"
					onClick={(e) => e.preventDefault()}
				>
					{currentChoice} <DownOutlined />
				</Choice>
			</Dropdown>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin-bottom: 20px;
	h2 {
		margin-bottom: 10px;

		@media screen and (max-width: 768px) {
			text-align: center;
		}
	}
	.collapse {
		background: transparent;
		padding: 10px;
		margin-top: 10px;
		margin-bottom: 20px;
		box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 1);
		border: none;
		border-radius: 3px;
		@media screen and (max-width: 768px) {
			margin: 0 auto;
			display: block;
			text-align: center;

			.menu {
				margin: 0 auto;
			}
		}
	}

	.panel {
		button {
			background-color: #fff600;
			border: none;
			border-radius: 6px;
			cursor: pointer;
			margin-bottom: 20px;
			position: relative;
			z-index: 2;
			width: 100%;
			text-align: left;
			padding: 10px 10px 10px 0;
			transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

			&:hover {
				color: #fff600;
			}

			&:hover::before {
				width: 100%;
			}

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 0%;
				background: #000000;
				z-index: -1;
				transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
			}
		}
	}
`

const Choice = styled.a`
	font-size: 1vw;
	@media screen and (max-width: 768px) {
		font-size: 10px;
	}
`

export default Options
