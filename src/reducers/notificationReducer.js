import { createSlice } from '@reduxjs/toolkit'

const notificationReducer = createSlice({
  name: 'user',
  initialState: {
    message: null,
    error: null
  },
  reducers: {
    setMessage (state, action) {
      return action.payload
    },
    clearMessage (state, action) {
      return { message: null, error: null }
    }
  }
})

export const { setMessage, clearMessage } = notificationReducer.actions

export const sendAlert = (message) => {
  return dispatch => {
    dispatch(
      setMessage({
        message,
        error: true
      })
    )
    setTimeout(() => { dispatch(clearMessage()) }, 5000)
  }
}

export const sendConfirmation = (message) => {
  return dispatch => {
    dispatch(
      setMessage({
        message,
        error: false
      })
    )
    setTimeout(() => { dispatch(clearMessage()) }, 5000)
  }
}

export default notificationReducer.reducer
