import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { Table } from 'antd'
import { connect } from 'react-redux'
import Modal from './Modal'
import { removeFromCart } from '../Redux/actions'
import { CloseOutlined } from '@ant-design/icons'
import PayPal from './PayPal'

const ShoppingCart = ({ toggle, state, removeFromCart }) => {
	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 }
	})

	const _columns = [
		{
			title: '',
			dataIndex: 'image',
			key: 'image',
			render: (img) => {
				return (
					<img
						src={img}
						alt="Discount Audio Visual"
						style={{ width: 70 }}
					/>
				)
			}
		},
		{
			title: 'Package',
			dataIndex: 'title',
			key: 'package'
		},
		{
			title: 'Option',
			dataIndex: 'option',
			key: 'option'
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price'
			// render: (price) => <p>${price.toFixed(2)}</p>
		},
		{
			title: '',
			key: 'remove',
			render: (info) => {
				return (
					<CloseOutlinedStyled
						style={{ cursor: 'pointer' }}
						onClick={() => removeFromCart(info.id)}
					/>
				)
			}
		}
	]

	return (
		<Wrapper onClick={toggle} style={props}>
			<Modal toggle={toggle}>
				{state.state.order.length === 0 ? (
					<h1
						style={{
							fontSize: '0.6vw',
							textAlign: 'center',
							padding: 20
						}}
					>
						Sorry, You haven't chosen any items yet
					</h1>
				) : (
					<Table
						style={{ flex: 1, width: '80%' }}
						pagination={{ hideOnSinglePage: true }}
						columns={_columns}
						dataSource={state.state.order}
						rowClassName="customTableRow"
					/>
				)}
				<PayPal />
			</Modal>
		</Wrapper>
	)
}

const Wrapper = styled(animated.div)`
	background: rgba(0, 0, 0, 0.8);
	position: fixed;
	backdrop-filter: blur(4px);
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2000;
	overflow: scroll;

	.customTableRow {
		background: #fff600;
	}
`

const CloseOutlinedStyled = styled(CloseOutlined)`
	padding: 10px;
	border-radius: 4px;
	transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
	position: relative;
	&::before {
		content: "Remove";
		top: 0;
		left: 0;
		position: absolute;
		width: 0%;
		height: 100%;
		background: red;
	}
	&:hover::before {
		width: 100%;
	}
`

// REDUX
const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps, { removeFromCart })(ShoppingCart)
