import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const Options = ({ options = [], setSelectedPackage }) => {
  const [currentChoice, setCurrentChoice] = useState(options[0])
  useEffect(
    () => {
      setSelectedPackage(currentChoice)
    },
    [setSelectedPackage, currentChoice]
  )
  const menu = () => (
    <Menu className='menu' style={{ backgroundColor: '#000000' }}>
      {options.map((option, i) => (
        <Menu.Item
          style={{ color: '#fff660' }}
          onClick={() => {
            setSelectedPackage(option)
            setCurrentChoice(option)
          }}
          key={i}
        >
          {option}
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <Wrapper>
      <h2>Options</h2>
      <Dropdown
        overlayClassName='dropdownOverlay'
        overlay={menu}
        trigger={['click']}
        className='collapse'
      >
        <Choice
          className='ant-dropdown-link'
          onClick={(e) => e.preventDefault()}
        >
          {currentChoice} <DownOutlined />
        </Choice>
      </Dropdown>
    </Wrapper>
  )
}

const Wrapper = styled.div`
	min-width: 400px;
	display: block;
	h2 {
		font-size: 1.2vw;
		font-weight: 400;
		margin-bottom: 10px;

		@media screen and (max-width: 768px) {
			text-align: center;
			font-size: 16px;
		}
	}

	.dropdownOverlay {
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
			width: 250px;

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

const Choice = styled.a`@media screen and (max-width: 768px) {font-size: 12px;}`

export default Options
