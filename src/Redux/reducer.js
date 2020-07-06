import { ADD_TO_CART, REMOVE_FROM_CART } from './types'

const _initialState = {
  pickedDate: null,
  order: []
}

export default (state = _initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { pickedDate, order } = action.payload
      return { ...state, pickedDate, order }
    }
    case REMOVE_FROM_CART: {
      console.log('ADDING TO CART')
      return state
    }
    default:
      return state
  }
}
