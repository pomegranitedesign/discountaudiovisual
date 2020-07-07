import React, { useState } from 'react'
import styled from 'styled-components'
import { PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { DatePicker, notification } from 'antd'
import { connect } from 'react-redux'
import moment from 'moment'
import { v4 as uuid } from 'uuid'
import { addToCart } from '../Redux/actions'
import Options from './Options'
// import ShoppingCart from './ShoppingCart'
import Toggle from './Toggle'

const Card = ({
  title,
  quantity,
  description = [],
  image = '',
  options = [],
  style = {},
  addToCart
}) => {
  const [addToCartHovered, setAddToCartHovered] = useState(false)
  const [viewCartHovered, setViewCardHovered] = useState(false)
  const [showMoreClicked, setShowMore] = useState(false)
  const [pickedDate, setPickedDate] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('')

  const handleAddToCart = () => {
    const splitted = selectedPackage.split(' ')
    const total = splitted.slice(splitted.length - 2)
    const price = total[0]
    // const currency = total[1]
    const option = splitted.slice(0, splitted.length - 2).join(' ')
    const order = {
      id: uuid(),
      title,
      price,
      option,
      image
    }
    addToCart(pickedDate, order)

    notification.open({
      message: `${title.toUpperCase()} was added to cart`,
      placement: 'bottomRight',
      style: {
        backgroundColor: '#000000',
        color: '#fff600 !important',
        borderRadius: 4
      }
    })
  }

  return (
    <Toggle>
      {({ on, toggle }) => (
        <Wrapper style={{ ...style }}>
          <Title>
            {title}
            {quantity ? (
              <Quantity>{quantity} PEOPLE</Quantity>
            ) : null}
          </Title>
          <div>
            <Image src={image} alt='Discount AV Equipment Image' />
          </div>
          <div>
            <Description>
              {description.length > 4 ? (
                <>
                  {showMoreClicked ? (
                    description.map((item) => (
                      <li key={item}>{item}</li>
                    ))
                  ) : (
                    description
                      .slice(0, 2)
                      .map((item) => (
                        <li key={item}>{item}</li>
                      ))
                  )}
                  <ShowMoreButton
                    onClick={() =>
                      setShowMore(!showMoreClicked)}
                  >
                    {showMoreClicked ? (
                      'Show Less'
                    ) : (
                      'Show More'
                    )}
                  </ShowMoreButton>
                </>
              ) : (
                description.map((item) => (
                  <li key={item}>{item}</li>
                ))
              )}
            </Description>
            <div style={{ width: 400, margin: '0 auto' }}>
              <Options
                options={options}
                setSelectedPackage={setSelectedPackage}
              />
              <DatePicker
                showTime
                mode='date'
                format='MMMM Do YYYY, h:mm a'
                popupStyle={{
                  background: 'red'
                }}
                style={{ marginTop: '30px' }}
                onChange={(date) =>
                  setPickedDate(
                    moment(date).format(
                      'MMM DD, YYYY | HH:MM'
                    )
                )}
              />
            </div>
            <Buttons isHovered={addToCartHovered}>
              <Button
                onMouseOver={() => setAddToCartHovered(true)}
                onMouseLeave={() => setAddToCartHovered(false)}
                isHovered={addToCartHovered}
                onClick={handleAddToCart}
              >
                {addToCartHovered ? (
                  <PlusOutlined />
                ) : (
                  'Add to Cart'
                )}
              </Button>

              <Button
                onClick={toggle}
                onMouseOver={() => setViewCardHovered(true)}
                onMouseLeave={() => setViewCardHovered(false)}
                className='viewCart'
              >
                {viewCartHovered ? (
                  <ShoppingCartOutlined
                    style={{ fontSize: 18 }}
                  />
                ) : (
                  'View Cart'
                )}
              </Button>
            </Buttons>
          </div>
        </Wrapper>
      )}
    </Toggle>
  )
}

const Wrapper = styled.div`
	text-align: center;
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 1);
	padding: 20px 0;
	border-radius: 5px;
	max-width: 800px;
	min-width: 400px;
	min-height: 600px;
	width: 600px;
	margin: 0 auto 100px auto;

	&:hover {
		transform: scale(1.05) !important;
	}

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
	font-size: 1.3vw;
	font-weight: 800;
	text-transform: uppercase;
	margin-bottom: 30px;

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
	font-size: 1.3vw;
	font-weight: 400;
	display: inline;
	padding-left: 10px;

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
	margin: 0 auto;

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
	width: 16vw;
	margin: 0 auto;
	display: block;
	margin-bottom: 30px;
	@media screen and (max-width: 768px) {
		width: 150px;
		margin: 0 auto;
		display: block;
	}
`

const ShowMoreButton = styled.button`
	width: 150px;
	padding: 5px;
	margin-top: 20px;
	border-radius: 3px;
	border: none;
	background: lightgray;
	cursor: pointer;
	outline: none;
	color: #000000;
	background: #fff600;

	&:hover {
		background: #000000;
		color: #fff600;
	}
`

// REDUX
const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps, { addToCart })(Card)
