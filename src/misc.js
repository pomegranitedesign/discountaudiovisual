export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('orderState')
    if (serializedState === null) return undefined
    else return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('orderState', serializedState)
  } catch (err) {
    // THROW AN ERROR
  }
}
