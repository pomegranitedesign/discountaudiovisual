import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import { Table } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import Modal from './Modal'
import testingImage from '../Assets/Images/equipment_3.png'
import { removeFromCart } from '../Redux/actions'

const ShoppingCart = ({ toggle, state, removeFromCart }) => {
  // const [ paidFor, setPaidFor ] = useState(false)
  // const [ loaded, setLoaded ] = useState(false)

  // let paypalRef = useRef()

  // useEffect(() => {
  // 	const script = document.createElement('script')
  // 	script.src = 'https://paypal.com/sdk/js?client-id=YOUR_CLIENT_ID'
  // 	script.addEventListener('load', () => setLoaded(true))
  // 	document.body.appendChild(script)
  // 	if (loaded) {
  // 		setTimeout(() =>
  // 			window.paypal
  // 				.Buttons({
  // 					createOrder: (data, actions) => {
  // 						return actions.order.create({
  // 							purchase_units: state.state.order
  // 						})
  // 					},
  // 					onApprove: async (data, actions) => {
  // 						const order = await actions.order.capture()
  // 						console.log(order)
  // 					}
  // 				})
  // 				.render(paypalRef)
  // 		)
  // 	}
  // }, [])

  const _columns = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      render: () => (
        <img
          src={testingImage}
          alt='Discount Audio Visual'
          style={{ width: 70 }}
        />
      )
    },
    {
      title: 'Package',
      dataIndex: 'package',
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

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  })
  return (
    <Wrapper onClick={toggle} style={props}>
      <Modal toggle={toggle}>
        <Table
          pagination={{ hideOnSinglePage: true }}
          columns={_columns}
          dataSource={state.state.order}
          rowClassName='customTableRow'
        />
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
	overflow: hidden;


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
