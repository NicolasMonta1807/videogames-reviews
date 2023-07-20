import { useMutation } from '@apollo/client'
import { LOGIN } from './loginQueries'

export const useLogin = () => {
  const [login, { data, error }] = useMutation(LOGIN)

  const handleLogin = async (values) => {
    try {
      const response = await login({ variables: { ...values } })
      return response.data.login.value
    } catch (error) {
      console.error('Login failed:', error)
      return null
    }
  }

  return { handleLogin, loginData: data, loginError: error }
}
