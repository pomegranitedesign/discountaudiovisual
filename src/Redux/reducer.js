import { ADD_TO_CART, REMOVE_FROM_CART } from './types'

const _initialState = {
  pickedDate: null,
  order: []
}

export default (state = _initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action.payload)
      const { pickedDate, order } = action.payload
      return { ...state, pickedDate, order: [...state.order, order] }
    }
    case REMOVE_FROM_CART: {
      const { orderID } = action
      const newOrder = [...state.order].filter(
        (order) => order.id !== orderID
      )
      return { ...state, order: newOrder }
    }
    default:
      return state
  }
}
