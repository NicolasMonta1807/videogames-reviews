import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client'
import { LOGIN, REGISTER } from './loginQueries'
import { setUser } from '../reducers/userReducer'

export const useLogin = () => {
  const [login, { data, error }] = useMutation(LOGIN)
  const dispatch = useDispatch()

  const handleLogin = async (values) => {
    const response = await login({ variables: { ...values } })
    const user = {
      username: values.username,
      token: response.data.login.value
    }
    dispatch(setUser(user))
    return user
  }

  return { handleLogin, loginData: data, loginError: error }
}

export const useRegister = () => {
  const [register, { data, error }] = useMutation(REGISTER)

  const handleRegister = async (values) => {
    const response = await register({ variables: { ...values } })
    const user = {
      username: response.data.createUser.username,
      id: response.data.createUser.id
    }
    return user
  }

  return { handleRegister, registerData: data, registerError: error }
}
