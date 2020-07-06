import { ADD_TO_CART } from './types'

export const addToCart = (pickedDate, order) => ({
  type: ADD_TO_CART,
  payload: { pickedDate, order }
})
