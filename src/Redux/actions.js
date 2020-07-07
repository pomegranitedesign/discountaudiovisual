import { ADD_TO_CART, REMOVE_FROM_CART } from './types'

export const addToCart = (pickedDate, order) => ({
  type: ADD_TO_CART,
  payload: { pickedDate, order }
})

export const removeFromCart = (orderID = '') => ({
  type: REMOVE_FROM_CART,
  orderID
})
