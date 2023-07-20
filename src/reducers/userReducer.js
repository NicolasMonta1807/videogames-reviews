import { createSlice } from '@reduxjs/toolkit'

const getFromStorage = () => {
  const user = JSON.parse(window.localStorage.getItem('loggedUser'))
  console.log('Logged in:', user)
  return user || null
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
