import { createSlice } from '@reduxjs/toolkit'

const getFromStorage = () => {
  return JSON.parse(window.localStorage.getItem('loggedUser')) || null
}
const userReducer = createSlice({
  name: 'user',
  initialState: getFromStorage(),
  reducers: {
    setUser (state, action) {
      return action.payload
    },
    clearUser (state, action) {
      return null
    }
  }
})

export const { setUser, clearUser } = userReducer.actions

export const login = (user) => {
  return dispatch => {
    dispatch(setUser(user))
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearUser())
  }
}

export default userReducer.reducer
